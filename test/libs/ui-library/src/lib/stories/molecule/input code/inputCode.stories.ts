import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { withDesign } from 'storybook-addon-designs';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import StoryinputCodeComponent from './inputCode.component';
import { CommonModule } from '@angular/common';
import { InputCodeComponent } from '../../../components/input-code/input-code.component';

export default {
  title: 'molecule/InputCode',
  component: StoryinputCodeComponent,
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
    TextColor: { control: 'color' },
    count: { contol: 'number' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    status: {
      control: {
        type: 'select',
        options: ['DEFAULT', 'SUCCESS', 'ERROR', 'REQUIRED'],
      },
    },
    types: {
      control: {
        type: 'select',
        options: ['FILLIN', 'OUTLINE'],
      },
    },
  },
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        CommonModule,
      ],
      declarations: [InputCodeComponent],
    }),
  ],
} as Meta;

const Template: Story<StoryinputCodeComponent> = (
  args: StoryinputCodeComponent
) => ({
  component: StoryinputCodeComponent,
  props: args,
});

export const Code = Template.bind({});
Code.args = {
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  status: 'DEFAULT',
  types: 'FILLIN',
  count: 4,
  isDisabled: false,
  isReadOnly: false,
};
Code.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};
