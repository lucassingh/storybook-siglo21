import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { appTheme } from '../src/config/theme';

interface ThemeProps {
    children: React.ReactNode;
    isDocs?: boolean;
}

export const Theme = ({ children, isDocs = false }: ThemeProps) => (
    <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <div
            style={{
                padding: isDocs ? '20px' : '16px',
                minHeight: isDocs ? 'auto' : '100vh',
                display: isDocs ? 'flex' : 'block',
                justifyContent: isDocs ? 'center' : 'flex-start',
                alignItems: isDocs ? 'center' : 'flex-start',
                boxSizing: 'border-box'
            }}
        >
            {children}
        </div>
    </ThemeProvider>
);