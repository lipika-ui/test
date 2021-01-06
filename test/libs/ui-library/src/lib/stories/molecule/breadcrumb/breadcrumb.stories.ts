import { withDesign } from 'storybook-addon-designs';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import StorybreadCrumbComponent from './breadcrumb.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';

export default {
  title: 'molecule/BreadCrumb',
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
    isDarkMode: { control: 'boolean' },
    breadCrumb: { control: 'array' },
  },
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [CommonModule],
      declarations: [BreadcrumbComponent],
    }),
  ],
} as Meta;

const Template: Story<StorybreadCrumbComponent> = (
  args: StorybreadCrumbComponent
) => ({
  component: StorybreadCrumbComponent,
  props: args,
});

export const breadCrumb = Template.bind({});
breadCrumb.args = {
  backgroundColor: '#ffffff',
  isDarkMode: true,
  breadCrumb: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};
breadCrumb.argTypes = {
  getTheme: {
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
breadCrumb.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=563%3A1814',
    },
  },
};
