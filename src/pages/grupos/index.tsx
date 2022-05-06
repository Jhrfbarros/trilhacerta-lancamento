import React from "react";
import { Grid, Container } from "@mui/material";
import HeaderAppBar from "../../components/headerAppBar";
import FooterAppBar from "../../components/footerAppBar";
import './index.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';





export default function TrilhaCerta() {

    const imagemdatrilhacerta = require('../../assets/img/imagemdatrilhacerta.jpeg');
    
    return (

        <Container maxWidth={false} className="group-page">
            
            <HeaderAppBar />
            <Container>
                <Grid container className='title-group'>
                    <Grid item xs={12} md={12} lg={12} className='call-group'>
                        <h3 className='title-grid'>TRILHA CERTA</h3>
                        <p className='text-grid'>Com esse simples passo você acabou de se tornar um Trilha Certa.</p>
                    </Grid>
                    
                </Grid>
            </Container>
            <Container> 
                <Grid container className='group-container' spacing={3}>
                    <Grid item xs={12} md={6} lg={6} className='image-trilhacerta'>
                        <img className='image-group' src={imagemdatrilhacerta} alt='minicurriculo'></img>
                    </Grid >

                    <Grid item xs={12} md={6} lg={6} className='benefits-group'>
                    <p>TEXTO QUE AINDA SERÁ ENVIADO PELO RICARDO</p>
                        
                    <Grid className='communication-direction'>
                        <p>ENTRE NO GRUPO DO <WhatsAppIcon/></p>
                        <p>ENTRE NO GRUPO DO <SendOutlinedIcon/></p>
                    </Grid>    
                </Grid>
                        
                </Grid>
            </Container>
            <FooterAppBar/>    
    
        </Container>
    
    )
};



    
