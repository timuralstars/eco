/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			white: colors.white,
			black: colors.black,
			accent: '#044B04',
			'gradient-top': '#1AA028',
			'gradient-bottom': '#136B1B',
			bg: '#EEFFEE'
		},
		extend: {
			spacing: {},
			transitionTimingFunction: {
				DEFAULT: 'linear'
			},
			transitionDuration: {
				DEFAULT: '400ms'
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: 0
					},
					'100%': {
						opacity: 1
					}
				},
				pulse: {
					'0%': {
						boxShadow: '0 0 0 0 rgba(4, 75, 4, 0.4)',
						boxShadow: '0 0 0 0 rgba(4,75, 4, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 0 15px rgba(4, 75, 4, 0)',
						boxShadow: '0 0 0 15px rgba(4, 75, 4, 0)'
					},
					'100%': {
						boxShadow: '0 0 0 0 rgba(4, 75, 4, 0)',
						boxShadow: '0 0 0 0 rgba(4, 75, 44, 0)'
					}
				}
			},
			animation: {
				fade: 'fadeIn .5s linear',
				pulse: 'pulse 1.5s ease-in-out infinite'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities, addComponents, theme }) => {
			addComponents({
				'.btn-primary': {
					padding: '16px 30px',
					overflow: 'hidden',
					fontSize: '10px',
					textTransform: 'uppercase',
					background: theme('colors.transparent'),
					borderRadius: '20px',
					letterSpacing: '1.5px',
					color: theme('colors.black'),
					border: `1px solid ${theme('colors.accent')}`,
					position: 'relative',
					transition: 'color .4s linear',
					'&::before': {
						content: "''",
						position: 'absolute',
						top: 0,
						left: 0,
						width: '0%',
						height: '100%',
						transition: 'width .4s linear',
						background: `linear-gradient(to top, ${theme(
							'colors[gradient-top]'
						)}, ${theme('colors[gradient-bottom]')})`,
						zIndex: -1
					},
					'&:hover': {
						color: theme('colors.white')
					},
					'&:hover::before': {
						width: '100%'
					}
				}
			}),
				addUtilities({
					'.accent-gradient': {
						background: `linear-gradient(to bottom, ${theme(
							'colors[gradient-top]'
						)}, ${theme('colors[gradient-bottom]')})`
					}
				})
		})
	]
}
