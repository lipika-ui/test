module.exports = {
  "stories": [
    '../libs/ui-library/src/lib/stories/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../libs/ui-library/src/lib/stories/**/**/*.stories.mdx',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',	
    '@storybook/addon-a11y',	
    'storybook-addon-themes',	
    'storybook-addon-designs',
  ]
}