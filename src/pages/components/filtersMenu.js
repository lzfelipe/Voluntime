import React, { Component } from 'react'


import {DefaultContainer, FilterRadios} from '../styles/defaultComponents'

class filtersMenu extends Component {
    render() {
        return (
            <DefaultContainer heightDiv="150px" widthDiv="100%" >
                <DefaultContainer heightDiv="100%" style={{alignContent: 'flex-start'}}>
                        <FilterRadios style={{display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                            <label><input type="radio"  name="toggle"/><span>Menor distância</span></label>
                            <label><input type="radio"  name="toggle"/><span>Animais</span></label>
                            <label><input type="radio"  name="toggle"/><span>Meio Ambiente</span></label>
                            <label><input type="radio"  name="toggle"/><span>Infantil</span></label>
                            <label><input type="radio"  name="toggle"/><span>Idosos</span></label>
                            <label><input type="radio"  name="toggle"/><span>Alimento</span></label>
                            <label><input type="radio"  name="toggle"/><span>Funciona de manhã</span></label>
                            <label><input type="radio"  name="toggle"/><span>Funciona de tarde</span></label>
                            <label><input type="radio"  name="toggle"/><span>Funciona de noite</span></label>
                        </FilterRadios>
                </DefaultContainer>
            </DefaultContainer>
)
    }
}

export default filtersMenu
