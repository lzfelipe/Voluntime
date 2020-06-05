import React, { Component } from 'react'

import { motion } from "framer-motion"
import backIcon from '../assets/SVG/back.svg'
import { Link } from "react-router-dom";
//Components
import { DefaultBtn, DefaultInput, DefaultContainer, DefaultTitle, DefaultTextArea } from './styles/defaultComponents'

import {apiPath} from '../configs/configs'

import SmallLoading from './components/smallLoading'

class Registro extends Component {
    state = {
        success: "",

        loading: false
    }


    async registro(e) {
        e.preventDefault();
        this.setState({loading: true})
        this.setState({success: ""})
        const url = `${apiPath}/users`

        const requestInfo = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                full_name: this.name.value,
                birth_date: `${this.dia.value}/${this.mes.value}/${this.ano.value}`,
                cep: this.cep.value,
                email: this.email.value,
                password: this.senha.value,
                background_field: this.background.value
            })
        }

        await fetch(url, requestInfo)
        .then(response => {response.json()})
        .then(success => {
            this.setState({success: "Registro concluido. por favor entre usando sua conta nova"})
            this.setState({loading: false})
            
        })
        .catch(error => console.log(error)
      );
    }

    render() {
        return (
            <motion.div  animate={{x: '0vh', opacity: 1}} initial={{x: '-30vh', opacity: 0}} transition={{duration: 0.3}} >

            <DefaultContainer heightDiv="5vh" style={{ justifyContent: 'flex-start', paddingTop: 20 }}>
                    <Link to="/">
                        <img src={backIcon} style={{ height: "6vh", paddingLeft: 20}} alt="Voltar" />
                    </Link>
            </DefaultContainer>

            <form onSubmit={this.registro.bind(this)} style={{}}>       
                <DefaultContainer style={{alignContent: 'flex-start', paddingTop: "1vh"}}>
                        <DefaultTitle>Vamos Começar!</DefaultTitle>
                        
                
                        <DefaultInput placeholder="Nome Completo" required ref={value => this.name = value}></DefaultInput>

                        <DefaultInput placeholder="Data de nascimento" style={{border: 'none'}} disabled></DefaultInput>
                        <div style={{display: 'flex'}}>
                            <DefaultInput placeholder="Dia" type="number" style={{width: '20vw', marginRight: 11}} required ref={value => this.dia = value}/>
                            <DefaultInput placeholder="Mês" type="number" style={{width: '20vw', marginRight: 12}} required ref={value => this.mes = value}/>
                            <DefaultInput placeholder="Ano" type="number" style={{width: '20vw', marginRight: 11}} required ref={value => this.ano = value}/>
                        </div>

                        <DefaultInput placeholder="CEP" type="number" required ref={value => this.cep = value}></DefaultInput>
                        <DefaultInput placeholder="Email" required ref={value => this.email = value} type="email"></DefaultInput>

                        <DefaultInput placeholder="Senha" required ref={value => this.senha = value} type="password"></DefaultInput>

                        <DefaultTextArea placeholder="Conte suas experiências como voluntário.(Caso não tenha, deixe em branco)" style={{height: '15vh'}} ref={value => this.background = value} defaultValue={null}></DefaultTextArea>

                        <label style={{marginBottom: 20, fontFamily: "ElaineSansRegular", color: "#002953"}}>
                                        <input type="radio" name="tos"  required />
                            <Link to="/tos" style={{textDecoration: 'underline', color: "#ff4f00"}}>Termos de serviço</Link>
                        </label>

                        {
                            this.state.success === "Registro concluido. por favor entre usando sua conta nova" ?
                            (
                                <DefaultContainer heightDiv="fit-content" widthDiv="100%">
                                    <DefaultBtn onClick={() => window.location.href = '/login'} style={{backgroundColor: "#00c5dc"}}>Logar</DefaultBtn>
                                </DefaultContainer>
                            )

                            :

                            (
                                <DefaultContainer heightDiv="fit-content" widthDiv="100%">
                                    <DefaultBtn type="submit">Começar</DefaultBtn>
                                </DefaultContainer>
                            )
                             
                        }
                        
                        {
                            this.state.loading === true ? <DefaultContainer heightDiv="20%"><SmallLoading loaded={0}/> </DefaultContainer>  : <DefaultContainer heightDiv="20%"><SmallLoading loaded={1} success={this.state.success}/>
                            
                            </DefaultContainer>
                        }

                        
                    </DefaultContainer>
            </form>
                    
                
            </motion.div>
        )
    }
}

export default Registro
