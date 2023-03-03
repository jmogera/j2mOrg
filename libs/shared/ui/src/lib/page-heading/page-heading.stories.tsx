import { Story, Meta } from '@storybook/react';
import { PageHeading, PageHeadingProps } from './page-heading';

export default {
  component: PageHeading,
  title: 'Layouts/PageHeading',
} as Meta;

const Template: Story<PageHeadingProps> = (args) => <PageHeading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
