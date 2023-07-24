module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

    colors: {
      primary: {},

      secondary: {
        DEFAULT: '#fff',
      },
      blue: {
        light: '#155e75',
        DEFAULT: '#0c4a6e',
      },
      black: {
        light: '#666',
        DEFAULT: '#000',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        xl: '2.5rem',
      },

      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '150%',
            letterSpacing: '0.01em',
            fontWeight: '400',
          },
        ],
        sm: [
          '16px',
          {
            lineHeight: '150%',
            letterSpacing: '0.01em',
            fontWeight: '400',
          },
        ],
        base: [
          '18px',
          {
            lineHeight: '150%',
            letterSpacing: '0.01em',
            fontWeight: '400',
          },
        ],
        lg: [
          '24px',
          {
            lineHeight: '150%',
            letterSpacing: '0.01em',
            fontWeight: '400',
          },
        ],
        xl: [
          '64px',
          {
            lineHeight: '150%',
            letterSpacing: '0.01em',
            fontWeight: '400',
          },
        ],
        '2xl': [
          '96px',
          {
            lineHeight: '130%',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [],
};
