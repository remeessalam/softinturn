/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#684df4",
        backgroundcolor: "#faf3ef",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#684df4",
        secondary: "#007acc",
        tertiary: "#2773A7",
        bordercolor: "rgb(255,173,140)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        "custom-gradient":
          "linear-gradient(90deg, rgba(104,77,244,0.22872899159663862) 0%, rgba(98,98,98,0.22872899159663862) 100%);",
        "backgro-gradient":
          "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%);",
        "backgro-gradient-revert":
          "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%);",
      },
    },
  },
  plugins: [],
};
