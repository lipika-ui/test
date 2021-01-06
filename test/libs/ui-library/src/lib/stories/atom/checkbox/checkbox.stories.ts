import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { CheckboxComponent } from './checkbox.component';

export interface checkadd {
  name: string;
  checked: boolean;
  id: number;
}

export default {
  title: 'atom/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule, MatListModule],
    }),
  ],
  argTypes: {
    label: { control: { type: 'boolean' } },
    caption: { control: { type: 'boolean' } },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckboxComponent> = (args) => ({
  component: CheckboxComponent,
  props: args,
});

const TemplateGroup: Story<CheckboxComponent> = (args) => ({
  component: CheckboxComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isprimary: true,
  backgroundColor: 'rgba(255,255,255,1)',
  disabled: false,
};
Primary.argTypes = {
  disabled: { control: { type: 'boolean' } },
  isprimary: {
    table: {
      disable: true,
    },
  },
  iserror: {
    table: {
      disable: true,
    },
  },
  isgroup: {
    table: {
      disable: true,
    },
  },
  values: {
    table: {
      disable: true,
    },
  },
  isChecked: {
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
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A892',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  iserror: true,
};
Error.argTypes = {
  isprimary: {
    table: {
      disable: true,
    },
  },
  iserror: {
    table: {
      disable: true,
    },
  },
  isgroup: {
    table: {
      disable: true,
    },
  },
  values: {
    table: {
      disable: true,
    },
  },
  isChecked: {
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
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A892',
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
  isprimary: {
    table: {
      disable: true,
    },
  },
  iserror: {
    table: {
      disable: true,
    },
  },
  isgroup: {
    table: {
      disable: true,
    },
  },

  isChecked: {
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
Group.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=0%3A892',
    },
  },
};
