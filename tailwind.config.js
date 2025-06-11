export const theme = {
    extend: {
        animation: {
            'infinite-scale': 'infinite-scale 10s linear infinite',
        },
        keyframes: {
            'infinite-scale': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.2)' },
                '100%': { transform: 'scale(1)' },
            },
        },
    },
    fontFamily:{
        nunito:['Nunito','sans-serif']}
  
};
export const plugins = [];