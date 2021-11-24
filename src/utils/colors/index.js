const mainColors = {
    green1: '#0bcad4',
    green2: '#edfcfd',
    dark1: '#112340',
    dark2: '#495a75',
    dark3: '#8092af',
    grey1: '#7d8797',
    white: 'white',
    black: 'black',
    grey2: '#e9e9e9',
    grey3: '#edeef0',
    grey4: '#b1b7c2',
    blue1: '#0066cb',
    black1:'#000',
    black2: 'rgba(0,0,0,0.5)',
    red1: '#e06379'
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    
    white: mainColors.white,
    black: mainColors.black,
    disable: mainColors.grey3,
    tertiary: mainColors.blue1,

    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark2,
        menuActive: mainColors.green1,
        subTitle: mainColors.dark3
    },
    button:{
        primary: {
            background: mainColors.green1,
            text: mainColors.white
        },
        secondary: {
            background: mainColors.white,
            text: mainColors.dark1,
        },
        disable: {
            background: mainColors.grey3,
            text: mainColors.grey4
        }
    },

    border:mainColors.grey2,
    cardLight: mainColors.green2,
    loadingBackground: mainColors.black2,
    error: mainColors.red1
};