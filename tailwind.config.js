/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        '2xl': '1140px'
      },
    },
    extend: {
      colors: {
        'lite-blue': '#3A3EF5',
        'sky-blue': '#32C8F1',
        "blue-custom-300":"#3B28F638",
        "blue-custom-700":"#3B28F600",
        "off-black":"#01000B",
        "blue-purple":"#3A3EF5",
        "white-gray":"#FFFFFF00",
        "white-custom-70":"#FFFFFFB2"
      },
      lineHeight:{
        "custom-2xl":"118%",
        "custom-3xl":"120%",
        "custom-4xl":"126%",
        "custom-5xl":"150%"
      },
      backgroundImage:{
        'hero-bg':"url('../public/assets/images/hero-bg.webp')"
      }
    },
  },
  plugins: [],
}