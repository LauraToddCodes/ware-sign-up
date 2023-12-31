/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		minHeight: {
			screen: "100vh",
			inherit: "inherit",
		},
		screens: {
			sm: "375px",
			md: "1100px",
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
		extend: {
			boxShadow: {
				DEFAULT: "0px 8px rgb(0 0 0 / 0.1)",
			},
			maxWidth: {
				136: "34rem",
			},
		},
	},
	plugins: [],
}
