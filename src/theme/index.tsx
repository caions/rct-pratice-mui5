import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    common: {
      black: '#202040',
    },
    primary: {
      main: '#5C5CFF',
      light: '#A4A4FF',
    },
  },
  typography: {
    fontFamily: 'inter sans-serif',
  },
  status: {
    danger: orange[500],
  },
});
