/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				"Oswald": ['Oswald', 'sans-serif'],
				"Jost": ["Jost", "sans-serif"],
			},
			fontSize: {
				"2xxl": "25px",
			},
			colors: {
				"black": {
					"DEFAULT": "#0E0D12",
					"50": "#0e0d13",
					"60": 'rgba(0,0,0,0.6)'
				},
				"red": "#FF002D"
			},
			backgroundImage: {
				"services-bg": "url('../images/services-section-bg.png')",
				"hero-bg": "url('../images/banner.png')",
				"patter": "url('../images/pattern-bg.webp')",
			},
			screens: {
				"1md": "800px",
				"2md": "992px",
				"xsm": "480px"
			}
		},
	},
	plugins: [],
}