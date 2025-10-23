import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import siglo21Theme from '../config/theme';

interface ThemeProps {
    children: React.ReactNode;
    isDocs?: boolean;
}

export const Theme = ({ children, isDocs = false }: ThemeProps) => (
    <ThemeProvider theme={siglo21Theme}>
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