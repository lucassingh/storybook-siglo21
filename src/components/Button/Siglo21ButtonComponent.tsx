import React from 'react';
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    useTheme,
    CircularProgress
} from '@mui/material';

export interface Siglo21ButtonComponentProps extends MuiButtonProps {
    fullWidth?: boolean;
    loading?: boolean;
    loadingText?: string;
}

export const Siglo21ButtonComponent: React.FC<Siglo21ButtonComponentProps> = ({
    children,
    sx,
    variant = 'contained',
    fullWidth = false,
    loading = false,
    loadingText = 'Cargando...',
    disabled,
    startIcon,
    color = 'primary',
    ...props
}) => {
    const theme = useTheme();

    const getButtonStyles = () => {
        if (color === 'primary') {
            if (variant === 'contained') {
                return {
                    backgroundColor: theme.palette.primary.dark,
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                    },
                    '&:active': {
                        backgroundColor: theme.palette.primary.light,
                    },
                };
            }

            if (variant === 'outlined') {
                return {
                    borderColor: theme.palette.primary.dark,
                    color: theme.palette.primary.dark,
                    '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(0, 169, 143, 0.04)',
                    },
                    '&:active': {
                        backgroundColor: 'rgba(0, 169, 143, 0.08)',
                    },
                };
            }

            // Variante "text"
            return {
                color: theme.palette.primary.dark,
                '&:hover': {
                    backgroundColor: 'rgba(0, 169, 143, 0.04)',
                },
                '&:active': {
                    backgroundColor: 'rgba(0, 169, 143, 0.08)',
                },
            };
        }

        // Para otros colores (secondary, error, warning, etc), dejar que MUI maneje los estilos
        return {};
    };

    return (
        <MuiButton
            variant={variant}
            color={color}
            fullWidth={fullWidth}
            disabled={disabled || loading}
            startIcon={loading ? <CircularProgress size={16} /> : startIcon}
            {...props}
            sx={{
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
                padding: '8px 24px',
                minWidth: '64px',
                '&.Mui-disabled': {
                    backgroundColor: theme.palette.grey[300],
                    color: theme.palette.grey[500],
                },
                ...getButtonStyles(),
                ...sx,
            }}
        >
            {loading && !startIcon ? loadingText : children}
        </MuiButton>
    );
};