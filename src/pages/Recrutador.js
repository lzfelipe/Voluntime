import React, { Component } from 'react'
import { DefaultContainer, DefaultTitle, DefaultBtn, DefaultText } from './styles/defaultComponents'
import {apiPath} from '../configs/configs'


class Recrutador extends Component {
    state = {
        nome: "",
        applications: [],
    }

    async componentDidMount() {
        const id = this.props.match.params.id

        await fetch(`${apiPath}/application/ong/${id}`)
        .then(response => { 
            response.json()
            .then(async ong => {
                if(ong.length > 0) {
                    this.setState({nome: ong[0].ong_name})
                    this.setState({applications: ong})
                }
                else {
                    return
                }
            })
        })
    }

    async ongConfirm(id){

        const requestInfo = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ong_name: this.state.nome
            })
        }

        await fetch(`${apiPath}/application/confirm/${id}`, requestInfo)
        .then(response => { 
            response.json()
            .then(() => {
                alert("Aplicação confirmada")
                window.location.reload()
            })
        })
    } 

    async applicationDone(id){

        const requestInfo = {
            method: 'PUT'
        }

        await fetch(`${apiPath}/application/${id}`, requestInfo)
        .then(response => { 
            response.json()
            .then(() => {
                alert("O Trabalho foi concluido.")
                window.location.reload()
            })
        })
    }

    async deleteApplication(id){

        const requestInfo = {
            method: 'DELETE'
        }

        await fetch(`${apiPath}/application/${id}`, requestInfo)
        .then(response => { 
            response.json()
            .then(() => {
                alert("O Trabalho cancelado.")
                window.location.reload()
            })
        })
    }

    render() {
        return (
            <div>
                <DefaultContainer heightDiv="20%" bgColor="#ff4f00">
                    <DefaultTitle style={{color: 'white', textAlign: 'center', fontSize: 35}}>{this.state.nome}</DefaultTitle>
                </DefaultContainer>
                
                <DefaultContainer heightDiv="fit-content">
                {

                    this.state.applications.length > 0 ? (
                        this.state.applications.flatMap((application, index) => {
                            return (
                            <DefaultContainer heightDiv="20%" widthDiv="85%" bgColor="#eaeaea" key={index+2} 
                            style={{paddingLeft: 20, boxShadow: "1px 3px 5px rgb(158, 158, 158, .5)", border: "1px solid transparent",borderRadius: 10,
                            borderBottomRightRadius: 4,
                            borderBottomLeftRadius: 4,
                            marginTop: 20}}>
                                <h3 style={{fontFamily: "ElaineSansRegular", width: '100%', height: 5}}>CPF: {application.cpf}</h3>
                                <h3 style={{fontFamily: "ElaineSansRegular", width: '100%', height: 5}}>Fotos RG: </h3>

                                <a 
                                href={`${apiPath}/${application.rg_front}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{fontFamily: "ElaineSansRegular", width: '100%', textDecoration: "underline"}}>{application.rg_front}</a>

                                <a 
                                href={`${apiPath}/${application.rg_verse}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{fontFamily: "ElaineSansRegular", width: '100%', textDecoration: "underline"}}>{application.rg_verse}</a>

                                <h3 style={{fontFamily: "ElaineSansRegular", width: '100%', height: 5}}>{application.choosen_date}</h3>
                                
                                {
                                    
                                        application.confirmed_by_ong === 1 ? 
                                        (
                                        <DefaultContainer heightDiv="fit-content" bgColor="transparent">
                                        <DefaultBtn style={{fontSize: 15, backgroundColor: "green"}} onClick={() => this.applicationDone(application.id)}>Trabalho terminado</DefaultBtn>
                                        <DefaultBtn style={{fontSize: 15, backgroundColor: "red"}} onClick={() => this.deleteApplication(application.id)}>Trabalho não concluido</DefaultBtn>
                                        </DefaultContainer>
                                        )

                                        :

                                        (
                                        <DefaultContainer heightDiv="fit-content" bgColor="transparent">
                                        <DefaultBtn style={{fontSize: 15, backgroundColor: "green"}} onClick={() => this.ongConfirm(application.id)}>Aceitar</DefaultBtn>
                                        <DefaultBtn style={{fontSize: 15, backgroundColor: "red"}} onClick={() => this.deleteApplication(application.id)}>Recusar</DefaultBtn>
                                        </DefaultContainer>
                                        )                     
                                }
                                
                            </DefaultContainer>
                            )
                        })
                        )
                        :
                        (
                            <DefaultContainer>
                                <DefaultText>Não há aplicações pra sua ong.</DefaultText>
                            </DefaultContainer>
                        )
                }
                </DefaultContainer>
            </div>
        )
    }
}

export default Recrutador
