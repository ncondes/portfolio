module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    style:{
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    theme: {
        extend: {
            colors: {
                "primary-font-color": "#45505B",
                "secondary-font-color":"#272829",
                "blue-color":"#459EAD",
                "nav-item-color":"#F2F3F5",
                "footer-color":"#F7F8F9"
            },
        },
    },
    variants: {},
    plugins: [],
}
