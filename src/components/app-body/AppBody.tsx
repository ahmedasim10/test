import React from 'react';
import { Paper } from '@mui/material';

const AppBody: React.FC = () => {
  return (
    <Paper sx={{ flexGrow: 1, overflow: 'auto' }}>
      <h1>Hello World</h1>
    </Paper>
  )
};

export { AppBody };