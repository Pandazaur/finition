const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            brand: ['"Bellota Text"', 'sans-serif'],
            title: ['"PT Sans"', 'sans-serif'],
            body: ['"Arimo"', 'sans-serif'],
            // sans: ['"Arimo"']
        },
        // colors: {
        //     yellow: colors.amber,
        //     red: colors.red,
        //     green: colors.emerald,
        // }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
