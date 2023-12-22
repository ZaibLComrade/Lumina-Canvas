/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
			},
			colors: {
				"black-1": "#131313",
			}
		},
	},
	
	daisyui: {
		themes: [
			{
				"dark": {
					"primary": "#0066CC",
					"secondary": "#00B894",
					"accent": "#FFA726",
					"neutral": "#636E72",
					"base-100": "#F9F9F9"
				}
			}
		]
	},
	
	plugins: [require('daisyui')],
}

