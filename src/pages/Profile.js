import React, { Component } from 'react'
import {DefaultContainer, DefaultBtnNoHover} from './styles/defaultComponents'

import defaultUser from '../assets/png/defaultuser.png'

import {apiPath} from '../configs/configs'

import closeIcon from '../assets/SVG/closeWhite.svg'
import { Link } from 'react-router-dom'

import JobProfileCard from './components/jobProfileCard'
import JobProfileCardAnalisys from './components/jobProfileCardAnalisys'

import Loading from './components/loading'

import ReactTooltip from "react-tooltip";

class Profile extends Component {
    state = {
        id: 0,
        nome: "",
        cep: "",
        email: "",
        badges: [],
        jobs: [],
        ong_name: "",

        loading: true,

        opacity: 1
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

                    this.setState({id: payload.id})
                    this.setState({nome: payload.full_name})
                    this.setState({cep: payload.cep})
                    this.setState({email: payload.email})
                    this.setState({badges: payload.badges.split(',')})
                    this.setState({ong_name: payload.ong_name})

                    

                })
                .then(async () => {
                    const urlApplications = `${apiPath}/application/user/${this.state.id}`
    
                    await fetch(urlApplications).then(res => {
                        res.json().then( payload => {
                            this.setState({jobs: payload})
                            console.log(this.state)
                            this.setState({loading: false})
                        })
                    })
                })
            })
    }

    logout() {
        localStorage.clear();
        window.location.href = '/'
    }

    getRightCause(url){
        if(url === "https://i.imgur.com/ylBnJ4k.png"){
            return "Conta Criada!"
        }
        else if(url === "https://i.imgur.com/fXN55DZ.png"){
            return "Ajudando quem precisa."
        }
        else if(url === "https://i.imgur.com/tooTjvf.png"){
            return "Amigo dos animais!"
        }
        else if(url === "https://i.imgur.com/OlpmKfM.png"){
           return `Salvando o planeta!`
        }
        else if(url === "https://i.imgur.com/jLbnG1S.png"){
            return "Não vai faltar comida!"
        }
        else if(url === "https://i.imgur.com/XshMHaS.png"){
            return "Ajudando os experientes!"
        }
    }

    render() {
        return this.state.loading ? 
        (
            <Loading />
        )
        :
        (
            <div>
                <DefaultContainer heightDiv="10%" widthDiv="100%" bgColor="#FF4F00" style={{justifyContent: "flex-end", alignContent: 'center', alignItems: 'center', border: 'none'}}>
                    <Link to="/home">
                    <img src={closeIcon} height="35px" style={{paddingRight: 20, paddingTop: 10}} alt="Voltar"></img>
                    </Link>
                </DefaultContainer>

                <DefaultContainer heightDiv="200px" bgColor="#FF4F00">
                <img src={defaultUser} height="100px" alt="Foto de usuário"/>
                <h1  style={{width: "100%", textAlign: "center", fontFamily: "ElaineSansRegular", color: "white"}}>Olá, {this.state.nome.split(' ')[0]}</h1>
                <h1  style={{width: "100%", textAlign: "center", fontFamily: "ElaineSansRegular", fontSize: 12, marginTop: "-5%", color: "white"}}>{this.state.email}</h1>

                <DefaultBtnNoHover onClick={() => this.logout()} className="nohover">Sair</DefaultBtnNoHover>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" style={{marginTop: "5%"}}>
                <h2 style={{fontFamily: "ElaineSansRegular", width: "90%", color: "#002953"}}>Conquistas</h2>
                <DefaultContainer heightDiv="150px" style={{justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll", marginTop: '-5%'}}>
                    {
                        this.state.badges.flatMap((badge, index) => {
                            console.log(badge)
                            return (
                            <div key={index+5}>
                            <img src={badge} height="100px" style={{paddingLeft: 6, paddingRight: 6}} alt="Insignia" key={index} data-tip data-for={`badge${index}`} />
                            <ReactTooltip textColor='#fff' backgroundColor='#ff4f00' id={`badge${index}`} type='dark' effect='solid' place="bottom" style={{padding: 0, margin: 0, height: 40}}>
                                   <p style={{fontFamily: "ElaineSansRegular",padding: 0, margin: 0}}> {this.getRightCause(badge)} </p>
                            </ReactTooltip>
                            </div>
                            )
                        })
                    }
                </DefaultContainer>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" widthDiv="95%" style={{paddingTop: 10, paddingBottom: 10}}>
                    <h2 style={{fontFamily: "ElaineSansRegular", width: "90%", color: "#002953"}}>Trabalhos Ativos</h2>
                    {
                        this.state.jobs.length > 0 ?

                        this.state.jobs.flatMap(job => {
                            if(job.confirmed_by_ong === 1) {
                                return <JobProfileCard nomeOng={job.ong_name} data={job.choosen_date} id={job.id} key={job.id}/>
                            }
                            else {
                                return <JobProfileCardAnalisys nomeOng={job.ong_name} data={job.choosen_date} id={job.id} key={job.id}/>
                            }
                        }).reverse()

                        :

                        <h2 style={{fontFamily: "ElaineSansRegular", width: "90%", fontSize: 16, textAlign: 'center', color: "#002953"}}>Não há trabalhos em andamento.
                        <br/> <br/> Caso já tenha enviado sua aplicação para se voluntariar em alguma ONG, por favor aguarde receber um email informando que foi aceito e verifique aqui novamente.</h2>
                    
                    }
                </DefaultContainer>


            </div>
        )
    }
}

export default Profile
