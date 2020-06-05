import React, { Component } from 'react'

import {DefaultContainer} from '../styles/defaultComponents'

class JobProfileCard extends Component {

    render() {
        return (
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

                            <DefaultContainer heightDiv="fit-content" widthDiv="100%"  style={{alignContent: 'center', alignItems: "center", textAlign: "center"}}>
                                <h2 style={{width: "100%", height: "25%", margin: 0, padding: 0, fontFamily: "ElaineSansMedium", fontSize: 18, color: "#002953", fontWeight: 800}}>
                                    {this.props.nomeOng}
                                </h2>

                                <h2 style={{width: "100%", height: "fit-content", margin: 0, padding: 0, fontFamily: "ElaineSansMedium", fontSize: 14, color: "#002953", fontWeight: 800}}>
                                    Candidatura em análise. <br/> Aguarde contato da ong.
                                </h2>

                            </DefaultContainer>
        </DefaultContainer>
        )
    }
}

export default JobProfileCard
