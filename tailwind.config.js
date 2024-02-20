/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        magentaToOrange: "linear-gradient(to top, #F02AA6,#FF6F48)",
        blueToMagenta: "linear-gradient(#4851FF,#F02AA6)",
      },
    },
    colors: {
      grayishBlue: "hsl(232, 10%, 56%)",
      blueishPurple: "hsl(234, 25%, 52%)",
      darkBlue: "hsl(233, 54%, 16%)",
      brightPink: "hsl(341, 92%, 62%)",
      softPink: "hsl(341, 100%, 83%)",
      white: "hsl(0,0%,100%)",
      lightGray: "hsl(0,0%,59%)",
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
