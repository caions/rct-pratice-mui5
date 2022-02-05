import { styled, createTheme, ThemeProvider } from '@mui/system';

const MyComponent = styled('button')`
  background-color: 'primary.main';
  padding: 5px;
  border-radius: 4px;
`

type InputProps = {
  color?: 'red' | 'blue'
}
const MyComponent2 = styled('button')<InputProps>((props) => ({
  background: props.color,
  padding: 5,
  borderRadius: 4,
}))


const MyThemeComponent = styled('button')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.text.primary,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));



export const Dashboard = (props: any) => {
  return (
    <>
      <MyComponent >comp styled '``'</MyComponent>
      <MyComponent2 color={"blue"}>comp styled obj</MyComponent2>
      <MyThemeComponent>comp theme</MyThemeComponent>
    </>

  )

}
