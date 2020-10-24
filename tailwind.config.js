module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: theme => ({
      'blue-plugin-1': '#2078C1',
      'blue-plugin-2': '#3CADE3'
    }),
    gradientColorStops: theme => ({
      'blue-plugin-1': '#2078C1',
      'blue-plugin-2': '#3CADE3'
    }),
    borderColor: theme => ({
      'blue-plugin-1': '#2078C1',
      'blue-plugin-2': '#3CADE3'
    }),
    screens: {
      'xs': { 'min': '320px', 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' },
    },
    extend: {
      strokeWidth: {
        '8': '8',
      },
      textColor: {
        'blue-plugin-1': '#2078C1',
        'blue-plugin-2': '#3CADE3'
      }
    },
  },
  variants: {},
  plugins: [],
}
