/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF7EE',
          100: '#F5EED6',
          200: '#EBDCB0',
          300: '#DFC783',
          400: '#D4AF37', // Pure luxury gold
          500: '#C5A880', // Champagne / brushed bronze
          600: '#A98728',
          700: '#84671E',
          800: '#644D1A',
          900: '#4D3A16',
        },
        charcoal: {
          950: '#060607',
          900: '#0C0C0E',
          850: '#121215',
          800: '#18181D',
          750: '#1F1F25',
          700: '#272730',
        },
        ember: {
          500: '#E05A2B',
          600: '#C23D14',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5EED6 0%, #D4AF37 50%, #A98728 100%)',
        'gold-text': 'linear-gradient(135deg, #FFF1CA 0%, #D4AF37 60%, #B88E28 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 20%, rgba(212,175,55,0.08) 0%, rgba(6,6,7,0.95) 75%)',
        'card-gradient': 'linear-gradient(180deg, rgba(28,28,34,0.7) 0%, rgba(14,14,18,0.85) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.2)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

