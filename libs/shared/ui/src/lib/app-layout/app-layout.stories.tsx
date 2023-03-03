import { Story, Meta } from '@storybook/react';
import { AppLayout, AppLayoutProps } from './app-layout';

export default {
  component: AppLayout,
  title: 'Layouts/AppLayout',
} as Meta;

const Template: Story<AppLayoutProps> = (args) => <AppLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
