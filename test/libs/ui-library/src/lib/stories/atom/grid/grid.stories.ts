import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { GridComponent } from './grid.component';
import { MatGridListModule } from '@angular/material/grid-list';

export default {
  title: 'atom/Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [MatGridListModule],
    }),
  ],
} as Meta;

export const grid = () => ({
  moduleMetaData: {
    imports: [MatGridListModule],
  },
  component: GridComponent,
  props: {},
});
grid.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=55%3A2',
    },
  },
};
