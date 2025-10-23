import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Siglo21ButtonComponent } from './Siglo21ButtonComponent';

// Mock simplificado sin useTheme
vi.mock('@mui/material', async () => {
    const actual = await vi.importActual('@mui/material');
    return {
        ...actual,
    };
});

describe('Siglo21ButtonComponent', () => {
    it('should render children correctly', () => {
        render(<Siglo21ButtonComponent>Click me</Siglo21ButtonComponent>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should handle click events', () => {
        const handleClick = vi.fn();

        render(
            <Siglo21ButtonComponent onClick={handleClick}>
                Clickable Button
            </Siglo21ButtonComponent>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should show loading text when loading', () => {
        render(
            <Siglo21ButtonComponent loading loadingText="Loading...">
                Original Text
            </Siglo21ButtonComponent>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should be disabled when loading', () => {
        render(
            <Siglo21ButtonComponent loading>
                Loading Button
            </Siglo21ButtonComponent>
        );

        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should be disabled when disabled prop is true', () => {
        render(
            <Siglo21ButtonComponent disabled>
                Disabled Button
            </Siglo21ButtonComponent>
        );

        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should show custom icon', () => {
        render(
            <Siglo21ButtonComponent startIcon={<span data-testid="custom-icon">🚀</span>}>
                With Icon
            </Siglo21ButtonComponent>
        );

        expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('should have correct variant classes', () => {
        const { rerender } = render(
            <Siglo21ButtonComponent variant="contained">
                Contained
            </Siglo21ButtonComponent>
        );

        const button = screen.getByRole('button');
        expect(button.className).toContain('MuiButton-contained');

        rerender(
            <Siglo21ButtonComponent variant="outlined">
                Outlined
            </Siglo21ButtonComponent>
        );

        expect(button.className).toContain('MuiButton-outlined');
    });

    it('should have correct size classes', () => {
        const { rerender } = render(
            <Siglo21ButtonComponent size="small">
                Small
            </Siglo21ButtonComponent>
        );

        const button = screen.getByRole('button');
        expect(button.className).toContain('MuiButton-sizeSmall');

        rerender(
            <Siglo21ButtonComponent size="large">
                Large
            </Siglo21ButtonComponent>
        );

        expect(button.className).toContain('MuiButton-sizeLarge');
    });

    it('should have fullWidth class when fullWidth is true', () => {
        render(
            <Siglo21ButtonComponent fullWidth>
                Full Width
            </Siglo21ButtonComponent>
        );

        expect(screen.getByRole('button').className).toContain('MuiButton-fullWidth');
    });
});