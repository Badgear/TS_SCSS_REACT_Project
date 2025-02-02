import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.L,
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: ButtonSize.L,
};

export const Square = Template.bind({});
Square.args = {
  children: 'B',
  theme: BackgroundTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
