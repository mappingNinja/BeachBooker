import { Box } from '@mui/material';
import React from 'react';
import Beaches from './Beaches';
import FinderMap from './FinderMap';

export default function FinderMain() {
  return (
    <Box sx={{ display: 'flex', fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(',') }}>
      <Beaches />
      <FinderMap />
    </Box>
  );
}
