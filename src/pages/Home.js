import React, { Component } from 'react'

import { DefaultInput, DefaultContainer, DefaultTitle } from './styles/defaultComponents'
import defaultUser from '../assets/png/defaultuser.png'
import searchIcon from '../assets/SVG/search.svg'
import menuIcon from '../assets/SVG/menu.svg'
import closeIcon from '../assets/SVG/close.svg'

import OngCard from './components/ongCard'
import FiltersMenu from './components/filtersMenu'
import { motion } from 'framer-motion'

function searchingFor(nome) {
    return function(x){
      return x.nome.toLowerCase().includes(nome.toLowerCase()) || false;
    }
}

function filterCausa(causa, selected){
    return (causa === selected)
}



class Home extends Component {
    state = {
        openFilters: false,
        term: "",
        ongs: [
            {nome: "Ong de Macacos", causa: "Animais", distancia: "4"},
            {nome: "Fale com Idosos", causa: "Idosos", distancia: "99.9"},
            {nome: "Adote uma árvore", causa: "Meio Ambiente", distancia: "99.9"},
            {nome: "Ong de Lhamas", causa: "Animais", distancia: "99.9"},
            {nome: "Ong de Lhamas 2", causa: "Animais", distancia: "99.9"},
            {nome: "Ajude quem precisa", causa: "Moradores de Rua", distancia: "99.9"},
            {nome: "Doe comida", causa: "Alimento", distancia: "99.9"},
            {nome: "Ajude os Mendigos", causa: "Moradores de Rua", distancia: "99.9"},
        ],
        filtroAtivado: false,
        filtro: "",
    }

    searchHandler(event){
        this.setState({ term : event.target.value })
      }


    render() {
        const { term, ongs } = this.state;
        return (
            <div style={{height: "fit-content"}}>
                <DefaultContainer style={{alignContent: 'center', alignItems: "center"}} heightDiv="20vh" bgColor="#FF4F00">

                        <DefaultTitle style={{alignSelf: 'center', color: "#FFF"}}>ONGS</DefaultTitle>
                        <img src={defaultUser} style={{alignSelf: 'center', height: '10vh'}} alt="Foto de usuário"/>

                </DefaultContainer>

                <DefaultContainer style={{alignContent: 'flex-start', alignItems: "flex-start", marginTop: 20}} heightDiv="fit-content" >
                    <div style={{height: "fit-content", paddingTop: 15}}>

                        <img src={searchIcon}  height="30" style={{position: "absolute"}} alt="Icone barra de busca"/>

                        <DefaultInput placeholder="Nome da ONG" style={{fontSize: 15, paddingLeft: 30, width: "60vw", alignSelf: 'center', borderBottomColor: '#FF4F00', paddingBottom: 10}} onChange={this.searchHandler.bind(this)}
                        value={term}></DefaultInput>

                    </div>    

                    <img src={this.state.openFilters === false ? menuIcon : closeIcon}  height="40" style={{alignSelf: 'center', paddingLeft: 20}} onClick={() => {this.setState({openFilters: !this.state.openFilters})}} alt="Menu de filtros"/>

                    {
                        !this.state.openFilters ? (
                            <motion.div animate={{height: 0, opacity: 0}} initial={{height: 150, opacity: 0}} transition={{duration: .15}} style={{marginBottom: 20}} >
                                <FiltersMenu>
                                    <label><input type="radio" name="toggle"/><span>Menor distância</span></label>
                                    <label><input type="radio" name="toggle"/><span>Animais</span></label>
                                    <label><input type="radio" name="toggle"/><span>Meio Ambiente</span></label>
                                    <label><input type="radio" name="toggle"/><span>Idosos</span></label>
                                    <label><input type="radio" name="toggle"/><span>Alimento</span></label>
                                    <label><input type="radio" name="toggle"/><span>Funciona de manhã</span></label>
                                    <label><input type="radio" name="toggle"/><span>Funciona de tarde</span></label>
                                    <label><input type="radio" name="toggle"/><span>Funciona de noite</span></label>
                                    <label><input type="radio" name="toggle" defaultChecked={true}/><span>Sem Filtros</span></label>
                                </FiltersMenu>
                            </motion.div>
                        ) 
                        : //Or
                        (
                        <motion.div animate={{height: 150, opacity: 1}} initial={{height: 0, opacity: 0}} transition={{duration: .2, stiffness: 80, restDelta: 2}} style={{marginBottom: 20}} >
                            <FiltersMenu>
                                <label><input type="checkbox" name="toggle"/><span>Menor distância</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtroAtivado: true})
                                    this.setState({filtro: "Animais"})
                                }} /><span>Animais</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtroAtivado: true})
                                    this.setState({filtro: "Meio Ambiente"})
                                }} /><span>Meio Ambiente</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtroAtivado: true})
                                    this.setState({filtro: "Idosos"})
                                }} /><span>Idosos</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtroAtivado: true})
                                    this.setState({filtro: "Alimento"})
                                }} /><span>Alimento</span></label>
                                <label><input type="checkbox" name="toggle"/><span>Funciona de manhã</span></label>
                                <label><input type="checkbox" name="toggle"/><span>Funciona de tarde</span></label>
                                <label><input type="checkbox" name="toggle"/><span>Funciona de noite</span></label>
                                <label><input type="radio" name="toggle" defaultChecked={true}  onClick={() => { 
                                    this.setState({filtroAtivado: false})
                                }} /><span>Sem Filtros</span></label>
                            </FiltersMenu>
                        </motion.div>
                        )
                    }   
                </DefaultContainer>


                {
                    this.state.filtroAtivado ?
                    (
                        ongs.filter(searchingFor(term))
                        .filter(ong => filterCausa(ong.causa, this.state.filtro))
                        .flatMap(ong => {
                        return( 
                            <OngCard nome={ong.nome} causa={ong.causa} distancia={ong.distancia} key={ong.nome}/>
                          )
                        })
                    )
                    :
                    (
                        ongs.filter(searchingFor(term))
                        .flatMap(ong => {
                        return( 
                            <OngCard nome={ong.nome} causa={ong.causa} distancia={ong.distancia} key={ong.nome}/>
                          )
                        })
                    )
                    
                }
                
            </div>
        )
    }
}

export default Home
