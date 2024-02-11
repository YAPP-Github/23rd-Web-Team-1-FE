/** @type { import('@storybook/react').Preview } */
import { lightThemeVars, darkThemeVars } from '@linker/styles';
import { ThemeProvider } from 'next-themes';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider
        attribute="class"
        value={{
          light: lightThemeVars,
          dark: darkThemeVars,
        }}
      >
        <Story />
        <div id="portal" />
      </ThemeProvider>
    </>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
