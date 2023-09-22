/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		screens: {
			sm: "375px",
			lg: "1440px",
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
}
