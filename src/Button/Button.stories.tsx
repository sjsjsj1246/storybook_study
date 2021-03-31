/** @jsxImportSource @emotion/react */
import Button, { ButtonProps } from './Button';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';

export default {
  title: 'components/Button',
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    children: { control: 'object' },
    theme: {
      control: {
        type: 'radio',
        option: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        option: ['small', 'medium', 'big'],
      },
    },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    iconOnly: { control: 'boolean' },
    onClick: { control: false },
  },
};

export const button = (args: ButtonProps) => {
  return <Button {...args} />;
};
button.args = {
  children: 'BUTTON',
  size: 'medium',
  theme: 'primary',
  disabled: false,
};
button.story = {
  name: 'Default',
};

export const primaryButton = (args: ButtonProps) => {
  return <Button {...args}></Button>;
};
primaryButton.args = {
  children: 'RPIMARY',
  theme: 'secondary',
};

export const secondaryButton = (args: ButtonProps) => {
  return <Button {...args}></Button>;
};
secondaryButton.args = {
  children: 'SECONDARY',
  theme: 'secondary',
};

export const tertiaryButton = (args: ButtonProps) => {
  return <Button {...args}></Button>;
};
tertiaryButton.args = {
  children: 'TERTIARY',
  theme: 'tertiary',
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = (args: ButtonProps) => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button {...args} size="small">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button {...args} size="medium">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button {...args} size="big">
          BUTTON
        </Button>
      </div>
    </div>
  );
};

export const disabled = (args: ButtonProps) => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button {...args} disabled>
          PRIMARY
        </Button>
      </div>
      <div>
        <Button {...args} disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button {...args} disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </div>
  );
};

export const customSized = (args: ButtonProps) => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button {...args} width="20rem">
          CUSTOM WIDTH
        </Button>
      </div>
      <div>
        <Button {...args} width="100%">
          FULL WIDTH
        </Button>
      </div>
    </div>
  );
};

export const withIcon = (args: ButtonProps) => {
  return (
    <div>
      <ButtonGroup>
        <Button {...args} size="small">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button {...args}>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button {...args} size="big">
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const iconOnly = (args: ButtonProps) => {
  return (
    <div>
      <ButtonGroup>
        <Button {...args} iconOnly size="small">
          <Icon icon="heart" />
        </Button>
        <Button {...args} iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button {...args} iconOnly size="big">
          <Icon icon="heart" />
        </Button>
      </ButtonGroup>
    </div>
  );
};
