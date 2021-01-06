import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatDialogModule } from '@angular/material/dialog';
import StoryAlertComponent from './alert.component';

import { AlertComponent } from '../../../components/alert/alert.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'molecule/Alert',
  decorators: [
    moduleMetadata({
      declarations: [AlertComponent],
      imports: [CommonModule, MatDialogModule],
    }),
  ],
  argTypes: {
    title: { control: { type: 'text' } },
    body: { control: { type: 'text' } },
    backgroundColor: { control: { type: 'color' } },
    size: { control: { type: 'select', options: ['default', 'full-width'] } },
    opacity: { control: { type: 'select', options: ['100', '40', '24'] } },
    status: {
      control: {
        type: 'select',
        options: ['WARNING', 'SUCCESS', 'ERROR', 'INFO'],
      },
    },
  },
} as Meta;

const Template: Story<StoryAlertComponent> = (args: StoryAlertComponent) => ({
  component: StoryAlertComponent,
  props: args,
});

export const success = Template.bind({});
success.args = {
  title: 'SUCCESS',
  body: 'Everything good',
  backgroundColor: '#ffffff',
  size: 'default',
  opacity: '100',
  status: 'SUCCESS',
};
success.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  type: {
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
success.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
    },
  },
};
export const warning = Template.bind({});
warning.args = {
  title: 'Warning',
  body: 'Something wrong',
  backgroundColor: '#ffffff',
  size: 'default',
  opacity: '100',
  status: 'WARNING',
};
warning.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  type: {
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
warning.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
    },
  },
};
export const error = Template.bind({});
error.args = {
  title: 'Error',
  body: 'Try to refresh',
  backgroundColor: '#ffffff',
  size: 'default',
  opacity: '100',
  status: 'ERROR',
};
error.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  type: {
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
error.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
    },
  },
};
export const info = Template.bind({});
info.args = {
  title: 'Information',
  body: 'Remember to pay your check',
  backgroundColor: '#ffffff',
  size: 'default',
  opacity: '100',
  status: 'INFO',
};
info.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  type: {
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
info.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=548%3A388',
    },
  },
};
