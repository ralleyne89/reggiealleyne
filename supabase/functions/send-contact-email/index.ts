
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const DEFAULT_ALLOWED_ORIGINS = [
  'https://reggiealleyne.com',
  'https://www.reggiealleyne.com',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
]

const configuredAllowedOrigins = Deno.env.get('CONTACT_ALLOWED_ORIGINS')
  ?.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const allowedOrigins = new Set(
  configuredAllowedOrigins?.length ? configuredAllowedOrigins : DEFAULT_ALLOWED_ORIGINS
)

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

function getCorsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  }
}

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  headers: Record<string, string> = {}
) {
  return new Response(
    JSON.stringify(body),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
  )
}

// Server-side validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters")
})

const contactRequestSchema = contactSchema.extend({
  turnstileToken: z.string().trim().min(1, "Turnstile verification is required").max(4096, "Turnstile token is invalid"),
  honeypot: z.string().optional().default(''),
})

type TurnstileSiteverifyResponse = {
  success: boolean
  'error-codes'?: string[]
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function verifyTurnstileToken(
  token: string,
  secretKey: string,
  remoteIp?: string | null
): Promise<boolean> {
  const body = new URLSearchParams({
    secret: secretKey,
    response: token,
  })

  if (remoteIp) {
    body.set('remoteip', remoteIp)
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  if (!response.ok) {
    console.error('Turnstile verification request failed', {
      status: response.status,
      statusText: response.statusText,
    })
    return false
  }

  const result = await response.json() as TurnstileSiteverifyResponse

  if (!result.success) {
    console.warn('Turnstile verification failed', {
      errorCodes: result['error-codes'] ?? [],
    })
  }

  return result.success
}

serve(async (req) => {
  const origin = req.headers.get('Origin')

  if (!origin || !allowedOrigins.has(origin)) {
    return jsonResponse({ error: 'Origin not allowed' }, 403)
  }

  const corsHeaders = getCorsHeaders(origin)

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return jsonResponse(
      { error: 'Method not allowed' },
      405,
      {
        ...corsHeaders,
        'Allow': 'POST, OPTIONS',
      }
    )
  }

  try {
    const rawData = await req.json()

    // Validate and sanitize input
    const validatedData = contactRequestSchema.parse(rawData)
    const { name, email, message, turnstileToken, honeypot } = validatedData

    if (honeypot.trim().length > 0) {
      return jsonResponse({ error: 'Invalid submission' }, 400, corsHeaders)
    }

    const turnstileSecretKey = Deno.env.get('TURNSTILE_SECRET_KEY')

    if (!turnstileSecretKey) {
      console.error('TURNSTILE_SECRET_KEY is not configured')
      return jsonResponse({ error: 'Contact form is not configured' }, 500, corsHeaders)
    }

    const remoteIp = req.headers.get('CF-Connecting-IP') ?? req.headers.get('x-forwarded-for')
    const isTurnstileValid = await verifyTurnstileToken(
      turnstileToken,
      turnstileSecretKey,
      remoteIp
    )

    if (!isTurnstileValid) {
      return jsonResponse({ error: 'Verification failed' }, 403, corsHeaders)
    }

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

    console.log('Processing contact form submission', {
      hasName: !!name,
      hasEmail: !!email,
      messageLength: message.length
    })

    // Escape all user inputs for HTML rendering
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'reggiealleyne89@gmail.com',
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    })

    if (error) {
      console.error('Resend API error:', error)
      throw error
    }

    console.log('Email sent successfully')

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Handle validation errors separately
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input data',
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        }),
        { 
          status: 400,
          headers: { 
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      )
    }
    
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { 
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        }
      }
    )
  }
})
