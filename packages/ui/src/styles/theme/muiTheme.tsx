import { createTheme } from '@mui/material';

import { color, type Color } from './color';
import { roboto } from './font';
import { shadows } from './shadows';
import { baseFontSize } from './typography';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        formItem: React.CSSProperties;
        paragraphMedium: React.CSSProperties;
        paragraphNormal: React.CSSProperties;
        paragraphSmall: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        formItem: React.CSSProperties;
        paragraphMedium?: React.CSSProperties;
        paragraphNormal?: React.CSSProperties;
        paragraphSmall?: React.CSSProperties;
    }

    interface Theme {
        color: Color;
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        color?: Color;
    }

    interface ZIndex {
        select: number;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        formItem: true;
        paragraphMedium: true;
        paragraphNormal: true;
        paragraphSmall: true;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        unstyled: true;
        icon: true;
    }
}

export const theme = createTheme({
    color: color,
    palette: {
        text: {
            primary: color.foregrounds.primary,
            secondary: color.foregrounds.secondary,
        },
        primary: {
            main: color.foregrounds.primary,
        },
        // secondary: {
        //     main: color.buttons.secondary.enabled,
        // },
        // error: {
        //     main: color.alerts.error,
        // },
        // success: {
        //     main: color.alerts.success,
        // },
    },
    zIndex: {
        select: 9,
    },

    spacing: baseFontSize,
    shadows,

    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 0.875 * baseFontSize,
        htmlFontSize: baseFontSize,
        formItem: {
            fontSize: 0.875 * baseFontSize,
            lineHeight: 1.3,
        },

        h1: {
            fontSize: '1.325rem',
            lineHeight: '1.875rem',
            fontWeight: 500,
            letterSpacing: '0.01em',
            marginBottom: '0.75rem',
        },

        h2: {
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            fontWeight: 500,
            letterSpacing: '0.5px',
            marginBottom: '0.75rem',
        },

        h3: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 500,
            letterSpacing: '0.17px',
        },

        paragraphMedium: {
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.17px',
            fontWeight: 500,
        },

        paragraphNormal: {
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.17px',
            fontWeight: 400,
        },

        paragraphSmall: {
            fontSize: '0.75rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.17px',
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiContainer: {
            styleOverrides: {
                maxWidthXl: () => ({
                    maxWidth: 1406,

                    [theme.breakpoints.up('xl')]: {
                        maxWidth: 1406,
                    },
                }),
            },
        },
    },
});

export type Theme = typeof theme;
