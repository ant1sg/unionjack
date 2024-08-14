/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'clamp-xl': 'clamp(1rem, 1vw, 2rem)',
      },
      width: {
        'clamp-xl': 'clamp(15rem, 60vw, 30rem)', 
      },
      backgroundSize: {
        'clamp-bg': 'clamp(450px, 40vw, 1500px)', 
      },
      colors: {
        blue: {
          custom: '#007db5',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '40%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0},
          '50%': { opacity: 0},
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 2s ease-in-out',
        fadeInLeft: 'fadeInLeft 2s ease-in-out',
        fadeIn: 'fadeIn 4s ease-in-out',
        
      },
      backgroundImage: theme => ({
        'orange-image': "url('assets/UnionJack_AcidSerenades_Oranges_transparent2.png')",
      }),
    },
  },
  plugins: [],
}

