import { TextFieldProps } from '@mui/material';
import { StyledTextField } from './styled';

export const Input: React.FC<TextFieldProps> = (props) => {
  return (
    <>
      <StyledTextField disabled={false} />
    </>
  );
};
