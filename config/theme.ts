import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            light: '#08c5ab',
            main: '#00a98f',
            dark: '#006756',
            contrastText: '#fff',
        },
        secondary: {
            light: '#047abf',
            main: '#005587',
            dark: '#002e5d',
            contrastText: '#9E9B9B',
        },
        error: {
            main: '#dc1351',
            contrastText: '#fff',
        },
        warning: {
            main: '#faa41a',
            contrastText: '#fff',
        },
        info: {
            main: '#005587',
            contrastText: '#fff',
        },
        success: {
            main: '#0ee1a2',
            contrastText: '#fff',
        },
        background: {
            default: '#f7f7f7',
            paper: '#fff',
        },
        text: {
            primary: '#222',
            secondary: '#1F1E1E',
            disabled: '#8f8f94',
        },
        divider: '#ddd',
    },
    typography: {
        fontFamily: '"Arial", "Helvetica", sans-serif',
        h1: { fontWeight: 700, fontSize: '2.5rem', color: '#222' },
        h2: { fontWeight: 700, fontSize: '2rem', color: '#222' },
        h3: { fontWeight: 700, fontSize: '1.75rem', color: '#222' },
        h4: { fontWeight: 600, fontSize: '1.5rem', color: '#222' },
        h5: { fontWeight: 600, fontSize: '1.25rem', color: '#222' },
        h6: { fontWeight: 500, fontSize: '1rem', color: '#222' },
        body1: { fontSize: '1rem', fontWeight: 500, color: '#333' },
        body2: { fontSize: '0.9rem', color: '#333' },
        button: { textTransform: 'none', fontWeight: 600, fontFamily: 'Montserrat, sans-serif' },
        caption: { fontSize: '0.8rem', color: '#666' },
        overline: { fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', color: '#666' },
    },
    shape: {
        borderRadius: 12,
    },
    spacing: 8,
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                },
                input: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                    '&::placeholder': {
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        fontSize: 16,
                        color: '#424242',
                        fontWeight: 400,
                        opacity: 1,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 21,
                    fontWeight: 600,
                    fontFamily: 'Montserrat, sans-serif',
                    padding: '8px 24px',
                },
                containedPrimary: {
                    backgroundColor: '#00a98f',
                    '&:hover': { backgroundColor: '#006c5b' },
                },
                containedSecondary: {
                    backgroundColor: '#005587',
                    '&:hover': { backgroundColor: '#002e5d' },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: '#fff',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 16,
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: 0,
                    fontSize: '1rem',
                },
                head: {
                    backgroundColor: '#00a98f',
                    color: '#fff',
                    fontWeight: 600,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#222',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 16,
                    color: '#424242',
                    fontWeight: 400,
                },
            },
        },
    },
};

const siglo21Theme = createTheme(themeOptions);

export const darkTheme = createTheme({
    ...themeOptions,
    palette: {
        ...themeOptions.palette,
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cccccc',
            disabled: '#666666',
        },
    },
});

export default siglo21Theme;