/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {keyframes: {
        injection: {
          '0%': { transform: 'scale(1) rotate(0deg) translate(0, 0)' },
          '30%': { transform: 'scale(1.1) rotate(-15deg) translate(-10px, 10px)' },
          '60%': { transform: 'scale(1.1) rotate(15deg) translate(10px, -10px)' },
          '100%': { transform: 'scale(1) rotate(0deg) translate(0, 0)' },
        },
      },
      animation: {
        injection: 'injection 0.8s ease-in-out',
      },
    }
  },
  plugins: [],
};
