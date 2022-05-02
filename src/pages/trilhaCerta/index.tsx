import { Grid, Container } from "@mui/material";
import React from "react";
import HeaderAppBar from "../../components/headerAppBar";
import FooterAppBar from "../../components/footerAppBar";




export default function TrilhaCerta() {

    return(

        <Container maxWidth={false} className="trilhacerta-page">
        <HeaderAppBar />
            
    <Grid container >
        <h3>TRILHA CERTA</h3>
        <p>Com esse simples passo você acabou de se tornar um Trilha Certa.</p>
            </Grid>
            
    <Grid container >     
        <figure>
            <img src="imagemdatrilhacerta.jpeg" alt="trilhacertaimage" />
        </figure>
    </Grid>
            
    <Grid container >        
        <p>TEXTO QUE AINDA SERÁ ENVIADO PELO RICARDO </p>
    </Grid>    
    
    <Grid container >    
        <p>DIRECIONAMENTO WHATTSAPP</p>
        <p>DIRECIONAMENTO TELEGRAM</p>
    </Grid >      
    <FooterAppBar/>    
    
    </Container>

 )   
};