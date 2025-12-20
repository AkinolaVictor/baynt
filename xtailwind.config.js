module.exports = {
    // content: [
    //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./src/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // ],
    theme: {
      extend: {
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1440px"
        },
        colors: {
          blu: "#9F7FF9",
          white: "white",
          dm: "#414141",
          bg: "#F7F8FA"
        //   background: "var(--background)",
        //   foreground: "var(--foreground)",
        },
      },
    },
    plugins: [],
}