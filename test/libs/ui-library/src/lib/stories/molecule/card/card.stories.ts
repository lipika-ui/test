import { withDesign } from 'storybook-addon-designs';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import StoryCardComponent from './card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CenteredCardComponent } from '../../../components/cards/centered-card/centered-card.component';
import { CtaCardComponent } from '../../../components/cards/cta-card/cta-card.component';
import { FullsizeCardComponent } from '../../../components/cards/fullsize-card/fullsize-card.component';
import { PlansCardComponent } from '../../../components/cards/plans-card/plans-card.component';
import { WideCardComponent } from '../../../components/cards/wide-card/wide-card.component';

export default {
  title: 'molecule/Cards',
  controls: { expanded: true },
  argTypes: {
    backgroundColor: { control: 'color' },
    cardData: { control: 'object' },
    isbordered: { control: 'boolean' },
    isdarkTheme: { Control: 'boolean' },
  },
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [CommonModule, MatCardModule],
      declarations: [
        CenteredCardComponent,
        CtaCardComponent,
        FullsizeCardComponent,
        PlansCardComponent,
        WideCardComponent,
      ],
    }),
  ],
} as Meta;

const Template: Story<StoryCardComponent> = (args: StoryCardComponent) => ({
  component: StoryCardComponent,
  props: args,
});

export const centeredCard = Template.bind({});

centeredCard.args = {
  backgroundColor: '#ffffff',
  centeredCard: true,
  isbordered: true,
  isdarkTheme: true,
  cardData: {
    imageUrl: './vtr/sampleImg.png',
    title: 'Title',
    altText: 'Test',
    price: '$49.99',
    tagline: 'Tagline',
  },
};
centeredCard.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  centeredCard: {
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
centeredCard.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};

export const CTACARD = Template.bind({});
CTACARD.args = {
  backgroundColor: '#ffffff',
  ctaCard: true,
  isbordered: true,
  isdarkTheme: true,
  cardData: {
    imageUrl: './vtr/sampleImg.png',
    title: 'Title',
    altText: 'Test',
    price: '$49.99',
    placeholder: 'Placeholder',
    caption: 'Caption',
    btnText: 'Lo Quiero',
  },
};
CTACARD.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  ctaCard: {
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
CTACARD.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};

export const fullsizeCard = Template.bind({});
fullsizeCard.args = {
  backgroundColor: '#ffffff',
  fullsizeCard: true,
  cardVariant: 'FULLSIZE',
  cardData: {
    imageUrl: './vtr/sampleImg.png',
    title: 'Title',
    altText: 'Test',
    caption: 'Caption',
    btnText: 'Lo Quiero',
  },
};
fullsizeCard.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  cardVariant: {
    table: {
      disable: true,
    },
  },
  isbordered: {
    table: {
      disable: true,
    },
  },
  isdarkTheme: {
    table: {
      disable: true,
    },
  },
  fullsizeCard: {
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
fullsizeCard.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};

export const fullsizewithCTACard = Template.bind({});
fullsizewithCTACard.args = {
  backgroundColor: '#ffffff',
  fullsizeCard: true,
  cardVariant: 'FULLSIZECTA',
  cardData: {
    imageUrl: './vtr/sampleImg.png',
    title: 'Title',
    altText: 'Test',
    btnText: 'Lo Quiero',
  },
};
fullsizewithCTACard.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  cardVariant: {
    table: {
      disable: true,
    },
  },
  isbordered: {
    table: {
      disable: true,
    },
  },
  isdarkTheme: {
    table: {
      disable: true,
    },
  },
  fullsizeCard: {
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
fullsizewithCTACard.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};

export const fullsizewithPriceCard = Template.bind({});
fullsizewithPriceCard.args = {
  backgroundColor: '#ffffff',
  fullsizeCard: true,
  cardVariant: 'FULLSIZEPRICE',
  cardData: {
    imageUrl: './vtr/sampleImg.png',
    title: 'Title',
    altText: 'Test',
    price: '$49.99',
  },
};
fullsizewithPriceCard.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  cardVariant: {
    table: {
      disable: true,
    },
  },
  isbordered: {
    table: {
      disable: true,
    },
  },
  isdarkTheme: {
    table: {
      disable: true,
    },
  },
  fullsizeCard: {
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
fullsizewithPriceCard.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};

export const plansCard = Template.bind({});
plansCard.args = {
  backgroundColor: '#ffffff',
  plansCard: true,
  cardData: {
    imageUrl: './vtr/sampleImg7.png',
    title: 'Title',
    altText: 'Test',
    price: '49.990',
    planContent: [
      {
        text: 'Internet + Nextgen Wifi',
        label: '',
      },
      {
        text: 'TV Hogar HD',
        label: '86 Canales + 71 Canales HD',
      },
      {
        text: 'Internet + Nextgen Wifi',
        label: '',
      },
      {
        text: 'TV Hogar HD',
        label: '86 Canales + 71 Canales HD',
      },
    ],
    icon: 'icon-ellipse',
    currency: '$',
    btnText: 'Lo Quiero',
    priceTerms: '/mes',
    subPriceTerms: 'X 3 meses',
    normalPrice: 'Normal $59.990',
  },
};
plansCard.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  plansCard: {
    table: {
      disable: true,
    },
  },
  isbordered: {
    table: {
      disable: true,
    },
  },
  isdarkTheme: {
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
plansCard.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};

export const wideCard = Template.bind({});
wideCard.args = {
  backgroundColor: '#ffffff',
  wideCard: true,
  isdarkTheme: false,
  cardData: {
    imageUrl: './vtr/sampleImg.png',
    title: 'Title',
    altText: 'Test',
    price: '$49.99',
    tagline: 'TAGLINE',
    placeholder: 'Placeholder',
    caption: 'caption',
    body: 'Placeholder for body text. Please enter your text to override.',
    btnText: 'Lo Quiero',
    contentRight: false,
  },
};
wideCard.argTypes = {
  getTheme: {
    table: {
      disable: true,
    },
  },
  isbordered: {
    table: {
      disable: true,
    },
  },
  wideCard: {
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
wideCard.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mk6eg4lVzGvcayB80diMlC/VTR---Design-System?node-id=665%3A0',
    },
  },
};
