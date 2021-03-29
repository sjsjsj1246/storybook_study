import React from 'react';
import Dialog, { DialogProps } from './Dialog';

export default {
  title: 'components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    visible: { control: 'boolean' },
    confirmText: { control: 'text' },
    cancelText: { control: 'text' },
    cancellable: { control: 'boolean' },
    hideButtons: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const dialog = (args: DialogProps) => {
  return <Dialog {...args} />;
};
dialog.args = {
  title: '결제 성공',
  description: '결제가 성공적으로 이루어졌습니다.',
  visible: true,
  confirmText: '확인',
  cancelText: '취소',
  cancellable: false,
};
dialog.story = {
  name: 'Default',
};

export const cancellable = (args: DialogProps) => {
  return <Dialog {...args} />;
};
cancellable.args = {
  title: '포스트 삭제',
  description: '포스트를 정말로 삭제하시겠습니까?',
  visible: true,
  confirmText: '삭제',
  cancellable: true,
};

export const customContent = (args: DialogProps) => {
  return <Dialog {...args} />;
};
customContent.args = {
  children: 'Custom Content',
  visible: true,
  hideButtons: true,
};
