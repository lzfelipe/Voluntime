import React, { Component } from 'react'
import {DefaultBtn, DefaultContainer, DefaultInput, DefaultLabelForUploadBtn} from './styles/defaultComponents'
import { motion } from 'framer-motion'
import { apiPath } from '../configs/configs'
import closeIcon from '../assets/SVG/closeWhite.svg'

import SmallLoading from './components/smallLoading'

class SendApplication extends Component {
    state = {
        user_id: 0,
        ong_id: this.props.match.params.ong_id,
        ong_name: this.props.match.params.id,
        rg_front: null,
        rg_verse: null,
        choosen_date: "",

        enviado_front: false,
        enviado_verse: false,

        loading: false,
        success: "",
    }

    async componentDidMount() {
        const token = localStorage.getItem('token')

        const url = `${apiPath}/user`

        const requestInfo = {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    token: token
                })
            }
    
            await fetch(url, requestInfo).then(res => {
                res.json().then(async payload => {
                    this.setState({user_id: payload.id})
                })
                
            })
    }

    getRightBadgeUrl(id) {
        if(id === 1 || id === 4 || id === 5) { // animal
            return "https://i.imgur.com/tooTjvf.png"
        }

        else if (id === 6 || id === 8) { // moradores de rua
            return "https://i.imgur.com/fXN55DZ.png"
        }

        else if(id === 3 ) { //ambiente
            return "https://i.imgur.com/OlpmKfM.png"
        }

        else if (id === 7) { // alimento
            return "https://i.imgur.com/jLbnG1S.png"
        }

        else if(id === 2) { //idosos
            return "https://i.imgur.com/XshMHaS.png"
        }
    }

    getTodayDate(add){
       const today = new Date();
       let date = (today.getDate()+add)+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
       return date
    }

    getRightDate(id) {
        if(id === 2 || id === 5 || id === 8 ) { //manha
            return [`${this.getTodayDate(2)} ás 9:00`, `${this.getTodayDate(2)} ás 9:30`, `${this.getTodayDate(1)} ás 11:00`]
        }

        else if(id === 6 || id === 4) { //tarde 
            return [`${this.getTodayDate(2)} ás 14:00`, `${this.getTodayDate(2)} ás 15:30`, `${this.getTodayDate(1)} ás 16:30`]
        }

        else if(id === 1 || id === 3 || id === 7)  {  //noite
            return [`${this.getTodayDate(2)} ás 19:00`, `${this.getTodayDate(2)} ás 20:30`, `${this.getTodayDate(1)} ás 21:30`]
        }

    }

    async enviar(e, files, cpf, choosen_date) {
        e.preventDefault();
        this.setState({loading: true})
        const url = `${apiPath}/application`

        var formData = new FormData();
  
        formData.append('rg_front', this.state.rg_front)
        formData.append('rg_verse', this.state.rg_verse)

        formData.append('user_id', this.state.user_id);

        formData.append('choosen_date', this.state.choosen_date);
        formData.append('cpf', this.cpf.value);

        formData.append('badge_url', this.getRightBadgeUrl(parseFloat(this.state.ong_id)));
        
        formData.append('ong_id', this.state.ong_id);
        formData.append('ong_name', this.state.ong_name);

        const requestInfo = {
            method: 'POST',
            body: formData
        }
        await fetch(url, requestInfo)
        .then(response => {response.json()})
        .then(success => {
            this.setState({loading: false})
            this.setState({success: "Aplicação enviada"})
            //window.location.href = '/home'
        })
        .catch(error => console.log(error)
      );
    }

    onChangeHandlerFront=event=>{
        this.setState({
            rg_front: event.target.files[0],
            enviado_front: true
          })

    }

    onChangeHandlerBack=event2=>{
        this.setState({
            rg_verse: event2.target.files[0],
            enviado_verse: true
          })
    }

    changeDate(date) {
        console.log(date.target.value)
        this.setState({choosen_date: date.target.value})
    }

    changeBackgroundColorFront(){
        if(this.state.enviado_front === true) {
            return "green"
        }
        else {
            return "#ff4f00"
        }
    }

    changeBackgroundColorVerse(){
        if(this.state.enviado_verse === true) {
            return "green"
        }
        else {
            return "#ff4f00"
        }
    }


    render() {
        return (
            <motion.div  animate={{x: '0vh', opacity: 1}} initial={{x: '-30vh', opacity: 0}} transition={{duration: 0.3}} >
                <DefaultContainer heightDiv="10%" bgColor="#FF4F00" widthDiv="100%" style={{justifyContent: "flex-end", alignContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                    <img src={closeIcon} height="35px" style={{paddingRight: 30}} alt="Voltar" onClick={() => {this.props.history.goBack()}}/>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" >
                    <DefaultContainer widthDiv="90%" heightDiv="fit-content">
                    <h1 style={{fontFamily: "ElaineSansRegular", textAlign: "center", fontSize: 28, color: "#002953"}}>Candidate-se para ajudar {this.state.ong_name}</h1>
                     <p style={{fontFamily: "ElaineSansRegular", textAlign: "justify", fontSize: 16, color: "#002953"}}>Ao enviar sua solicitação você será analisado por um recrutador da ong selecionada e caso seja aceito, receberá no email cadastrado uma notificação da sua aprovação. </p>
                    </DefaultContainer>
                </DefaultContainer>

                <form onSubmit={this.enviar.bind(this)}>
                    <DefaultContainer heightDiv="fit-content" style={{justifyContent: "center"}}>

                        <DefaultInput placeholder="CPF" required ref={value => this.cpf = value} name="cpf"/>

                    <p  style={{fontFamily: "ElaineSansRegular", textAlign: "left", fontSize: 16, width: '70%', color: "#002953"}}>Selecione as fotos do seu RG:</p>
                    <DefaultContainer heightDiv="fit-content" style={{justifyContent: "space-around"}}>
                        <DefaultContainer heightDiv="fit-content" widthDiv="30%">
                            <DefaultLabelForUploadBtn
                            for="rg_front" style={{padding: 10, borderRadius: 10, backgroundColor: this.changeBackgroundColorFront(), content:"teste"}}>Frente</DefaultLabelForUploadBtn>
                            <input id="rg_front" name="rg_front" style={{opacity: 0, width: 10}} type="file" required 
                             onChange={this.onChangeHandlerFront}/>
                        </DefaultContainer>

                        <DefaultContainer heightDiv="fit-content" widthDiv="30%">
                            <DefaultLabelForUploadBtn 
                            for="rg_verse" style={{padding: 10, borderRadius: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: this.changeBackgroundColorVerse()}}>Verso</DefaultLabelForUploadBtn>
                            <input id="rg_verse" name="rg_verse" style={{opacity: 0, width: 10}} type="file" required 
                            onChange={this.onChangeHandlerBack}/>
                        </DefaultContainer>
                    </DefaultContainer>

                        <p  style={{fontFamily: "ElaineSansRegular", textAlign: "left", fontSize: 16, width: '70%', color: "#002953"}}>Horários disponiveis:</p>
                        <DefaultContainer heightDiv="fit-content" widthDiv="70%"  onChange={this.changeDate.bind(this)}>
                        {
                            this.getRightDate(parseFloat(this.state.ong_id)).flatMap(horario => {
                                return <label style={{width: '100%', marginBottom: 20, fontFamily: "ElaineSansRegular", color: "#002953"}}>
                                    <input type="radio" name="choosen_date" value={horario} required/>
                                    <span>{horario}</span>
                                </label>
                            })
                        }
                    
                        
                        </DefaultContainer>
                        {
                            this.state.loading === true ? <DefaultContainer heightDiv="20%"><SmallLoading loaded={0}/></DefaultContainer> : <DefaultContainer heightDiv="20%"><SmallLoading loaded={1} success={this.state.success}/></DefaultContainer>
                        }

                        {
                            this.state.success === "Aplicação enviada" ? null : <DefaultBtn>Enviar</DefaultBtn>
                        }
                        
                    </DefaultContainer>
                </form>

                
            </motion.div>
        )
    }
}

export default SendApplication
