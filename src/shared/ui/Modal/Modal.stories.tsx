import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
    + 'Duis eget magna eget mauris tristique tempus.\n'
    + 'Phasellus fringilla non diam eget accumsan. Aliquam erat volutpat.\n'
    + 'Quisque eget nunc interdum tortor finibus ultrices.\n'
    + 'rna neque, gravida sit amet massa in, ornare sagittis metus. Curabitur tempor et mi at mattis.',
  isOpen: true
};
