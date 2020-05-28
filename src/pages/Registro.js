import React, { Component } from 'react'

import { motion } from "framer-motion"
import backIcon from '../assets/SVG/back.svg'
import { Link } from "react-router-dom";
//Components
import { DefaultBtn, DefaultInput, DefaultContainer, DefaultTitle, DefaultTextArea } from './styles/defaultComponents'

class Registro extends Component {
    render() {
        return (
            <motion.div  animate={{x: '0vh', opacity: 1}} initial={{x: '-30vh', opacity: 0}} transition={{duration: 0.3}} >

            <DefaultContainer heightDiv="5vh" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
                    <Link to="/">
                        <img src={backIcon} style={{ height: "6vh", paddingLeft: 20}} alt="Voltar" />
                    </Link>
            </DefaultContainer>

            <form>       
                <DefaultContainer style={{alignContent: 'flex-start', paddingTop: "1vh"}}>
                    <DefaultTitle>Vamos Começar!</DefaultTitle>
                    
             
                    <DefaultInput placeholder="Nome Completo" required></DefaultInput>

                    <DefaultInput placeholder="Data de nascimento" style={{border: 'none'}} disabled></DefaultInput>
                    <div style={{display: 'flex'}}>
                        <DefaultInput placeholder="DD" style={{width: '20vw', marginRight: 11}} required/>
                        <DefaultInput placeholder="MM" style={{width: '20vw', marginRight: 12}} required/>
                        <DefaultInput placeholder="AAAA" style={{width: '20vw', marginRight: 11}} required/>
                    </div>

                    <DefaultInput placeholder="CEP" required></DefaultInput>
                    <DefaultInput placeholder="Email" required></DefaultInput>
                    <DefaultInput placeholder="Confirmar Email" required></DefaultInput>
                    <DefaultInput placeholder="Senha" required></DefaultInput>
                    <DefaultInput placeholder="Confirmar senha" required></DefaultInput>

                    <DefaultTextArea placeholder="Conte suas experiências como voluntário.(Caso não tenha, deixe em branco)" style={{height: '15vh'}}></DefaultTextArea>

                    <DefaultBtn type="submit">Começar</DefaultBtn>
                    </DefaultContainer>
            </form>
                    
                
            </motion.div>
        )
    }
}

export default Registro
