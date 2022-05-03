import React from 'react';
//import '../../../src/assets/video/videochamada.mp4';
import HeaderAppBar from '../../components/headerAppBar';
import FooterAppBar from '../../components/footerAppBar';
import './index.css'
import { Grid, Container } from '@mui/material';
import ButtonSubmit from '../../../src/components/button';
import InputsForm from '../../../src/components/inputs';

const minicurriculo = require('../../assets/img/minicurriculo.jpg');
const video = require('../../assets/video/videochamada.mp4')

export default function Apresentacao() {

    return (

        <Container maxWidth={false} className="default-page">
            
            <HeaderAppBar />
            
            <Grid container >
                <video className="video-page" controls>
                    <source src={video} type="videochamada/mp4"/>
                </video>
                <Grid item xs={12} md={12} lg={12} className='box-texto'>
                    <p className="text-page">O Prof Ricardo Câncio  Santos, mestre em economia aplicada pela USP
                    e ex insider te disponibiliza acesso a informação que ele gostaria
                    de ter tido no início de sua carreira há mais de 20 anos atrás
                    “Acesso a mente de um investidor experiente”
                    Ademais te convida para fazer parte não só de sua comunidade nos
                    mercados financeiros mas também em seu grupo  de network focado em
                    turbinar o seu investimento no mundo real por meio de empreendedorismo
                    e informação de Network
                    </p>
                </Grid>
            </Grid>
                    
            <Grid container >
                <img className="image-page" src={minicurriculo} alt="minicurriculo"></img>
            </Grid >
        
            <Grid container >                
                <h2 className="subtitle-page">FORMULARIO DE CADASTRO</h2>
                
                <InputsForm/>
                <p>Quer divulgar seu produto ou serviço
                gratuito no nosso Market Place? 
                </p>
                <select name="select">
                    <option value="sim" selected>Sim</option>
                    <option value="nao">Não</option>
                </select>
                <ButtonSubmit/>
            </Grid>

            <FooterAppBar/>    
    
        </Container>
    
    )
};