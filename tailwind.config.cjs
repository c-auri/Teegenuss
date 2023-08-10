/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function({ addComponents }) {
			addComponents({
				'.button': {
					borderRadius: '8px',
					border: '1px solid #9ca3af',
					padding: '.5rem 1rem',
					fontWeight: 'bold',
					color: '#9ca3af',
					backgroundColor: 'white',
					'&:hover': {
						borderColor: '#737373',
						backgroundColor: '#737373',
					}
				}
			})
		})
	],
}