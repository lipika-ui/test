import { Meta, Story } from '@storybook/angular/types-6-0';
import { IconsComponent } from './icons.component';

export default {
  title: 'atom/Icons',
  component: IconsComponent,
  controls: { expanded: true },
  argTypes: {
    iconClass: { control: 'text' },
    fontSize: {
      control: {
        type: 'select',
        options: ['xs-icon', 'sm-icon', 'md-icon', 'lg-icon', 'xl-icon'],
      },
    },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    label: { control: 'boolean' },
  },
} as Meta;

const Template: Story<IconsComponent> = (args: IconsComponent) => ({
  component: IconsComponent,
  props: args,
});

export const icon = Template.bind({});
icon.args = {
  iconClass: 'icon-battery-charging',
  fontSize: 'md-icon',
  fontColor: '#000000',
  label: false,
  backgroundColor: '#ffff',
};
icon.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A2134',
    },
  },
};
