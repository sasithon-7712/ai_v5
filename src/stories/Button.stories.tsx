import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Example button component for demonstration
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        'inline-block',
        'border-none',
        'rounded',
        'cursor-pointer',
        'font-sans',
        'font-bold',
        'leading-none',
        primary ? 'text-white bg-blue-600' : 'text-gray-800 bg-transparent border border-gray-300',
        size === 'small' ? 'text-xs py-2 px-4' : size === 'large' ? 'text-base py-3 px-6' : 'text-sm py-2.5 px-5'
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
