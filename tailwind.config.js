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
				"gray-1": "#505050",
				"gray-2": "#E0E0E0",
				"blue-1": "#2F80ED",
				"green-1": "#219653",
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

