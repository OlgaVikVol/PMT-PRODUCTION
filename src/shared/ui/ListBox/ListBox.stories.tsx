import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {
            value: 'box 1',
            content: 'box 1',
            disabled: false,
        },
        {
            value: 'box 2',
            content: 'box 2',
            disabled: true,
        },
        {
            value: 'box 3',
            content: 'box 3',
            disabled: false,
        },
    ],
    value: 'box 2',
    readonly: false,
};
