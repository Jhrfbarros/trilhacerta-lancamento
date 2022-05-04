import React, { useState } from 'react';
//import '../../../src/assets/video/videochamada.mp4';
import HeaderAppBar from '../../components/headerAppBar';
import FooterAppBar from '../../components/footerAppBar';
import './index.css'
import { Grid, Container } from '@mui/material';
import ButtonSubmit from '../../components/button';
import InputsForm from '../../components/inputs';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from "@material-ui/core/styles";

const color = "red"
const useStyles = makeStyles(() => ({
    select: {
      "&:before": {
        borderColor: color
      },
      "&:after": {
        borderColor: color
      }
    },
    icon: {
      fill: color
    }
}));

export default function Apresentacao() {

    const minicurriculo = require('../../assets/img/minicurriculo.jpg');
    const video = require('../../assets/video/videochamada.mp4')

    const classes = useStyles();

    const [divulgacao, setDivulgacao] = useState<string>("Sim");

    const handleChange = (event: SelectChangeEvent) => {
        setDivulgacao(event.target.value as string);
    };

    


    return (

        <Container maxWidth={false} className="default-page">
            
            <HeaderAppBar />
            <Container>
                <Grid container className='video-container'>
                    <Grid item xs={12} md={12} lg={12} className='video-grid'>
                        <video className='player' controls>
                            <source src={video} type="videochamada/mp4"/>
                        </video>
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
                            <InputsForm/>
                            <p className='texto-form'>
                                Quer divulgar seu produto ou serviço
                                gratuito no nosso Market Place? 
                            </p>

                            <Select
                                id="divulgacao"
                                value={divulgacao}
                                label="Divulgacao"
                                onChange={handleChange}
                                className={classes.select}
                                inputProps={{
                                    classes: {
                                        icon: classes.icon
                                    }
                                }}
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

                            <ButtonSubmit url={'http://localhost:3000/apresentacao/trilhacerta'} />
                        </Grid>    
                    </Grid>
                        
                </Grid>
            </Container>
            <FooterAppBar/>    
    
        </Container>
    
    )
};