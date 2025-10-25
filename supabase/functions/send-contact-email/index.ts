
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@4.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))
    const { name, email, message } = await req.json()

    console.log('Processing contact form submission', {
      hasName: !!name,
      hasEmail: !!email,
      messageLength: message?.length || 0
    })

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'reggiealleyne89@gmail.com', // Using your email directly
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
    
    return new Response(
      JSON.stringify({ error: error.message }),
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
