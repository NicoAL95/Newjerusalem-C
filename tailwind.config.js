/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      'mxs': '500px',
      'xs': '550px',
      'smn': '600px',
      'blg': '650px',
      'bxl': '670px',
      'hlg': '700px',
      'klg': '750px',
      'jlg': '800px',
      'elg': '840px',
      'zlg': '870px',
      'nlg': '950px',
      'slg': '1030px',
      'sbg': '1070px',
      'xlg': '1116px'
    },
    extend: {
      colors:{
        'germanMilk': '#F1F1F1',
        'darkWheel': '#1E1E1E',
        'ironGrey': '#585858',
        'wallWhite': '#F6F6F6'
      },
      fontFamily:{
        'geoExtra': 'geoExtra, sans-serif',
        'geoBold': 'geoBold, sans-serif',
        'geoReg': 'geoReg, sans-serif',
        'geoLight': 'geoLight, sans-serif',
        'futExtra': 'futExtra, sans-serif',
        'futBold': 'futBold, sans-serif',
        'futMed': 'futMed, sans-serif',
        'futReg': 'futReg, sans-serif',
        'workSans': 'Work Sans, sans-serif',
        'dmSans': 'DM Sans, sans-serif',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
