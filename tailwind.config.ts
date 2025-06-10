
import type { Config } from "tailwindcss";

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
				heading: ['Outfit', 'sans-serif'],
				navbar: ['18thCtrKurStart', 'sans-serif'],
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'ripple': 'ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
				'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient-x': 'gradient-x 3s ease infinite'
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
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
