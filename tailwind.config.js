/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13eca4",
        "primary-dark": "#0eb57d",
        "background-light": "#f6f8f7",
        "background-dark": "#10221c",
        "text-main": "#0d1b17",
        "text-muted": "#4c9a80",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      animation: {
        bounce: "bounce 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        shimmer: {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.8"
          }
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        }
      }
    },
  },
  plugins: [],
}
