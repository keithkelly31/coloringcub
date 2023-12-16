import { colors } from "./src/lib/config";

const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors")

let formattedColors = {};
colors.palettes.forEach(color => {
	formattedColors[color.name] = { ...color.palette, ...color.shades }
});

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: { 
				...formattedColors, 
				danger: formattedColors[colors.danger],
				primary: formattedColors[colors.primary], 
				secondary: formattedColors[colors.secondary], 
				success: formattedColors[colors.success]
			},
			fontFamily: {
				sans: ["Quicksand Variable", ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: []
};

module.exports = config;
