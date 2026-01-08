/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-purple': '#540D6E',
                'light-gray': '#D0CCD0',
                'mint-green': '#9FFCDF',
                'teal-blue': '#1C6E8C',
                'black-green': '#1F271B',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
