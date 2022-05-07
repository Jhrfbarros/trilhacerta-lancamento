import React, { useState } from 'react';
//import emailjs from '@emailjs/browser';

import HeaderAppBar from '../../components/headerAppBar';
import FooterAppBar from '../../components/footerAppBar';
import './index.css'
import { Grid, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import InputsForm from '../../components/inputs';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import  Box  from '@material-ui/core/Box';
import  TextField  from '@mui/material/TextField';



export default function Apresentacao() {

    const minicurriculo = require('../../assets/img/minicurriculo.jpg');
    



    const [divulgacao, setDivulgacao] = useState<string>("Sim");

    const handleChange = (event: SelectChangeEvent) => {
        setDivulgacao(event.target.value as string);
    };

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleUpdateInput = (e: any) => {
        const value = e.target.value;
    
        const name = e.target.name;
        if (name === 'nome') {
            setNome(value)
            
        }
        if (name === 'telefone') {
            setTelefone(value)
            
        }
                  
    };

    const sendEmail = () => {
        
    
        //emailjs.sendForm('service_nox0wxq', 'template_o6elv0r', "", 'qWZnZvabPtv9zXY0Z')
          //.then((result) => {
              //console.log(result.text);
          //}, //(error) => {
              //console.log(error.text);
          //});
      };
    
    function handleSubmit(e: any) {
        console.log("cika")
        e.preventDefault();
        sendEmail();
        window.location.href = "http://localhost:3000/grupos";

    }

      
    
    return (

        <Container maxWidth={false} className="default-page">
            
            <HeaderAppBar />
            <Container>
                <Grid container className='video-container'>
                    <Grid item xs={12} md={12} lg={12} className='video-grid'>
                        <iframe width="100%" className='player' height="500" src="https://www.youtube.com/embed/BQ0s7Zgnwr8" title="Apresentação Trilha Certa"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
                    </Grid>
                    
                </Grid>
            </Container>
            <Container> 
                <Grid container className='form-container' spacing={3}>
                    <Grid item xs={12} md={6} lg={6} className='curriculo-grid'>
                        <img className="image-page" src={minicurriculo} alt="minicurriculo"></img>
                    </Grid >

                    <Grid item xs={12} md={6} lg={6} className='box-texto'>
                        <p className="texto-page">
                        O Prof Ricardo Câncio  Santos, mestre em economia aplicada pela USP
                        e ex insider te disponibiliza acesso a informação que ele gostaria
                        de ter tido no início de sua carreira há mais de 20 anos atrás
                        “Acesso a mente de um investidor experiente”
                        Ademais te convida para fazer parte não só de sua comunidade nos
                        mercados financeiros mas também em seu grupo  de network focado em
                        turbinar o seu investimento no mundo real por meio de empreendedorismo
                        e informação de Network.
                        </p>
                        
                        <Grid className='form-grid'>
                            <h2 className="subtitle-page">FORMULÁRIO DE CADASTRO</h2>
                            
                            <Box component="form">
                                <TextField name='nome' onChange={handleUpdateInput} value={nome} className='input' id="outlined-basic" placeholder='Nome Completo' label="Nome Completo" variant="outlined" />
                                <TextField name='telefone' onChange={handleUpdateInput} value={telefone} className='input' id="outlined-basic" placeholder='WhattsApp' label="WhattsApp" variant="outlined" />
                            </Box>
                            
                            <p className='texto-form'>
                                Quer divulgar seu produto ou serviço
                                gratuito no nosso Market Place? 
                            </p>

                            <Select
                                id="divulgacao"
                                value={divulgacao}
                                label="Divulgacao"
                                onChange={handleChange}
                                className="dropdown"
                                
                                
                                sx={{
                                    width: 100,
                                    height: 50,
                                    color: "#FFF",
                                    borderColor: "#FFF"
                                }}
                                >
                                <MenuItem selected value={"Sim"}>Sim</MenuItem>
                                <MenuItem value={"Não"}>Não</MenuItem>
                            </Select>

                            <Stack spacing={2} direction="row">
                                <Button onClick={handleSubmit} className='button-form' variant="contained">Enviar</Button>
                            </Stack>
  
                        </Grid>    
                    </Grid>
                        
                </Grid>
            </Container>
            <FooterAppBar/>    
    
        </Container>
    
    )
};