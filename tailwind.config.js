/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "375px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
}
