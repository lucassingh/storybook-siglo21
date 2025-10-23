import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-vitest',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    typescript: {
        check: false,
        skipCompiler: true,
    },
};

export default config;