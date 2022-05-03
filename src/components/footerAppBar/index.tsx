import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import './index.css'


export default function FooterPage() {
return (
    <Box sx={{ flexGrow: 1 }} className='footer-box'>
      <AppBar className='text-footer' position="static">
        <Toolbar  variant="dense">
          <Typography variant="h6" color="inherit" component="div">
                {'Copyright © '}
            <Link color="inherit" href="/">
                Ricardo Cancio Santos
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
);
}