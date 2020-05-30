import React, { Component } from 'react'

import {DefaultContainer} from '../styles/defaultComponents'
import { Link } from "react-router-dom";

class ongCard extends Component {

    state = {
        nome: this.props.nome,
        causa: this.props.causa,
        distancia: this.props.distancia
    }

    newTo = {
        pathname: `/ong/${this.state.nome}`, 
        ongName: this.state.nome
    }

    render() {
        return (
            <Link to={this.newTo} style={{textDecoration: "none"}}>
                <DefaultContainer heightDiv="100px" widthDiv="90%" 
                    style={{
                        alignContent: 'center', 
                        alignItems: "center",
                        boxShadow: "1px 3px 5px rgb(158, 158, 158, .5)",
                        margin: "0px 0px 15px 5vw",
                        border: "1px solid transparent",
                        borderRadius: 10,
                        borderBottomRightRadius: 4,
                        borderBottomLeftRadius: 4
                        }}>

                        <DefaultContainer heightDiv="100%" widthDiv="30%" >
                        <img src={this.props.fotoURL} height="80%" alt="Foto da ONG" style={{borderRadius: 10}}/>
                        </DefaultContainer>

                        <DefaultContainer heightDiv="100%" widthDiv="70%"  style={{alignContent: 'center', alignItems: "center"}}>
                            <h2 style={{width: "90%", height: "25%", margin: 0, padding: 0, fontFamily: "ElaineSansMedium", fontSize: 18, color: "#002953", fontWeight: 800}}>
                                {this.state.nome}
                            </h2>
                            <h4 style={{width: "90%", height: "25%", margin: 0, padding: 0, fontFamily: "ElaineSansRegular", fontSize: 15, color: "#002953"}}>
                                {this.state.causa}
                            </h4>
                            <h5 style={{width: "90%", height: "25%", margin: 0, padding: 0, fontFamily: "ElaineSansRegular", fontSize: 13, color: "#002953"}}>
                                {this.state.distancia} KM
                            </h5>
                        </DefaultContainer>

            </DefaultContainer>
            </Link>
        )
    }
}

export default ongCard
