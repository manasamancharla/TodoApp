module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#f3f3f3",
				text: "#2f3645",

				secondary: "#f02d65",

				dark: {
					background: "#2f3645",
					// text: "#eeedeb",
					text: "#f02d65",
				},

				gray: {
					100: "#3C3D37",
				},
			},

			fontFamily: {
				pthin: ["Poppins-Thin", "sans-serif"],
				pextralight: ["Poppins-ExtraLight", "sans-serif"],
				plight: ["Poppins-Light", "sans-serif"],
				pregular: ["Poppins-Regular", "sans-serif"],
				pmedium: ["Poppins-Medium", "sans-serif"],
				psemibold: ["Poppins-SemiBold", "sans-serif"],
				pbold: ["Poppins-Bold", "sans-serif"],
				pextrabold: ["Poppins-ExtraBold", "sans-serif"],
				pblack: ["Poppins-Black", "sans-serif"],
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
