import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from '../../model/types/notification';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const notification = {
    id: '1',
    title: 'New Notification',
    description: 'This is a new notification with a link.',
    href: 'https://example.com',
} as Notification;

export const Default = Template.bind({});
Default.args = {
    item: notification,
};
