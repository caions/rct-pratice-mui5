import { StyledFormControlLabel, StyledCheckBox } from './styled';

export const CustomCheckBox = () => {
  return (
    <>
      <StyledFormControlLabel
        control={<StyledCheckBox defaultChecked />}
        label="Label"
      />
    </>
  );
};
