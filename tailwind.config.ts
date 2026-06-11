
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const oklchVar = (name: string) => `oklch(var(${name}) / <alpha-value>)`;

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Geist Variable"', 'system-ui', 'sans-serif'],
				heading: ['"Geist Variable"', 'system-ui', 'sans-serif'],
				display: ['"Bricolage Grotesque Variable"', '"Bricolage Grotesque Fallback"', 'system-ui', 'sans-serif'],
				mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			fontSize: {
				// Fluid typography scale (values defined in index.css :root)
				'display-2xl': ['var(--fs-display-2xl)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
				'display-xl': ['var(--fs-display-xl)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
				'display-lg': ['var(--fs-display-lg)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
				'display-md': ['var(--fs-display-md)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
				'heading-xl': ['var(--fs-heading-xl)', { lineHeight: '1.16', letterSpacing: '-0.01em' }],
				'heading-lg': ['var(--fs-heading-lg)', { lineHeight: '1.22', letterSpacing: '-0.01em' }],
				'heading-md': ['var(--fs-heading-md)', { lineHeight: '1.3', letterSpacing: '0' }],
				'body-lg': ['1.125rem', { lineHeight: '1.75' }],
				'body-md': ['1rem', { lineHeight: '1.75' }],
				'body-sm': ['0.875rem', { lineHeight: '1.6' }],
			},
			colors: {
				primary: {
					DEFAULT: oklchVar('--color-accent'),
					dark: oklchVar('--color-accent-strong'),
					light: oklchVar('--color-accent-muted'),
					muted: oklchVar('--color-accent-soft')
				},
				secondary: {
					DEFAULT: oklchVar('--color-surface-soft'),
					dark: oklchVar('--color-ink'),
					light: oklchVar('--color-surface-raised')
				},
				text: {
					primary: oklchVar('--color-ink'),
					secondary: oklchVar('--color-ink-secondary'),
					muted: oklchVar('--color-ink-muted'),
					light: oklchVar('--color-surface-raised'),
					dark: oklchVar('--color-ink')
				},
				accent: {
					DEFAULT: oklchVar('--color-signal'),
					light: oklchVar('--color-signal-soft'),
					hover: oklchVar('--color-accent-muted')
				},
				success: oklchVar('--color-signal'),
				warning: oklchVar('--color-warm'),
				error: 'oklch(0.59 0.2 25 / <alpha-value>)',
				info: oklchVar('--color-accent-muted'),
				border: oklchVar('--color-border-soft'),
				input: oklchVar('--color-border-soft'),
				ring: oklchVar('--color-focus'),
				background: oklchVar('--color-surface-page'),
				foreground: oklchVar('--color-ink'),
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'blur-in': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'ripple': 'ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
				'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'fade-up': 'fade-up 0.6s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.4s ease-out forwards',
				'blur-in': 'blur-in 0.6s ease-out forwards'
			},
			spacing: {
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
				'128': '32rem',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			},
			dropShadow: {
				'glow': '0 0 5px oklch(var(--color-accent) / 0.42)',
				'purple-glow': '0 0 20px oklch(var(--color-accent) / 0.28)'
			},
			backgroundImage: {
				'hero-pattern': "url('/images/5d4d8a8f-272c-4d4c-be34-6f692f07cbf0.png')",
				'gradient-purple': 'linear-gradient(135deg, oklch(var(--color-accent)) 0%, oklch(var(--color-accent-muted)) 100%)',
				'gradient-dark': 'linear-gradient(to bottom, oklch(var(--color-ink)) 0%, oklch(0.16 0.026 268) 100%)',
				'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
