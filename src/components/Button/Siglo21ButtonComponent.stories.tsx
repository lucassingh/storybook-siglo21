import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCart, Save } from '@mui/icons-material';
import { Siglo21ButtonComponent } from './Siglo21ButtonComponent';

const meta = {
    title: 'Components/Siglo21ButtonComponent',
    component: Siglo21ButtonComponent,
    parameters: {
        layout: 'padded',
        docs: {
            canvas: {
                layout: 'centered',
                style: {
                    minHeight: '200px',
                    maxHeight: '400px',
                    overflow: 'visible'
                }
            },
            story: {
                height: '200px'
            }
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: { type: 'select' },
            options: ['contained', 'outlined', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        fullWidth: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Siglo21ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
    args: {
        variant: 'contained',
        children: 'Click Me - Primary',
    },
};

export const WithOnClick: Story = {
    args: {
        variant: 'contained',
        children: 'Click Me - Ver Action',
    },
    name: 'With Click Handler',
};

export const SecondaryOutlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Click Me - Outlined',
    },
    name: 'Secondary Outlined',
};

export const TextVariant: Story = {
    args: {
        variant: 'text',
        children: 'Click Me - Text',
    },
    name: 'Text Variant',
};

export const WithIcon: Story = {
    args: {
        variant: 'contained',
        children: 'Click Me - With Icon',
        startIcon: <ShoppingCart />,
    },
    name: 'With Icon',
};

export const LoadingState: Story = {
    args: {
        variant: 'contained',
        children: 'Click Me - Loading',
        loading: true,
        startIcon: <Save />,
    },
    name: 'Loading State',
};

export const FullWidth: Story = {
    args: {
        variant: 'contained',
        children: 'Click Me - Full Width',
        fullWidth: true,
    },
    name: 'Full Width',
};

export const DisabledState: Story = {
    args: {
        variant: 'contained',
        children: 'Click Me - Disabled',
        disabled: true,
    },
    name: 'Disabled',
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Siglo21ButtonComponent variant="contained" size="small">
                    Click Me - Small
                </Siglo21ButtonComponent>
                <Siglo21ButtonComponent variant="contained" size="medium">
                    Click Me - Medium
                </Siglo21ButtonComponent>
                <Siglo21ButtonComponent variant="contained" size="large">
                    Click Me - Large
                </Siglo21ButtonComponent>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Siglo21ButtonComponent variant="outlined" size="small">
                    Click Me - Small
                </Siglo21ButtonComponent>
                <Siglo21ButtonComponent variant="outlined" size="medium">
                    Click Me - Medium
                </Siglo21ButtonComponent>
                <Siglo21ButtonComponent variant="outlined" size="large">
                    Click Me - Large
                </Siglo21ButtonComponent>
            </div>
        </div>
    ),
    name: 'Different Sizes',
};

export const ColorVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Siglo21ButtonComponent variant="contained" color="primary">
                Click Me - Primary
            </Siglo21ButtonComponent>
            <Siglo21ButtonComponent variant="contained" color="secondary">
                Click Me - Secondary
            </Siglo21ButtonComponent>
            <Siglo21ButtonComponent variant="contained" color="error">
                Click Me - Error
            </Siglo21ButtonComponent>
            <Siglo21ButtonComponent variant="contained" color="warning">
                Click Me - Warning
            </Siglo21ButtonComponent>
            <Siglo21ButtonComponent variant="contained" color="info">
                Click Me - Info
            </Siglo21ButtonComponent>
            <Siglo21ButtonComponent variant="contained" color="success">
                Click Me - Success
            </Siglo21ButtonComponent>
        </div>
    ),
    name: 'Color Variants',
};