module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            "open-sans": ['Open Sans', 'sans-serif'],
            "poppins": ['Poppins', 'sans-serif'],
            "raleway": ['Ralleway', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                "hero-pattern": "url('../src/assets/images/hero.jpg')",
            },
            colors: {
                "primary-font-color": "#45505B",
                "secondary-font-color":"#272829",
                "blue-color":"#459EAD",
                "nav-item-color":"#F2F3F5",
                "footer-color":"#F7F8F9"
            },
        },
    },
    variants: {
        fill: [ 'hover', 'focus' ],
        extend: {
            ringWith: [ 'hover', 'focus'],
        },
    },
    plugins: [],
}
