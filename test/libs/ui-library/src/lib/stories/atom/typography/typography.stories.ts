/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TypographyComponent } from './typography.component';
import { withDesign } from 'storybook-addon-designs';
import { Story } from '@storybook/angular/types-6-0';

export default {
  title: 'atom/Typography',
  controls: { expanded: true },
  argTypes: {
    textAlignment: {
      control: {
        type: 'select',
        options: ['left', 'right', 'center'],
      },
    },
    backgroundColor: { control: 'color' },
    TextColor: { control: 'color' },
    colorVariant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'info', 'disabled', 'error'],
      },
    },
  },
  decorators: [withDesign],
};

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  component: TypographyComponent,
  props: args,
});

export const heading = Template.bind({});
heading.args = {
  textAlignment: 'left',
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  colorVariant: 'default',
  isheading: true,
};
heading.argTypes = {
  isheading: {
    table: {
      disable: true,
    },
  },
};
heading.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};
export const body = Template.bind({});
body.args = {
  textAlignment: 'left',
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  colorVariant: 'default',
  isbody: true,
};
body.argTypes = {
  isbody: {
    table: {
      disable: true,
    },
  },
};
body.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};
export const subline = Template.bind({});
subline.args = {
  textAlignment: 'left',
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  colorVariant: 'default',
  issubline: true,
};
subline.argTypes = {
  issubline: {
    table: {
      disable: true,
    },
  },
};
subline.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const textcombinations = Template.bind({});
textcombinations.args = {
  textAlignment: 'left',
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  colorVariant: 'default',
  istextcombinations: true,
};
textcombinations.argTypes = {
  istextcombinations: {
    table: {
      disable: true,
    },
  },
  textcombo: {
    control: {
      type: 'select',
      options: ['large', 'medium', 'small', 'regular'],
    },
  },
};
textcombinations.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const button = Template.bind({});
button.args = {
  textAlignment: 'left',
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  colorVariant: 'default',
  isbutton: true,
};
button.argTypes = {
  isbutton: {
    table: {
      disable: true,
    },
  },
  button: {
    control: {
      type: 'select',
      options: ['default', 'primary', 'disabled'],
    },
  },
};
button.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};

export const Bigsizes = Template.bind({});
Bigsizes.args = {
  textAlignment: 'left',
  backgroundColor: '#ffffff',
  TextColor: '#000000',
  colorVariant: 'default',
  isbigsizes: true,
};
heading.argTypes = {
  isbigsizes: {
    table: {
      disable: true,
    },
  },
};
Bigsizes.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/fTqnD15ePo6ooeHk3F1Jug/VTR?node-id=0%3A332',
    },
  },
};
