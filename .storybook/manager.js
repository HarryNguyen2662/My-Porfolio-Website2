import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://hamishw.com/icon.svg',
    brandTitle: 'Harry Nguyen Components',
    brandUrl: 'https://hamishw.com',
  },
});
