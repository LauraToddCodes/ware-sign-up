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
		fontSize: {
			base: "16px",
		},
		colors: {
			red: "hsl(0, 100%, 74%)",
			green: "hsl(154, 59%, 51%)",
			dark: "hsl(249, 10%, 26%)",
			grayish: "hsl(246, 25%, 77%)",
		},
		accentColor: {
			blue: "hsl(248, 32%, 49%)",
		},
		extend: {},
	},
	plugins: [],
}
