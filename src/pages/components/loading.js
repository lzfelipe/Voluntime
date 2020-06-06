import React, { Component } from 'react'
import { DefaultContainer } from '../styles/defaultComponents'
import Loading from 'react-loading-components';

class loading extends Component {
    render() {
        return (
            <DefaultContainer>
                <Loading type='three_dots' width={100} height={100} fill='#ff4f00' />
            </DefaultContainer>
        )
    }
}

export default loading
