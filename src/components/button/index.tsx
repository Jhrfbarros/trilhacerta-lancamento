import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ButtonModalProps {
  
  url:string,
}


export default function ButtonSubmit({url}:ButtonModalProps) {
  return (
    <Stack spacing={2} direction="row">
        <Button href={url} className='button-form' variant="contained">Enviar</Button>
    </Stack>
  );
}