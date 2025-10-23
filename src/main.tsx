import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';
import siglo21Theme from '../config/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={siglo21Theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);