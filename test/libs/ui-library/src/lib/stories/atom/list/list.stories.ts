import { Meta, Story } from '@storybook/angular/types-6-0';
import { ListComponent } from './list.component';
import { moduleMetadata } from '@storybook/angular';
import { MatListModule } from '@angular/material/list';

export default {
  title: 'atom/List',
  decorators: [
    moduleMetadata({
      imports: [MatListModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    icon: { control: { type: 'boolean' } },
    horizontal: { control: { type: 'boolean' } },
    isDarkMode: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<ListComponent> = (args) => ({
  component: ListComponent,
  props: args,
});

export const list = Template.bind({});
list.args = {
  backgroundColor: 'rgba(255,255,255,1)',
  list: 3,
  icon: false,
  horizontal: false,
  isDarkMode: false,
};
list.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=563%3A1918',
    },
  },
};
