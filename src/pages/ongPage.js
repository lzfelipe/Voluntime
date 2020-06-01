import React, { Component } from 'react'
import { motion } from 'framer-motion'
import {DefaultBtn, DefaultContainer, DefaultTitle, DefaultSubTitle} from './styles/defaultComponents'
import { apiPath } from '../configs/configs'
import closeIcon from '../assets/SVG/closeWhite.svg'

import { Link } from "react-router-dom";

class ongPage extends Component {
    state = {
        loading: true,
        nome: "",
        endereco: "",
        fotoPerfil: "",
        outrasFotos: [],
        descricao: ""

    }

    async componentDidMount() {
        const id = this.props.match.params.id

        await fetch(`${apiPath}/ong/${id}`)
        .then(response => { 
            response.json()
            .then(ong => {
                this.setState({nome: ong.nome})
                this.setState({outrasFotos: ong.profilePhotos})
                this.setState({fotoPerfil: ong.mainPhoto})
                this.setState({descricao: ong.description})
                this.setState({endereco: ong.address})     
            })
        })
    }

    render() {
        return (
            <motion.div animate={{x: '0vh', opacity: 1}} initial={{x: '100vw', opacity: 0}} transition={{duration: 0.5}} style={{overflowX: 'hidden'}}>

                <DefaultContainer heightDiv="10%" bgColor="#FF4F00" widthDiv="100%" style={{justifyContent: "flex-end", paddingTop: 10, paddingBottom: 10}}>
                    <Link to="/home">
                    <img src={closeIcon} height="45px" style={{paddingRight: 20}}></img>
                    </Link>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" bgColor="lightgray" widthDiv="100%" style={{justifyContent: "space-around", alignItems: 'center', paddingTop: 20}}>
                    <img src={this.state.fotoPerfil} height="150px" width="150px" style={{borderRadius: 200}}/>
                    <DefaultSubTitle>{this.state.nome}</DefaultSubTitle>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" bgColor="lightgray" widthDiv="100%" style={{justifyItems: "flex-start", alignItems: 'center', textJustify: "left"}}>
                    <p style={{fontFamily: "ElaineSansRegular", fontSize: 15, textAlign: "justify", width: '90%'}}>{this.state.descricao}</p>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" bgColor="lightblue" widthDiv="100%" style={{justifyContent: "space-around", paddingTop: 10, paddingBottom: 10}}>
                    <img src={this.state.outrasFotos[0]} height="150px" width="150px" style={{borderRadius: 200}}/>
                    <img src={this.state.outrasFotos[1]} height="150px" width="150px" style={{borderRadius: 200}}/>
                    <img src={this.state.outrasFotos[2]} height="150px" width="150px" style={{borderRadius: 200}}/>
                </DefaultContainer>

                <DefaultContainer heightDiv="300px" bgColor="lightgray" widthDiv="100%" style={{justifyItems: "flex-start", alignItems: 'center', textJustify: "left"}}>
                    <h2 style={{fontFamily: "ElaineSansRegular", fontSize: 24, textAlign: "left", width: '90%'}}>Endereço</h2>
                    <p style={{fontFamily: "ElaineSansRegular", fontSize: 18, textAlign: "left", width: '90%'}}>{this.state.endereco}</p>
                </DefaultContainer>
            </motion.div>
        )
    }
}

export default ongPage
