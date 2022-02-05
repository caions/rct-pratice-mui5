import { styled, TextField, TextFieldProps } from '@mui/material';

const StyledTextField = styled(TextField)(() => ({
  "&.Mui-focused": {
    borderColor: "red",
  },
  '&.MuiOutlinedInput-notchedOutline ': {
    borderColor: '#ff00dd',
    '&.Mui-focused': {
      borderColor: '#ff00dd',
    }
  },
  '&.MuiOutlinedInput-notchedOutline': {
    borderColor: '#ff00dd',
  },
  div: {
    fieldset: {
      borderColor: "red",
      '&.MuiOutlinedInput-notchedOutline ': {
        borderColor: '#ff00dd',
        '&.Mui-focused': {
          borderColor: '#ff00dd',
        }
      },
    }
  }
}))

export const Input: React.FC<TextFieldProps> = (props) => {
  return <>
    <StyledTextField id="outlined-basic" variant="outlined" />
  </>;
}


