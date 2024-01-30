import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline, Box } from '@mui/material';
import { SideNav, TopNav, ThemeProvider, AppBody } from '@/components';

const App = () => (
  <ThemeProvider>
    <CssBaseline /> {/* Ensures consistent baseline styles */}
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopNav />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <SideNav />
        <AppBody />
      </Box>
    </Box>
  </ThemeProvider>
);

export default App;
