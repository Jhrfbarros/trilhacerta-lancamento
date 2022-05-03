import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


import './index.css'


export default function FooterPage() {
return (
    <Box sx={{ flexGrow: 1 }} className='footer'>
      <AppBar className='text-footer' position="static">
        
          <Typography variant="h6" color="inherit" component="div">
                {'Copyright © '}
            <Link color="inherit" href="https://github.com/Jhrfbarros">
                KODE BARROS
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
          </Typography>
        
      </AppBar>
    </Box>
);
}