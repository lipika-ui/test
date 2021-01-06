import { Meta, Story } from '@storybook/angular/types-6-0';
import { RadiobuttonComponent } from './radiobutton.component';
import { moduleMetadata } from '@storybook/angular';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

export default {
  title: 'atom/Radiobutton',
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule, MatListModule],
    }),
  ],
  argTypes: {
    label: { control: { type: 'boolean' } },
    caption: { control: { type: 'boolean' } },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<RadiobuttonComponent> = (args) => ({
  component: RadiobuttonComponent,
  props: args,
});

const TemplateGroup: Story<RadiobuttonComponent> = (args) => ({
  component: RadiobuttonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isprimary: true,
  backgroundColor: 'rgba(255,255,255,1)',
  horizontal: false,
  disabled: false,
};
Primary.argTypes = {
  disabled: { control: { type: 'boolean' } },
  onClickHandler: {
    table: {
      disable: true,
    },
  },
  isprimary: {
    table: {
      disable: true,
    },
  },
};
Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1053',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  iserror: true,
  horizontal: false,
  disabled: false,
};
Error.argTypes = {
  disabled: { control: { type: 'boolean' } },
  onClickHandler: {
    table: {
      disable: true,
    },
  },
  iserror: {
    table: {
      disable: true,
    },
  },
};
Error.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1053',
    },
  },
};

export const Group = TemplateGroup.bind({});
Group.args = {
  isgroup: true,
  values: 4,
};
Group.argTypes = {
  values: { control: { type: 'number' } },
  onClickHandler: {
    table: {
      disable: true,
    },
  },
  isgroup: {
    table: {
      disable: true,
    },
  },
};
Group.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1053',
    },
  },
};
