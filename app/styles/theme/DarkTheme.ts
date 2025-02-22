const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export default {
    //TOKENS
    colors: {
        light: {
            text: '#11181C',
            background: '#f3f3f3',
            tint: tintColorLight,
            icon: '#687076',
            tabIconDefault: '#687076',
            tabIconSelected: tintColorLight,
            header: '#7ae2ff'
        },
        dark: {
            text: '#ECEDEE',
            background: '#151718',
            tint: tintColorDark,
            icon: '#9BA1A6',
            tabIconDefault: '#9BA1A6',
            tabIconSelected: tintColorDark,
            header: '#7ae2ff'
        }
    },
    fonts: {
        Inter_100: 'Inter_100Thin',
        Inter_200: 'Inter_200ExtraLight',
        Inter_300_Light: 'Inter_300Light',
        Inter_400_Regular: 'Inter_400Regular',
        Inter_500_Medium: 'Inter_500Medium',
        Inter_600_SemiBold: 'Inter_600SemiBold',
        Inter_700_Bold: 'Inter_700Bold',
        Inter_900_Black: 'Inter_900Black',
    },
    fonts_weight: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
    font_size: {
        caption: '12px',
        button: '14px',
        body: '16px',
        title: '20px',
    },
    sizes: ['8px', '16px', '32px', '64px', '128px'],
    spaces: ['0px', '4px', '8px', '16px', '32px', '64px']
}