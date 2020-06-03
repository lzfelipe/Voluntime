import React, { Component } from 'react'

import { DefaultInput, DefaultContainer, DefaultTitle } from './styles/defaultComponents'
import defaultUser from '../assets/png/defaultuser.png'
import searchIcon from '../assets/SVG/search.svg'
import menuIcon from '../assets/SVG/menu.svg'
import closeIcon from '../assets/SVG/close.svg'

import OngCard from './components/ongCard'
import FiltersMenu from './components/filtersMenu'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function searchingFor(nome) {
    return function(x){
      return x.nome.toLowerCase().includes(nome.toLowerCase()) || false;
    }
}

function filterCausa(causa, selected){
    return (causa === selected)
}

function filterPeriodo(periodo, selected){
    return (periodo === selected)
}

const fotoURL = "https://picsum.photos/160"

class Home extends Component {
    state = {
        openFilters: false,
        term: "",
        ongs: [
            {id: 1, nome: "Clube do Vira-latas", causa: "Animais", distancia: 4, periodo: "noite", fotoURL: "https://pbs.twimg.com/profile_images/499159819677216769/M-ZAiT9S_400x400.jpeg"},
            {id: 2, nome: "Brilho do Sol", causa: "Idosos", distancia: 12.7, periodo: "manha", fotoURL: "https://encurtador.com.br/pRUZ7"},
            {id: 3, nome: "Iniciativa Verde", causa: "Meio Ambiente", distancia: 2.9, periodo: "noite", fotoURL: "https://www.iniciativaverde.org.br/site/img/marca-redes-compartilhamento.jpg"},
            {id: 4, nome: "Gatópoles", causa: "Animais", distancia: 3.2, periodo: "tarde", fotoURL: "https://encurtador.com.br/ajp04"},
            {id: 5, nome: "Cidadania Animal", causa: "Animais", distancia: 20.1, periodo: "manha", fotoURL: "https://encurtador.com.br/lntv7"},
            {id: 6, nome: "A Corrente do Bem", causa: "Moradores de Rua", distancia: 18.9, periodo: "tarde", fotoURL: "https://encurtador.com.br/wEGQX"},
            {id: 7, nome: "Banco de Alimentos", causa: "Alimento", distancia: 7.4, periodo: "noite", fotoURL: "https://encurtador.com.br/lmsC6"},
            {id: 8, nome: "SP Invisível", causa: "Moradores de Rua", distancia: 2.3, periodo: "manha", fotoURL: "https://dsmv6m9so2sgl.cloudfront.net/photos/1713958/1557136806779_300.jpg"},
        ],
        filtroAtivado: false,
        filtro: "distancia",
    }
    searchHandler(event){
        this.setState({ term : event.target.value })
      }

      
    filterHandler(filtro){
        const { term, ongs } = this.state;
        if (filtro === "Animais" || filtro === "Idosos" || filtro === "Meio Ambiente" || filtro === "Moradores de Rua" || filtro === "Alimento") {
            return (
                ongs.filter(searchingFor(term))
                .filter(ong => filterCausa(ong.causa, this.state.filtro))
                .flatMap(ong => {
                return( 
                    <OngCard nome={ong.nome} causa={ong.causa} distancia={ong.distancia} key={ong.nome} fotoURL={ong.fotoURL} id={ong.id}/>
                    )
                })
            )
        }

        else if (filtro === "tarde" || filtro === "manha" || filtro === "noite") {
            return (
                ongs.filter(searchingFor(term))
                .filter(ong => filterPeriodo(ong.periodo, this.state.filtro))
                .flatMap(ong => {
                return( 
                    <OngCard nome={ong.nome} causa={ong.causa} distancia={ong.distancia} key={ong.nome} fotoURL={ong.fotoURL} id={ong.id}/>
                    )
                })
            )
        }

        else if (filtro === "distancia") {
            return (
                ongs.sort((a, b) => a.distancia - b.distancia)
                .filter(searchingFor(term))
                .flatMap(ong => {
                return( 
                    <OngCard nome={ong.nome} causa={ong.causa} distancia={ong.distancia} key={ong.nome} fotoURL={ong.fotoURL} id={ong.id}/>
                    )
                })
                
            )
        }
    }

    render() {
        const { term } = this.state;
        return (
            <div style={{height: "fit-content"}}>
                <DefaultContainer style={{alignContent: 'center', alignItems: "center"}} heightDiv="20vh" bgColor="#FF4F00">

                        <DefaultTitle style={{alignSelf: 'center', color: "#FFF"}}>ONGS</DefaultTitle>
                        
                        <Link to="/perfil">
                        <img src={defaultUser} style={{alignSelf: 'center', height: '10vh'}} alt="Foto de usuário"/>
                        </Link>

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
                            <motion.div animate={{height: 0, opacity: 0}} initial={{height: 150, opacity: 0}} transition={{duration: .15}} style={{marginBottom: 20, zIndex: -200}} >
                                <FiltersMenu>
                                    <label><input type="radio" name="toggle" defaultChecked={true}/><span>Menor distância</span></label>
                                    <label><input type="radio" name="toggle"/><span>Animais</span></label>
                                    <label><input type="radio" name="toggle"/><span>Meio Ambiente</span></label>
                                    <label><input type="radio" name="toggle"/><span>Idosos</span></label>
                                    <label><input type="radio" name="toggle"/><span>Alimento</span></label>
                                    <label><input type="radio" name="toggle"/><span>Funciona de manhã</span></label>
                                    <label><input type="radio" name="toggle"/><span>Funciona de tarde</span></label>
                                    <label><input type="radio" name="toggle"/><span>Funciona de noite</span></label>
                                </FiltersMenu>
                            </motion.div>
                        ) 
                        : //Or
                        (
                        <motion.div animate={{height: 150, opacity: 1}} initial={{height: 0, opacity: 0}} transition={{duration: .2}} style={{marginBottom: 20}} >
                            <FiltersMenu>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "distancia"})
                                }} defaultChecked={true} /><span>Menor distância</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "Animais"})
                                }} /><span>Animais</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "Meio Ambiente"})
                                }} /><span>Meio Ambiente</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "Idosos"})
                                }} /><span>Idosos</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "Alimento"})
                                }} /><span>Alimento</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "manha"})
                                }} /><span>Funciona de manhã</span></label>
                                <label><input type="radio" name="toggle" onClick={() => { 
                                    this.setState({filtro: "tarde"})
                                }} /><span>Funciona de tarde</span></label>
                                <label><input type="radio" name="toggle"onClick={() => { 
                                    this.setState({filtro: "noite"})
                                }} /><span>Funciona de noite</span></label>
                            </FiltersMenu>
                        </motion.div>
                        )
                    }   
                </DefaultContainer>


                {
                        this.filterHandler(this.state.filtro)
                }
                
            </div>
        )
    }
}

export default Home
