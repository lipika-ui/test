import { ColorsComponent } from './colors.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatGridListModule,
  MatGridTile,
  MatGridList,
} from '@angular/material/grid-list';
import { withDesign } from 'storybook-addon-designs';
import { Story } from '@storybook/angular/types-6-0';

export default {
  title: 'atom/Colors',
  controls: { expanded: true },
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    TextColor: { control: 'color' },
    btnCategory: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'neutral', 'teritary'],
      },
    },
  },
  decorators: [withDesign],
};
const Template: Story<ColorsComponent> = (args: ColorsComponent) => ({
  component: ColorsComponent,
  props: args,
});
export const primary = Template.bind({});
primary.args = {
  backgroundColor: '#fff',
  TextColor: '#000',
  btnCategory: 'primary',
};
primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};
export const secondary = Template.bind({});
secondary.args = {
  backgroundColor: '#fff',
  TextColor: '#000',
  btnCategory: 'secondary',
};
secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};
export const neutral = Template.bind({});
neutral.args = {
  backgroundColor: '#fff',
  TextColor: '#000',
  btnCategory: 'neutral',
};
neutral.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};
export const support = Template.bind({});
support.args = {
  backgroundColor: '#fff',
  TextColor: '#000',
  btnCategory: 'teritary',
};
support.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A14',
    },
  },
};
