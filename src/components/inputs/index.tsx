import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputsForm() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" placeholder='Nome Completo' label="Nome Completo" variant="outlined" />
      <TextField id="outlined-basic" placeholder='WhattsApp' label="WhattsApp" variant="outlined" />
    </Box>
  );
}