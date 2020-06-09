import React, { Component } from 'react'
import { DefaultContainer, LandingPageText, DefaultBtn, DefaultTitle } from './styles/defaultComponents'

import TypeLogo from '../assets/SVG/type.svg'
import { Link } from 'react-router-dom'
import closeIcon from '../assets/SVG/closeWhite.svg'
import QrCode from '../assets/png/qrcode.png'

import {isMobileOnly, isChromium, isFirefox, isChrome} from 'react-device-detect'

import Modal from 'react-modal'

class Landing extends Component {
    state={
        isOpen: true
    }

    cssFailure(){
        if(!isChrome && !isFirefox && !isChromium) {
            return (
                <Modal isOpen={this.state.isOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, .5)'
                        },
                    content: {
                        backgroundColor: '#ff4f00'
                    }
                    }}
                >   
                    <DefaultContainer heightDiv="fit-content" bgColor="#FF4F00">
                        <DefaultContainer heightDiv="10%" widthDiv="100%"  bgColor="#FF4F00"  style={{justifyContent: "flex-start"}}>
                            <img src={closeIcon} height="35px" style={{paddingRight: 20, paddingTop: 10}} alt="Voltar" onClick={() => this.setState({isOpen: false})}></img>
                        </DefaultContainer>
                        <DefaultTitle style={{textAlign: 'center', width: "100%", color: "white", height: 15}}>Opa!</DefaultTitle>
                        <LandingPageText style={{textAlign: 'justify', fontSize: 16, color: 'white'}}>O seu navegador não possui suporte para as últimas atualizações do CSS e/ou Javascript, pode ser que algumas coisas fiquem estranhas ou fora de seu lugar. <br/> Para ter uma experiência otimizada na navegação, utilize <span style={{textDecoration: 'underline'}}>Firefox</span> ou <span style={{textDecoration: 'underline'}}>Google Chrome.</span><br/> <br/> 
                        <span style={{textAlign: 'left', fontSize: 14, bottom: 0}}>*Caso já esteja utilizando algum desses navegadores, desconsidere o aviso.</span>
                        </LandingPageText>
                    </DefaultContainer>
                </Modal>
            )
        }
        else {
            return  null
        }
    }

    render() {
        if (!isMobileOnly){ 
            return (
                <DefaultContainer heightDiv="fit-content">
                    <DefaultContainer heightDiv="fit-content">
                            <DefaultTitle style={{textAlign: 'center', width: "100%"}}>Opa!</DefaultTitle>
                            <img src={"https://i.imgur.com/xyItA00.png"} height="300px" alt="Imagem 1"/>  
                            <LandingPageText style={{textAlign: 'center'}}>Este site é um prototipo de um app mobile, sendo assim, deve ser aberto em atráves de um celular.
                            Para facilitar o acesso através de um dispositivo móvel, você pode acessar o site simplesmente escaneando o QRCode abaixo!
                            </LandingPageText>
                            <img src={QrCode} alt="QRcode"/>
                    </DefaultContainer>
                </DefaultContainer>
            )
        }

        else {
            return (
                <DefaultContainer style={{alignItems:"flex-start", alignContent: "flex-start"}} >
                    {
                        this.cssFailure()
                    }
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
}

export default Landing
