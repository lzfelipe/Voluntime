import React, { Component } from 'react'

import {DefaultBtn, DefaultContainer, DefaultTitle, DefaultText} from './styles/defaultComponents'
import { Link } from "react-router-dom";
import LogoType from '../assets/SVG/logotype.svg'
import bgLogin from '../assets/png/bglogin.png'
import { motion } from "framer-motion"

class Main extends Component {
    render() {
        return (
            <motion.div  animate={{x: '0vh', opacity: 1}} initial={{x: '30vh', opacity: 0}} transition={{duration: 0.3}} style={{overflowX: 'hidden'}}>
                <DefaultContainer  style={{alignContent: 'flex-start'}}>

                    <DefaultContainer heightDiv="fit">
                        <DefaultTitle style={{color: 'white', marginBottom: "-5vh", textAlign: "center", width: '100%', zIndex: 1, paddingTop: "6vh"}}>Junte-se a nós</DefaultTitle>
                        <DefaultText style={{color: 'white', width: '100%', zIndex: 1}}>e comece a ajudar o mundo!</DefaultText>
                        <img src={bgLogin} width="100%" style={{position: 'absolute', zIndex: 0, top: -130, maxHeight: 500}} alt=""/>
                    </DefaultContainer>

                    <DefaultContainer heightDiv="80vh" style={{alignContent: 'space-evenly', marginTop: "3vh"}}>
                        <img src={LogoType} height="125" style={{marginBottom: "-15vh"}} alt="Logo Voluntime"/>

                        <DefaultContainer heightDiv="fit"> 
                        <Link to="/registro">
                        <DefaultBtn>Juntar-se</DefaultBtn>
                        </Link>

                        <Link to="/login" style={{textDecoration: "none"}}>
                        <DefaultText style={{color: "grey", width: '100vw', marginTop: "-0.5vh"}}>Entrar</DefaultText>
                        </Link>

                        </DefaultContainer>
                    </DefaultContainer>
                    </DefaultContainer>
            </motion.div>
        )
    }
}

export default Main
