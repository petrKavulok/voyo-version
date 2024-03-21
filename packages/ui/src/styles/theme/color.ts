export const color = {
    accent: {
        primary: '#020203',
        secondary: '#D60022',
        primaryRed: '#E60028',
    },
    backgrounds: {
        // primary: '#000',
        primary: '#0a0a0a',
        secondary: '#1d1d1d',
        card: '#181818',
        voyoPurple: 'rgb(103, 34, 255)',
    },
    foregrounds: {
        primary: '#020203',
        secondary: '#78787D',
    },
    typography: {
        white: '#FFF',
        black: '#000',
        lightPurple: 'rgb(190 160 255)',
        voyoBlue: '#30E3EA',
    },
} as const;

export type Color = typeof color;
