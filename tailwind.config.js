module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'nightingale': {
                    DEFAULT: '#403172',
                    '50': '#806DC0',
                    '100': '#7662BC',
                    '200': '#644DB3',
                    '300': '#58439D',
                    '400': '#4C3A88',
                    '500': '#403172',
                    '600': '#322659',
                    '700': '#241C40',
                    '800': '#161127',
                    '900': '#08060E'
                },
                'tmp-honeypot': {
                    DEFAULT: '#EEC464',
                    '50': '#FFFFFF',
                    '100': '#FEFCF7',
                    '200': '#FAEED2',
                    '300': '#F6E0AE',
                    '400': '#F2D289',
                    '500': '#EEC464',
                    '600': '#E8B131',
                    '700': '#CB9416',
                    '800': '#996F11',
                    '900': '#664B0B'
                },

                'primary': '#f2f1f0',
                'secondary': '#f45f54',
                'accent': '#1d2251',
                'neutral': '#222121',

                'ash': {  DEFAULT: '#0A1319',  '50': '#3E779C',  '100': '#396C8E',  '200': '#2D5570',  '300': '#213F53',  '400': '#162936',  '500': '#0A1319',  '600': '#000000',  '700': '#000000',  '800': '#000000',  '900': '#000000'},
                'bone': {  DEFAULT: '#DECC9C',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#FDFBF8',  '300': '#F2ECD9',  '400': '#E8DCBB',  '500': '#DECC9C',  '600': '#D0B672',  '700': '#C2A148',  '800': '#9D8134',  '900': '#735E26'},

                'tungsten': {DEFAULT: '#252629'},
                'steel': {DEFAULT: '#c9cbcc'},
                'neon-yellow': {  DEFAULT: '#F0FF00',  '50': '#FBFFB8',  '100': '#FAFFA3',  '200': '#F7FF7A',  '300': '#F5FF52',  '400': '#F2FF29',  '500': '#F0FF00',  '600': '#BBC700',  '700': '#868F00',  '800': '#525700',  '900': '#1D1F00'},
                'neon-green': {  DEFAULT: '#00FF9F',  '50': '#B8FFE4',  '100': '#A3FFDC',  '200': '#7AFFCD',  '300': '#52FFBE',  '400': '#29FFAE',  '500': '#00FF9F',  '600': '#00C77C',  '700': '#008F59',  '800': '#005736',  '900': '#001F13'},
                'neon-sky': {  DEFAULT: '#00B8FF',  '50': '#B8EBFF',  '100': '#A3E5FF',  '200': '#7ADAFF',  '300': '#52CFFF',  '400': '#29C3FF',  '500': '#00B8FF',  '600': '#0090C7',  '700': '#00678F',  '800': '#003F57',  '900': '#00161F'},
                'neon-blue': {  DEFAULT: '#4700FF',  '50': '#CBB8FF',  '100': '#BDA3FF',  '200': '#9F7AFF',  '300': '#8252FF',  '400': '#6429FF',  '500': '#4700FF',  '600': '#3700C7',  '700': '#28008F',  '800': '#180057',  '900': '#09001F'},
                'neon-pink': {  DEFAULT: '#FF00B8',  '50': '#FFB8EB',  '100': '#FFA3E5',  '200': '#FF7ADA',  '300': '#FF52CF',  '400': '#FF29C3',  '500': '#FF00B8',  '600': '#C70090',  '700': '#8F0067',  '800': '#57003F',  '900': '#1F0016'},
                'neon-purple': {  DEFAULT: '#BD00FF',  '50': '#EDB8FF',  '100': '#E7A3FF',  '200': '#DD7AFF',  '300': '#D252FF',  '400': '#C829FF',  '500': '#BD00FF',  '600': '#9300C7',  '700': '#6A008F',  '800': '#400057',  '900': '#17001F'},
                'neon-magenta': {  DEFAULT: '#D600FF',  '50': '#F4B8FF',  '100': '#F0A3FF',  '200': '#EA7AFF',  '300': '#E352FF',  '400': '#DD29FF',  '500': '#D600FF',  '600': '#A700C7',  '700': '#78008F',  '800': '#490057',  '900': '#1A001F'},
                'neon-sakura': { DEFAULT: '#FF3533', '50': '#FFEBEB', '100': '#FFD7D6', '200': '#FFAEAD', '300': '#FF8685', '400': '#FF5D5C', '500': '#FF3533', '600': '#FA0200', '700': '#C20200', '800': '#8A0100', '900': '#520100'},

            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}