module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'avatar-sleepdown': {
          '0%': {
            transform: 'translateY(70%) scale(1.5)',
          },
          '100%': {
            transform: 'translateY(0%) scale(1)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out 0.7s both',
        'avatar-sleepdown': 'avatar-sleepdown 1s ease-in-out 0.3s both',
      },
    },
  },
  plugins: [],
};
