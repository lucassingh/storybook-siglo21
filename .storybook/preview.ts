import React from 'react';
import type { Preview } from '@storybook/react';
import { Theme } from './theme.decorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo'
        },
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#f7f7f7' },
                { name: 'dark', value: '#121212' },
                { name: 'white', value: '#ffffff' },
            ],
        },

        docs: {
            canvas: {
                sourceState: 'shown',
                layout: 'centered',
            },
        },
        layout: 'padded',
    },
    decorators: [
        (Story, context) => {
            const isDocsView = context.viewMode === 'docs';

            if (isDocsView) {
                return React.createElement(Theme as React.ComponentType<any>, {
                    children: Story(),
                    isDocs: true
                });
            }

            return React.createElement(Theme as React.ComponentType<any>, {
                children: Story(),
                isDocs: false
            });
        },
    ],
};

export default preview;