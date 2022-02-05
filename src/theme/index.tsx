import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

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
      black: "#d615b6"
    },
    text: {
      primary: "#ff0000"
    },
    primary: {
      main: "#d61",
    },
  },
  status: {
    danger: orange[500],
  },
});
