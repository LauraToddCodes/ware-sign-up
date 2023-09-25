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
			xs: "11px",
			base: "16px",
			lg: "1.5rem",
			xl: "3rem",
		},
		colors: {
			blue: "hsl(248, 32%, 49%)",
			dark: "hsl(249, 10%, 26%)",
			grayish: "hsl(246, 25%, 77%)",
			green: "hsl(154, 59%, 51%)",
			red: "hsl(0, 100%, 74%)",
			white: "rgb(255 255 255)",
		},
		extend: {},
	},
	plugins: [],
}
