import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

/* const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'blue',
  padding: 8,
  borderRadius: 4,
}); */

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

const MyThemeComponent = styled('button')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const MyComponent = styled('button')`
  color: blue;
  background-color: red;
  padding: 5px;
  border-radius: 4px;
`

const MyComponent2 = styled('button')({
  color: 'red',
  backgroundColor: 'blue',
  padding: 5,
  borderRadius: 4,
})



export const Dashboard = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <MyComponent>Styled div</MyComponent>
        <MyComponent2>Styled div2</MyComponent2>
        <MyThemeComponent>Styled div3</MyThemeComponent>
      </ThemeProvider>
    </>

  )

}
