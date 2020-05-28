import React, { Component } from 'react'

import { DefaultInput, DefaultContainer, DefaultTitle } from './styles/defaultComponents'
import defaultUser from '../assets/png/defaultuser.png'
import searchIcon from '../assets/SVG/search.svg'
import menuIcon from '../assets/SVG/menu.svg'
import closeIcon from '../assets/SVG/close.svg'

import OngCard from './components/ongCard'
import FiltersMenu from './components/filtersMenu'
import { motion } from 'framer-motion'


class Home extends Component {
    state = {
        openFilters: false
    }


    render() {

        return (
            <div style={{height: "fit-content"}}>
                <DefaultContainer style={{alignContent: 'center', alignItems: "center"}} heightDiv="20vh" bgColor="#FF4F00">

                        <DefaultTitle style={{alignSelf: 'center', color: "#FFF"}}>ONGS</DefaultTitle>
                        <img src={defaultUser} style={{alignSelf: 'center', height: '10vh'}} alt="Foto de usuário"/>

                </DefaultContainer>

                <DefaultContainer style={{alignContent: 'flex-start', alignItems: "flex-start", marginTop: 20}} heightDiv="fit-content" >
                    <div style={{height: "fit-content", paddingTop: 15}}>

                        <img src={searchIcon}  height="30" style={{position: "absolute"}} alt="Icone barra de busca"/>

                        <DefaultInput placeholder="Nome da ONG" style={{fontSize: 15, paddingLeft: 30, width: "60vw", alignSelf: 'center', borderBottomColor: '#FF4F00', paddingBottom: 10}}></DefaultInput>

                    </div>    

                    <img src={this.state.openFilters === false ? menuIcon : closeIcon}  height="40" style={{alignSelf: 'center', paddingLeft: 20}} onClick={() => {this.setState({openFilters: !this.state.openFilters})}} alt="Menu de filtros"/>

                    {
                        this.state.openFilters === false ? (null) : (
                        <motion.div animate={{height: 150, opacity: 1}} initial={{height: 0, opacity: 0}} transition={{duration: .3, stiffness: 80, restDelta: 2}} style={{marginBottom: 20}} >
                            <FiltersMenu />
                        </motion.div>
                        )
                    }   
                </DefaultContainer>

                <OngCard nome="Lhamas pelo bem" causa="Animais" distancia="4.5"/>
                <OngCard nome="Lhamas pelo mal" causa="Animais" distancia="4.5"/>
                <OngCard nome="Ninguém passa fome" causa="Mendigo" distancia="4.5"/>
                <OngCard nome="Todo mundo faminto" causa="Mendigo" distancia="4.5"/>

                
            </div>
        )
    }
}

export default Home
