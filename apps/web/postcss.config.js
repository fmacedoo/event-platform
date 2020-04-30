const customMedia = {
    '--layout-xs': '(min-width: 40em)', /* 640px */
    '--layout-sm': '(min-width: 48em)', /* 768px */
    '--layout-md': '(min-width: 64em)', /* 1024px */
    '--layout-lg': '(min-width: 75em)', /* 1200px */
    '--max-layout-xs': '(max-width: 39.938em)', /* 639px */
    '--max-layout-sm': '(max-width: 47.938em)', /* 767px */
    '--max-layout-md': '(max-width: 63.938em)', /* 1023px */
    '--max-layout-lg': '(max-width: 74.938em)', /* 1199px */
}

const condensed = {

}

const fontSets = {

}

module.exports = {
    plugins: {
        'autoprefixer': { grid: true, flexbox: 'no-2009' },
        'postcss-import': {},
        'postcss-custom-media': { importFrom: { customMedia } },
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-fontpath': {
            formats: [
                { type: 'truetype', ext: 'ttf' }
            ]
        },
        'postcss-extend': {},
        'postcss-custom-properties': {},
        'postcss-apply': { sets: fontSets },
    },
};
