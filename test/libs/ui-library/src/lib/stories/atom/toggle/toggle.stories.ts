import { Meta, Story } from '@storybook/angular/types-6-0';
import { ToggleComponent } from './toggle.component';
import { moduleMetadata } from '@storybook/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export default {
  title: 'atom/Toggle',
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  controls: { expanded: true },
  argTypes: {
    isdisabled: { control: 'boolean' },
    label: { control: 'boolean' },
    caption: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ToggleComponent> = (args) => ({
  component: ToggleComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isprimary: true,
  backgroundColor: 'rgba(255,255,255,1)',
  isdisabled: false,
  label: false,
  caption: false,
};
Primary.argTypes = {
  isprimary: {
    table: {
      disable: true,
    },
  },
  isChecked: {
    table: {
      disable: true,
    },
  },
  iserror: {
    table: {
      disable: true,
    },
  },
  ngOnInit: {
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
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1158',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  isdisabled: false,
  label: false,
  caption: false,
  iserror: true,
  backgroundColor: 'rgba(255,255,255,1)',
};
Error.argTypes = {
  isprimary: {
    table: {
      disable: true,
    },
  },
  isChecked: {
    table: {
      disable: true,
    },
  },
  iserror: {
    table: {
      disable: true,
    },
  },
  ngOnInit: {
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
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A1158',
    },
  },
};
