import React from 'react';
import { styled } from '@mui/system';

const Text = () => {
  return <Title>Text</Title>;
};
const Title = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export default Text;
