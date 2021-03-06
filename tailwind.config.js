module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#FF6363',
          secondary: {
            100: '#E2E2D5',
            200: '#888883',
          }
        },
        fontFamily: {
          body: ['Nunito']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};