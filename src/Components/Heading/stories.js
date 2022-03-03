import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Texto de exemplo'
  },
  argsTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => <Heading {...args} />;
