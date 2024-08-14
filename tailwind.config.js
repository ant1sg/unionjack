/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          custom: '#007cb4',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 2s ease-in-out',
      },
      backgroundImage: theme => ({
        'orange-image': "url('assets/UnionJack_AcidSerenades_Oranges.jpg')",
      }),
    },
  },
  plugins: [],
}

