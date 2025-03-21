/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'lexend-giga': 'Lexend+Giga',
        'montserrat': 'Montserrat'
      },
      screens: {
        'phone': '375px'
      },
      width: {
        '5%':'5%',
        '7%':'7%',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '30%':'30%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
      },
      height: {
        '5%':'5%',
        '7%':'7%',
        '10%':'10%',
        '20%':'20%',
        '30%':'30%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
        '100': '415px',
        '115': '450px',
        '120': '475px',
        '125': '500px',
        '130': '550px',
        '135': '600px',
        '140': '650px',
        '145': '700px'
      },
      fontSize: {
        's': '10px',
        'xs': '7px',
        'xxs': '5px',
        'xxxs': '4px'
      }
    },
  },
  plugins: [],
}

