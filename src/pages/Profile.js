import React, { Component } from 'react'
import {DefaultBtn, DefaultContainer, DefaultTitle} from './styles/defaultComponents'

import defaultUser from '../assets/png/defaultuser.png'

import {apiPath} from '../configs/configs'

import closeIcon from '../assets/SVG/closeWhite.svg'
import { Link } from 'react-router-dom'

import JobProfileCard from './components/jobProfileCard'

class Profile extends Component {
    state = {
        id: 0,
        nome: "",
        cep: "",
        email: "",
        badges: [],
        jobs: []
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

                })
                .then(async () => {
                    const urlApplications = `${apiPath}/application/user/${this.state.id}`
    
                    await fetch(urlApplications).then(res => {
                        res.json().then( payload => {
                            this.setState({jobs: payload})

                            console.log(this.state.jobs)
                        })
                    })
                })
            })


    }

    render() {
        return (
            <div>
                <DefaultContainer heightDiv="10%" widthDiv="100%" bgColor="#FF4F00" style={{justifyContent: "flex-end", alignContent: 'center', alignItems: 'center'}}>
                    <Link to="/home">
                    <img src={closeIcon} height="35px" style={{paddingRight: 20, paddingTop: 10}}></img>
                    </Link>
                </DefaultContainer>

                <DefaultContainer heightDiv="200px" bgColor="#FF4F00">
                <img src={defaultUser} height="100px"/>
                <h1  style={{width: "100%", textAlign: "center", fontFamily: "ElaineSansRegular", color: "white"}}>{this.state.nome}</h1>
                <h1  style={{width: "100%", textAlign: "center", fontFamily: "ElaineSansRegular", fontSize: 12, marginTop: "-5%", color: "white"}}>{this.state.email}</h1>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" style={{marginTop: "5%"}}>
                <h2 style={{fontFamily: "ElaineSansRegular", width: "90%", color: "#002953"}}>Conquistas</h2>
                <DefaultContainer heightDiv="150px" style={{justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll", marginTop: '-5%'}}>
                    {
                        this.state.badges.flatMap(badge => {
                            return <img src={badge} height="100px" style={{paddingLeft: 6, paddingRight: 6}}/>
                        }).reverse()
                    }
                </DefaultContainer>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content" widthDiv="95%" style={{paddingTop: 10, paddingBottom: 10}}>
                    <h2 style={{fontFamily: "ElaineSansRegular", width: "90%", color: "#002953"}}>Trabalhos Ativos</h2>
                    {
                        this.state.jobs.length > 0 ?

                        this.state.jobs.flatMap(job => {
                            if(job.confirmed_by_ong === 1) {
                                return <JobProfileCard nomeOng="Teste" data={job.choosen_date} id={job.id}/>
                            }
                            else {
                                return null
                            }
                        }).reverse()

                        :

                        <h2 style={{fontFamily: "ElaineSansRegular", width: "90%", fontSize: 16, textAlign: 'center'}}>Não há trabalhos em andamento.
                        <br/> <br/> Caso já tenha enviado sua aplicação para se voluntariar em alguma ONG, por favor aguarde receber um email informando que foi aceito e verifique aqui novamente.</h2>
                    
                    }
                </DefaultContainer>


            </div>
        )
    }
}

export default Profile
