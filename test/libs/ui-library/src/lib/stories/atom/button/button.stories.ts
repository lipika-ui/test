// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonsComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'atom/Button',
  moduleMetaData: {
    imports: [MatButtonModule],
  },
  argTypes: {
    text: { control: { type: 'text' } },
    isdisabled: { control: { type: 'boolean' } },
    noExist: { control: { type: 'boolean' } },
    backgroundColor: { control: 'color' },
    extraClass: {
      control: {
        type: 'select',
        options: [
          'btn-large',
          'btn-small',
          'btn-large-icon btn-right',
          'btn-large-icon btn-left',
          'btn-small-icon btn-right',
          'btn-small-icon btn-left',
          'btn-icon large-icon',
          'btn-icon small-icon',
        ],
      },
    },
  },
} as Meta;

const Template: Story<ButtonsComponent> = (args) => ({
  component: ButtonsComponent,
  props: args,
  moduleMetadata: {
    imports: [MatButtonModule],
  },
});

export const primary = Template.bind({});
primary.args = {
  isPrimary: true,
  isdisabled: false,
  text: 'Main CTA',
  extraClass: 'btn-large',
  backgroundColor: '#ffffff',
};
primary.argTypes = {
  isPrimary: {
    table: {
      disable: true,
    },
  },
  bgcolor: {
    table: {
      disable: true,
    },
  },
  ghostText: {
    table: {
      disable: true,
    },
  },
  isLink: {
    table: {
      disable: true,
    },
  },
  isSecondary: {
    table: {
      disable: true,
    },
  },
  TextColor: {
    table: {
      disable: true,
    },
  },
  extraClass: {
    control: {
      type: 'select',
      options: [
        'btn-large',
        'btn-small',
        'btn-large-icon btn-right',
        'btn-large-icon btn-left',
        'btn-small-icon btn-right',
        'btn-small-icon btn-left',
        'btn-icon large-icon',
        'btn-icon small-icon',
      ],
    },
  },
};
primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=564%3A1936',
    },
  },
};

export const secondary = Template.bind({});
secondary.args = {
  isSecondary: true,
  text: 'Main CTA',
  extraClass: 'btn-large',
  backgroundColor: '#ffffff',
};
secondary.argTypes = {
  isPrimary: {
    table: {
      disable: true,
    },
  },
  bgcolor: {
    table: {
      disable: true,
    },
  },
  ghostText: {
    table: {
      disable: true,
    },
  },
  isLink: {
    table: {
      disable: true,
    },
  },
  isSecondary: {
    table: {
      disable: true,
    },
  },
  TextColor: {
    table: {
      disable: true,
    },
  },
  extraClass: {
    control: {
      type: 'select',
      options: [
        'btn-large',
        'btn-small',
        'btn-large-icon btn-right',
        'btn-large-icon btn-left',
        'btn-small-icon btn-right',
        'btn-small-icon btn-left',
        'btn-icon large-icon',
        'btn-icon small-icon',
      ],
    },
  },
};

secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=564%3A1936',
    },
  },
};

export const link = Template.bind({});
link.args = {
  isLink: true,
  text: 'Main CTA',
  extraClass: 'btn-large',
  backgroundColor: '#ffffff',
};
link.argTypes = {
  isPrimary: {
    table: {
      disable: true,
    },
  },
  bgcolor: {
    table: {
      disable: true,
    },
  },
  ghostText: {
    table: {
      disable: true,
    },
  },
  isLink: {
    table: {
      disable: true,
    },
  },
  isSecondary: {
    table: {
      disable: true,
    },
  },
  TextColor: {
    table: {
      disable: true,
    },
  },
  extraClass: {
    control: {
      type: 'select',
      options: [
        'btn-large',
        'btn-small',
        'btn-large-icon btn-right',
        'btn-large-icon btn-left',
        'btn-small-icon btn-right',
        'btn-small-icon btn-left',
      ],
    },
  },
};
link.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=564%3A1936',
    },
  },
};
