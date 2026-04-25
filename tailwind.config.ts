
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
				sans: ['Poppins', 'sans-serif'],
				heading: ['Space Grotesk', 'Poppins', 'sans-serif'],
				display: ['Space Grotesk', 'Poppins', 'sans-serif'],
			},
			fontSize: {
				// Typography scale (8pt grid aligned)
				'display-xl': ['4rem', { lineHeight: '1.08', letterSpacing: '0' }],
				'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0' }],
				'display-md': ['2.75rem', { lineHeight: '1.12', letterSpacing: '0' }],
				'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0' }],
				'heading-lg': ['1.875rem', { lineHeight: '1.25', letterSpacing: '0' }],
				'heading-md': ['1.375rem', { lineHeight: '1.35', letterSpacing: '0' }],
				'body-lg': ['1.125rem', { lineHeight: '1.75' }],
				'body-md': ['1rem', { lineHeight: '1.75' }],
				'body-sm': ['0.875rem', { lineHeight: '1.6' }],
			},
			colors: {
				primary: {
					DEFAULT: '#8B5CF6', // Purple 500 (main accent)
					dark: '#7C3AED',    // Purple 600 for pressed states
					light: '#A78BFA',   // Purple 400 for hover states
					muted: '#C4B5FD'    // Purple 300 for subtle accents
				},
				secondary: {
					DEFAULT: '#F8FAFC', // Gray 50 (light background sections)
					dark: '#1F2937',    // Gray 800 (dark alternate sections)
					light: '#F1F5F9'    // Gray 100 (subtle background variations)
				},
				text: {
					primary: '#111827',   // Gray 900 (high contrast primary text)
					secondary: '#4B5563', // Gray 600 (secondary text with better contrast)
					muted: '#6B7280',     // Gray 500 (muted text with sufficient contrast)
					light: '#F9FAFB',     // Gray 50 (text on dark backgrounds)
					dark: '#0F172A'       // Gray 900 (high contrast text)
				},
				accent: {
					DEFAULT: '#8B5CF6', // Purple 500
					light: '#F3F4F6',   // Gray 100 for subtle backgrounds/tags
					hover: '#A78BFA'    // Purple 400 for hover states
				},
				success: '#10B981',     // Green for success/complete states
				warning: '#F59E0B',     // Amber for warnings/in progress
				error: '#EF4444',       // Red for errors/important
				info: '#6366F1',        // Indigo for info/neutral
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				'glow': '0 0 5px rgba(139, 92, 246, 0.5)',
				'purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)'
			},
			backgroundImage: {
				'hero-pattern': "url('/images/5d4d8a8f-272c-4d4c-be34-6f692f07cbf0.png')",
				'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
				'gradient-dark': 'linear-gradient(to bottom, #111827 0%, #0F172A 100%)',
				'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
