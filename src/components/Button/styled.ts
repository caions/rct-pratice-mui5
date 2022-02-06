import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: 'green',
  '&:hover': {
    background: 'yellow',
  },
}));
