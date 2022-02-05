import { FormControlLabel, Checkbox, styled } from "@mui/material";

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: "blue",
  backgroundColor: "#22ff66",
  /*   '&.MuiFormControlLabel-root	': { // mesmo seletor de cima
      backgroundColor: "#22ff66",
    } */
}))

const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
  color: "forestgreen",
  '&.Mui-checked': {
    color: '#ff00dd',
  },
}))

export const CheckBox: React.FC = () => {
  return <StyledFormControlLabel control={<StyledCheckBox defaultChecked />} label="Label" />;
}
