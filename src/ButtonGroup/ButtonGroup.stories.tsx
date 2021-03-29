import React from 'react';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import Button from '../Button/Button';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
    },
    rightAlign: { control: 'boolean' },
    gap: { control: 'text' },
    children: { control: false },
    className: { control: false },
  },
};

export const buttonGroup = (args: ButtonGroupProps) => {
  return (
    <ButtonGroup {...args}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};
buttonGroup.args = {
  direction: 'row',
  rightAlign: false,
  gap: '0.5rem',
};
buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};
