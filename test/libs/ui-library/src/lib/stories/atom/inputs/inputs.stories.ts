import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { withDesign } from 'storybook-addon-designs';
import { InputsComponent } from './inputs.component';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'atom/Input',
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
    TextColor: { control: 'color' },
    status: {
      control: {
        type: 'select',
        options: [
          'default',
          'active',
          'readOnly',
          'success',
          'disabled',
          'required',
          'error',
        ],
      },
    },
    styles: {
      control: {
        type: 'select',
        options: ['fillInput', 'outlineInput'],
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
      ],
    }),
  ],
} as Meta;

const Template: Story<InputsComponent> = (args: InputsComponent) => ({
  component: InputsComponent,
  props: args,
});

export const Inputs = Template.bind({});
Inputs.args = {
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  status: 'default',
  size: 'large',
  styles: 'fillInput',
  iconType: '',
  types: 'defaultInputs',
};
Inputs.argTypes = {
  types: {
    table: {
      disable: true,
    },
  },
  active: {
    table: {
      disable: true,
    },
  },
  affixTypes: {
    table: {
      disable: true,
    },
  },
  getTheme: {
    table: {
      disable: true,
    },
  },
  hide: {
    table: {
      disable: true,
    },
  },
  isdisabled: {
    table: {
      disable: true,
    },
  },
  ngOnInit: {
    table: {
      disable: true,
    },
  },
  iconType: {
    control: {
      type: 'select',
      options: ['icon-copy', 'icon-lock', 'icon-search', 'icon-eye', ''],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
  },
};
Inputs.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};
export const Price = Template.bind({});
Price.args = {
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  status: 'default',
  size: 'large',
  styles: 'fillInput',
  affixTypes: '',
  position: 'prefix',
  types: 'Price',
};
Price.argTypes = {
  types: {
    table: {
      disable: true,
    },
  },
  active: {
    table: {
      disable: true,
    },
  },
  iconType: {
    table: {
      disable: true,
    },
  },
  getTheme: {
    table: {
      disable: true,
    },
  },
  hide: {
    table: {
      disable: true,
    },
  },
  isdisabled: {
    table: {
      disable: true,
    },
  },
  ngOnInit: {
    table: {
      disable: true,
    },
  },
  affixTypes: {
    control: {
      type: 'select',
      options: ['', '$', '%', '#', 'Gb.', 'GCT', 'mins'],
    },
  },
  position: {
    control: {
      type: 'select',
      options: ['prefix', 'suffix'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
  },
};
Price.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};

export const Textarea = Template.bind({});
Textarea.args = {
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  status: 'default',
  size: 'large',
  styles: 'fillInput',
  types: 'inputWithTextarea',
};
Textarea.argTypes = {
  types: {
    table: {
      disable: true,
    },
  },
  active: {
    table: {
      disable: true,
    },
  },
  affixTypes: {
    table: {
      disable: true,
    },
  },
  getTheme: {
    table: {
      disable: true,
    },
  },
  hide: {
    table: {
      disable: true,
    },
  },
  isdisabled: {
    table: {
      disable: true,
    },
  },
  iconType: {
    table: {
      disable: true,
    },
  },
  ngOnInit: {
    table: {
      disable: true,
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
  },
};
Textarea.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};

export const Password = Template.bind({});
Password.args = {
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  status: 'default',
  size: 'large',
  styles: 'fillInput',
  types: 'inputWithPassword',
};
Password.argTypes = {
  types: {
    table: {
      disable: true,
    },
  },
  active: {
    table: {
      disable: true,
    },
  },
  affixTypes: {
    table: {
      disable: true,
    },
  },
  getTheme: {
    table: {
      disable: true,
    },
  },
  hide: {
    table: {
      disable: true,
    },
  },
  isdisabled: {
    table: {
      disable: true,
    },
  },
  ngOnInit: {
    table: {
      disable: true,
    },
  },
  iconType: {
    table: {
      disable: true,
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'large'],
    },
  },
};
Password.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=449%3A1218',
    },
  },
};
