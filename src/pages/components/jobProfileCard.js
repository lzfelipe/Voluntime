import React, { Component } from 'react'

import {DefaultContainer} from '../styles/defaultComponents'
import {apiPath} from '../../configs/configs'

class JobProfileCard extends Component {
    deletar(id)  {
        const url = `${apiPath}/application/`+id;
  
        const requestInfo = {
          method:'DELETE'
      }
  
      fetch(url, requestInfo)
      .then(res => {
        res.json().then(data => {
          alert(data)
          window.location.reload()
        })
          
      })
      .catch( err => {
          alert('Hove um erro.')
      })
    }

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

                            <DefaultContainer heightDiv="100%" widthDiv="100%"  style={{alignContent: 'center', alignItems: "center", textAlign: "center"}}>
                                <h2 style={{width: "100%", height: "25%", margin: 0, padding: 0, fontFamily: "ElaineSansMedium", fontSize: 18, color: "#002953", fontWeight: 800}}>
                                    {this.props.nomeOng}
                                </h2>
                                <h2 style={{width: "100%", height: "25%", margin: 0, padding: 0, fontFamily: "ElaineSansMedium", fontSize: 16, color: "#002953", fontWeight: 800}}>
                                    {this.props.data}
                                </h2>

                                <h4 style={{width: "60%", height: "30%", margin: 0, padding: 0, fontFamily: "ElaineSansRegular", fontSize: 15, color: "white", backgroundColor: "red", borderRadius: 20, paddingTop: 5}} onClick={() => {this.deletar(this.props.id)}}>
                                    Cancelar
                                </h4>
                                
                            </DefaultContainer>
        </DefaultContainer>
        )
    }
}

export default JobProfileCard
