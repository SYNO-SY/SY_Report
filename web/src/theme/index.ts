import { MantineThemeOverride } from '@mantine/core';
import { CustomFonts } from './CustomFonts';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily:'Rubik',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
};