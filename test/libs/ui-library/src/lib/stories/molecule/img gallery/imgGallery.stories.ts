import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import StoryImgGalleryComponent from './imgGallery.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImgGalleryComponent } from '../../../components/img-gallery/img-gallery.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'molecule/ImageGallery',
  decorators: [
    moduleMetadata({
      declarations: [ImgGalleryComponent],
      imports: [
        CommonModule,
        BrowserModule,
        MatGridListModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
    count: { control: { type: 'number', min: 1, max: 11, step: 1 } },
  },
} as Meta;

const Template: Story<StoryImgGalleryComponent> = (
  args: StoryImgGalleryComponent
) => ({
  component: StoryImgGalleryComponent,
  props: args,
});

export const imgGallery = Template.bind({});
imgGallery.args = {
  backgroundColor: '#ffff',
  count: 5,
};
imgGallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=697%3A2722',
    },
  },
};
