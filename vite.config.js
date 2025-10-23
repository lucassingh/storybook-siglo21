/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
var dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
export default defineConfig(function (_a) {
    var mode = _a.mode;
    if (mode === 'lib') {
        return {
            plugins: [react()],
            build: {
                lib: {
                    entry: path.resolve(dirname, 'src/index.ts'),
                    name: 'Siglo21DesignSystem',
                    fileName: 'index',
                    formats: ['es']
                },
                rollupOptions: {
                    external: [
                        'react',
                        'react-dom',
                        'react/jsx-runtime',
                        '@emotion/react',
                        '@emotion/styled',
                        '@mui/material',
                        '@mui/material/styles',
                        '@mui/icons-material'
                    ],
                    output: {
                        globals: {
                            react: 'React',
                            'react-dom': 'ReactDOM',
                            '@emotion/react': 'emotionReact',
                            '@emotion/styled': 'emotionStyled',
                            '@mui/material': 'MaterialUI',
                            '@mui/icons-material': 'MaterialUIIcons'
                        }
                    }
                },
                outDir: 'dist'
            }
        };
    }
    return {
        plugins: [react()],
        test: {
            projects: [{
                    extends: true,
                    plugins: [
                        storybookTest({
                            configDir: path.join(dirname, '.storybook')
                        })
                    ],
                    test: {
                        name: 'storybook',
                        browser: {
                            enabled: true,
                            headless: true,
                            provider: 'playwright',
                            instances: [{
                                    browser: 'chromium'
                                }]
                        },
                        setupFiles: ['.storybook/vitest.setup.ts', './src/test/setup.ts']
                    }
                }]
        }
    };
});
