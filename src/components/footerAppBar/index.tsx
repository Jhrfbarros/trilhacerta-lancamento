import React from 'react';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


import './index.css'

const theme = createTheme({
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 8,
    },
});

export default function FooterPage() {
    return (
        <Box sx={{ flexGrow: 1 }} className='footer'>
            <AppBar className='text-footer' position="static">
                <ThemeProvider theme={theme}>
                    <Typography variant="h6" color="inherit" component='span'>
                            {'Copyright © '}
                        <Link color="inherit" href="https://github.com/Jhrfbarros">
                            KODE BARROS
                        </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                    </Typography>
                </ThemeProvider>
            </AppBar>
        </Box>
    );
}