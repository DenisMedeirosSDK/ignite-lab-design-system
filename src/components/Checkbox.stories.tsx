import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Component/Checkbox',
  component: Checkbox,

  args: {
    children: 'Checkbox simple',
  },
  decorators: [
    Story => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Example checkbox</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
