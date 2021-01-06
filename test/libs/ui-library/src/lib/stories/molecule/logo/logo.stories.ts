import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import StoryLogoComponent from './logo.component';
import { LogoComponent } from '../../../components/logo/logo.component';

export default {
  title: 'molecule/Logo',
  decorators: [
    moduleMetadata({
      declarations: [LogoComponent],
      imports: [CommonModule],
    }),
  ],
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<StoryLogoComponent> = (args: StoryLogoComponent) => ({
  component: StoryLogoComponent,
  props: args,
});

export const logo = Template.bind({});
logo.args = {
  backgroundColor: '#ffff',
};
logo.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=526%3A250',
    },
  },
};
