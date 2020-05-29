import React, { Component } from 'react'


import {DefaultContainer, FilterRadios} from '../styles/defaultComponents'

class filtersMenu extends Component {
    render() {
        return (
            <DefaultContainer heightDiv="150px" widthDiv="100%" >
                <DefaultContainer heightDiv="100%" style={{alignContent: 'flex-start'}}>
                        <FilterRadios style={{display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                            {this.props.children}
                        </FilterRadios>
                </DefaultContainer>
            </DefaultContainer>
)
    }
}

export default filtersMenu
