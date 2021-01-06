import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import StoryLogoPageComponent from './logoPage.component';
import { LogoComponent } from '../../../components/logo/logo.component';

export default {
  title: 'Page/Logo',
  component: StoryLogoPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [LogoComponent],
      imports: [CommonModule],
    }),
  ],
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
    Link: { control: 'text' },
  },
} as Meta;

const Template: Story<StoryLogoPageComponent> = (
  args: StoryLogoPageComponent
) => ({
  component: StoryLogoPageComponent,
  props: args,
});

export const logo = Template.bind({});
logo.args = {
  backgroundColor: '#ffff',
  Link: 'http://google.com',
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
