import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, InputBase, Avatar } from '@mui/material';
import { Search, HelpOutline, Notifications, ShoppingBasket, DashboardRounded } from '@mui/icons-material';

const TopNav: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <DashboardRounded color="primary" sx={{ fontSize: 70 }} />
          </IconButton>
          <Typography variant="h3" noWrap>
            AccelCRM
          </Typography>
        </Box>
        <Box flexGrow={1}>
          <InputBase
            placeholder="Search here ..."
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={<Search />}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <HelpOutline />
          </IconButton>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingBasket />
          </IconButton>
          <Button variant="contained" color="secondary" disableElevation>
            Setting
          </Button>

          <IconButton color="inherit">
            <Avatar alt="Profile Picture" src="/path-to-your-profile-picture.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { TopNav };