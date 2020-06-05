import React, { Component } from 'react'
import { DefaultContainer } from '../styles/defaultComponents'
import Loading from 'react-loading-components';

class smallLoading extends Component {

    render() {
        return (
                <DefaultContainer heightDiv="15%" width="100%">
                    {
                        this.props.loaded === 0 ? <Loading type='tail_spin' width={1000} height={100} fill='#f44242' /> : <p  style={{fontFamily: "ElaineSansRegular", textAlign: "center", fontSize: 22, width: '70%', color:"#ff4f00"}}>{this.props.success}</p>
                    }
                </DefaultContainer>
        )
    }
}

export default smallLoading
