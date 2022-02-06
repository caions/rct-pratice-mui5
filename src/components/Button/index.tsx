import { ButtonProps } from '@mui/material';

import { StyledButton } from './styled';

export const CustomButton = (props: ButtonProps) => {
  return (
    <>
      <StyledButton variant="contained">Clicar</StyledButton>
    </>
  );
};
