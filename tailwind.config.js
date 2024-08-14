/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['0.8rem', '1rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.25rem', '1.75rem'],
        xl: ['1.5rem', '2rem'],
        '2xl': ['2rem', '2.5rem'],
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

