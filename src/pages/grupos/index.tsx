import React from "react";
import { Grid, Container } from "@mui/material";
import HeaderAppBar from "../../components/headerAppBar";
import FooterAppBar from "../../components/footerAppBar";
import './index.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Link from '@mui/material/Link';

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
                        <p>
                            Ao se tornar um trilhacerta, você estará na mente de um investidor experiente e com isso terá acesso:

                            - Tudo que chamar atenção dos nossos experts com breves comentários explicativos
                            - Acesso grátis ao grupo de Network “EuNaTrilhaCerta”, onde você poderá ganhar visibilidade para produtos e serviços em um espaço focado no empreendedorismo e na formação de contatos chaves 
                            - Reunião mensal via zoom do grupo “antecipação de tendências” para interagir com os outros membros e tirar dúvidas 
                            - Cortesia de acesso a aula de conversação em inglês sobre os mercados, com texto hiper atual e relevante nos mercados (Grátis)*
                            - Listagem de seu produto ou serviço no nosso market place 

                            No trilhacerta.com você nós buscamos te ensinar a estar sempre um passo à frente.
                        </p>
                        
                    <Grid className='communication-direction'>
                        <Link href="#"><WhatsAppIcon /> ENTRE NO GRUPO DO WHATTSAPP</Link><br />
                        <Link href="#"><SendOutlinedIcon/> ENTRE NO GRUPO DO TELEGRAM</Link>
                    </Grid>    
                </Grid>
                        
                </Grid>
            </Container>
            <FooterAppBar/>    
    
        </Container>
    
    )
};



    
