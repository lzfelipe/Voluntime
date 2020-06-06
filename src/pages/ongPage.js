import React, { Component } from 'react'
import { motion } from 'framer-motion'
import {DefaultBtn, DefaultContainer} from './styles/defaultComponents'
import { apiPath } from '../configs/configs'
import closeIcon from '../assets/SVG/closeWhite.svg'

import { Link } from "react-router-dom";

import Loading from './components/loading'

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
        zoom: 17,

    }

    async componentDidMount() {
        const id = this.props.match.params.id

        await fetch(`${apiPath}/ong/${id}`)
        .then(response => { 
            response.json()
            .then(async ong => {

                this.setState({nome: ong.nome})
                this.setState({outrasFotos: ong.profilePhotos})
                this.setState({fotoPerfil: ong.mainPhoto})
                this.setState({descricao: ong.description})
                this.setState({endereco: ong.address})    
                this.setState({lat: ong.lat})
                this.setState({lng: ong.lng})
            }).then(() => this.setState({loading: false}))
        })
    }

    render() {
        const position = [this.state.lat, this.state.lng]

        return this.state.loading ? (
            <Loading />
        )

        :  (
        
        <motion.div animate={{x: '0vh', opacity: 1}} initial={{x: '100vw', opacity: 0}} transition={{duration: 0.5}} style={{overflowX: 'hidden'}}>
                <DefaultContainer heightDiv="10%" bgColor="#FF4F00" widthDiv="100%" style={{justifyContent: "space-around", alignContent: 'center', alignItems: 'center'}}>

                    <h1 style={{fontFamily: "ElaineSansRegular", color: 'white', fontSize: 20}}>{this.state.nome}</h1>
                    <Link to="/home">

                    <DefaultContainer heightDiv="fit-content" bgColor="#ff4f00" style={{justifyContent: "flex-end", justifyItems:"flex-end", paddingLeft: "50%"}}>
                    <img src={closeIcon} height="35px" alt="Voltar"></img>
                    </DefaultContainer>
                    </Link>

                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" widthDiv="100%" style={{justifyContent: "space-around", alignItems: 'center', paddingTop: 20}}>
                    <img src={this.state.fotoPerfil} height="150px" width="150px" alt="Logo da ONG"/>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" widthDiv="100%" style={{justifyItems: "flex-start", alignItems: 'center', textJustify: "left"}}>
                    <p style={{fontFamily: "ElaineSansRegular", fontSize: 15, textAlign: "justify", width: '90%'}}>{this.state.descricao}</p>
                </DefaultContainer>

            <DefaultContainer heightDiv="180px" style={{justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}}>
                        <img src={this.state.outrasFotos[0]} height="80%" width="50%" style={{borderRadius: 10, paddingLeft: 6, paddingRight: 6, maxHeight: 150, maxWidth: 150}} alt="Foto da ONG 1"/>
                        <img src={this.state.outrasFotos[1]} height="80%" width="50%" style={{borderRadius: 10, paddingLeft: 6, paddingRight: 6, maxHeight: 150, maxWidth: 150}} alt="Foto da ONG 2"/>
                        <img src={this.state.outrasFotos[2]} height="80%" width="50%" style={{borderRadius: 10, paddingLeft: 6, paddingRight: 6, maxWidth: 150}} alt="Foto da ONG 3"/>
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

                    <Link to={{pathname: `/aplicar/${this.state.nome}/${this.props.match.params.id}`}} >
                    <DefaultBtn style={{backgroundColor: 'white', color: "#FF4F00"}}>Candidatar-se</DefaultBtn>
                    </Link>
                </DefaultContainer>

            </motion.div>
        )
    }
}

export default ongPage
