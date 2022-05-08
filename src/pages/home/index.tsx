import React, { useState } from 'react';
//import emailjs from '@emailjs/browser';
import { makeStyles } from "@material-ui/core/styles";
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

    const selectColor = '#FFF';

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
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <TextField sx={{
                                            "& .MuiInputLabel-root": {color: 'white'},
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "white" },
                                            },
                                            }} name='nome' onChange={handleUpdateInput} value={nome} className='input' id="nome" placeholder='Nome Completo' label="Nome Completo" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <TextField sx={{
                                            "& .MuiInputLabel-root": {color: 'white'},
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "white" },
                                            },
                                            }} name='telefone' onChange={handleUpdateInput} value={telefone} className='input' id="telefone" placeholder='WhattsApp' label="WhattsApp" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Box>
                            
                            <p className='texto-form'>
                                Quer divulgar seu produto ou serviço
                                gratuito no nosso Market Place? 
                            </p>
                            
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={10} lg={10}>
                                   
                                    <Select
                                        id="divulgacao"
                                        value={divulgacao}
                                        label="Divulgacao"
                                        onChange={handleChange}
                                        sx={{
                                            width: '100%',
                                            height: 40,
                                            color: selectColor,
                                            border: "1px solid",
                                            borderColor: selectColor,
                                            "&.Mui-focused": {
                                                color: selectColor,
                                            },
                                            "& .MuiSvgIcon-root": {
                                                color: selectColor,
                                            },
                                        }}
                                        >
                                            <MenuItem selected value={"Sim"}>Sim</MenuItem>
                                            <MenuItem value={"Não"}>Não</MenuItem>
                                    </Select>
                                </Grid>    

                                <Grid item xs={6} md={2} lg={2}>
                                    <Stack spacing={2} direction="row">
                                        <Button onClick={handleSubmit} className='button-form' variant="contained">Enviar</Button>
                                    </Stack>
                                </Grid>
                            </Grid>    
                        </Grid>    
                    </Grid>
                        
                </Grid>
            </Container>
            <FooterAppBar/>    
    
        </Container>
    
    )
};