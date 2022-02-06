import { FormControlLabel, Checkbox, styled } from '@mui/material';
import { red } from '@mui/material/colors';

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  // cor da label
  '.MuiFormControlLabel-label': {
    color: red[500],
  },
}));

export const StyledCheckBox = styled(Checkbox)(() => ({
  color: 'red',

  '&.Mui-checked': {
    color: 'blue',
  },
}));
