import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(() => ({
  //external input style
  marginLeft: '10px',

  // internal input style
  '.MuiOutlinedInput-root': {
    color: 'red',
    paddingLeft: '21px',
    borderRadius: '50px',
  },
  // border color
  '.MuiOutlinedInput-notchedOutline': {
    border: 'solid green 1px',
  },
  // hover border color
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'solid red 1px',
  },
  // disabled border color
  '.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    border: 'solid blue 1px',
  },
  // focused border color
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'solid yellow 1px',
  },
}));
