import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';


export default function HeaderAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='header' position="static">
       
                   
          <Typography className='title' variant="h6" color="inherit" component="p">
            TRILHA CERTA
          </Typography>
          
          <Typography className='slogan' variant="h6" color="inherit" component="p">
            Você um passo a frente
          </Typography>
          
        
      </AppBar>
    </Box>
  );
}