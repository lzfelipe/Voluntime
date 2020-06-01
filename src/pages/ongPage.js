import React, { Component } from 'react'
import { motion } from 'framer-motion'
import {DefaultBtn, DefaultContainer, DefaultSubTitle} from './styles/defaultComponents'
import { apiPath } from '../configs/configs'
import closeIcon from '../assets/SVG/closeWhite.svg'

import { Link } from "react-router-dom";

import {Map, TileLayer, Marker, Popup} from 'react-leaflet'


class ongPage extends Component {
    state = {
        loading: true,
        nome: "",
        endereco: "",
        fotoPerfil: "",
        outrasFotos: [],
        descricao: "",

        lat: 0,
        lng: 0,
        zoom: 17

    }

    async componentDidMount() {
        const id = this.props.match.params.id

        await fetch(`${apiPath}/ong/${id}`)
        .then(response => { 
            response.json()
            .then(async ong => {
                const addressEncoded = encodeURI(ong.address)

                this.setState({nome: ong.nome})
                this.setState({outrasFotos: ong.profilePhotos})
                this.setState({fotoPerfil: ong.mainPhoto})
                this.setState({descricao: ong.description})
                this.setState({endereco: ong.address})    
                this.setState({lat: ong.lat})
                this.setState({lng: ong.lng})
        
            })
        })
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <motion.div animate={{x: '0vh', opacity: 1}} initial={{x: '100vw', opacity: 0}} transition={{duration: 0.5}} style={{overflowX: 'hidden'}}>

                <DefaultContainer heightDiv="10%" bgColor="#FF4F00" widthDiv="100%" style={{justifyContent: "space-around", alignContent: 'center', alignItems: 'center'}}>
                    <h1 style={{fontFamily: "ElaineSansRegular", color: 'white', fontSize: 22, marginLeft: "-4vw"}}>{this.state.nome}</h1>
                    <Link to="/home">
                    <img src={closeIcon} height="35px" style={{marginLeft: "15vw"}}></img>
                    </Link>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" widthDiv="100%" style={{justifyContent: "space-around", alignItems: 'center', paddingTop: 20}}>
                    <img src={this.state.fotoPerfil} height="150px" width="150px"/>
                    <DefaultSubTitle>{this.state.nome}</DefaultSubTitle>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" widthDiv="100%" style={{justifyItems: "flex-start", alignItems: 'center', textJustify: "left"}}>
                    <p style={{fontFamily: "ElaineSansRegular", fontSize: 15, textAlign: "justify", width: '90%'}}>{this.state.descricao}</p>
                </DefaultContainer>

            <DefaultContainer heightDiv="fit-content" widthDiv="100%" style={{marginInlineEnd: 200}}>
                <DefaultContainer heightDiv="200px" widthDiv="100%" style={{overflow: "scroll", justifyContent: 'space-around', flexWrap: 'nowrap'}}>
                        <img src={this.state.outrasFotos[0]} height="60%" width="45%" style={{opacity: 0}} />
                        <img src={this.state.outrasFotos[0]} height="80%" width="50%" style={{borderRadius: 15, marginRight: 20, maxHeight: 150, maxWidth: 150}}/>
                        <img src={this.state.outrasFotos[1]} height="80%" width="50%" style={{borderRadius: 15, marginRight: 20, maxHeight: 150, maxWidth: 150}}/>
                        <img src={this.state.outrasFotos[2]} height="80%" width="50%" style={{borderRadius: 15, maxHeight: 150, maxWidth: 150}}/>
                        <img src={this.state.outrasFotos[0]} height="60%" width="6%" style={{opacity: 0}}/>
                </DefaultContainer>
            </DefaultContainer>

                <DefaultContainer heightDiv="fit-content"   bgColor="#FF4F00" widthDiv="100%" style={{justifyItems: "flex-start", alignItems: 'center', textJustify: "left", paddingBottom: 20}}>
                    <h2 style={{fontFamily: "ElaineSansRegular", fontSize: 24, textAlign: "left", width: '90%', color: 'white', height: '10px'}}>Endereço</h2>
                    <p style={{fontFamily: "ElaineSansRegular", fontSize: 18, textAlign: "left", width: '90%', color: 'white'}}>{this.state.endereco}</p>

                    <Map center={position} zoom={this.state.zoom} style={{width: "90%", height: "250px", borderRadius: 15}}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            {this.state.nome}
                        </Popup>
                        </Marker>
                    </Map>

                    <DefaultBtn style={{backgroundColor: 'white', color: "#FF4F00"}}>Candidatar-se</DefaultBtn>
                </DefaultContainer>

            </motion.div>
        )
    }
}

export default ongPage
