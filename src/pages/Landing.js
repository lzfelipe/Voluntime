import React, { Component } from 'react'
import { DefaultContainer, LandingPageText, DefaultBtn } from './styles/defaultComponents'

import TypeLogo from '../assets/SVG/type.svg'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <DefaultContainer style={{alignItems:"flex-start", alignContent: "flex-start"}} >

                <DefaultContainer heightDiv="fit-content" style={{justifyContent: "flex-start", flexWrap: 'nowrap', position: 'fixed',  borderBottom: '2px solid #ff4f00'}}>
                    
                    <DefaultContainer heightDiv="fit-content" >
                    <img src={TypeLogo} height="25px" alt="Logotipo"></img>
                    </DefaultContainer>

                    <DefaultContainer heightDiv="fit-content" style={{justifyContent: "flex-end"}}>
                        <Link to="/" style={{textDecoration: 'none'}}>
                        <h3 style={{color: "#ff4f00", fontFamily: "ElaineSansRegular", paddingRight: 10}}>Entrar</h3>
                        </Link>
                    </DefaultContainer>

                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" style={{justifyContent: "flex-start", paddingRight: 10, paddingLeft: 10, marginTop: '20%'}}>

                    <DefaultContainer heightDiv="fit-content" style={{marginBottom: "5%"}}>
                            <img src={"https://i.imgur.com/xyItA00.png"} height="300px" alt="Imagem 1"/>  
                            <LandingPageText >Já pensou em ser voluntário mas nunca soube como? Ou ficou cansado de procurar?</LandingPageText>
                    </DefaultContainer>

                    <DefaultContainer heightDiv="fit-content" style={{marginBottom: "5%"}}>
                            <img src={"https://i.imgur.com/k5tu3Sh.png"} height="300px" alt="Logotipo"/>  
                            <LandingPageText >
                            <img src={TypeLogo} height="30px" style={{width: '100%'}} alt="Imagem 2"></img>
                            Um app que reúne diversas ONGs e instituições para facilitar seu ingresso no mundo do voluntariado.
                            </LandingPageText>
                    </DefaultContainer>

                    <DefaultContainer heightDiv="fit-content" style={{marginBottom: "5%"}}>
                            <img src={"https://i.imgur.com/hmU5qhP.png"} height="300px" alt="Imagem 3"/>  
                            <LandingPageText >
                                Depois de uma inscrição com algumas informações gerais, você pode navegar e pesquisar por ONGs que melhor
                                se encaixam na sua, horário e localização!
                            </LandingPageText>
                    </DefaultContainer>

                    <DefaultContainer heightDiv="fit-content" style={{marginBottom: "5%"}}>
                            <img src={"https://i.imgur.com/8Nuc4oe.png"} height="300px" alt="Imagem 4"/>  
                            <LandingPageText >
                                Você também pode ganhar insignias dentro do app que te ajudam a observar seu progresso!
                            </LandingPageText>
                    </DefaultContainer>

                    <DefaultContainer heightDiv="fit-content" style={{marginBottom: "5%"}}>
                            <img src={"https://i.imgur.com/r27Hn4y.png"} height="300px" alt="Imagem 5"/>  
                            <LandingPageText style={{textAlign: "center"}}>Vamos nessa?</LandingPageText>
                            <Link to="/">
                            <DefaultBtn>Começar!</DefaultBtn>
                            </Link>
                    </DefaultContainer>

                </DefaultContainer>

            </DefaultContainer>
        )
    }
}

export default Landing
