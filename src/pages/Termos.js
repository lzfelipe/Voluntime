import React, { Component } from 'react'
import { DefaultContainer } from './styles/defaultComponents'
import { Link } from 'react-router-dom'
import backIcon from '../assets/SVG/back.svg'

class Termos extends Component {
    render() {
        return (
            <DefaultContainer style={{textAlign: 'justify', alignContent: "flex-start"}}>

                <DefaultContainer heightDiv="5%" style={{ justifyContent: 'flex-start', paddingTop: 20, paddingBottom: 20 }}>
                    <Link to="/registro">
                        <img src={backIcon} style={{ height: "6vh", paddingLeft: 5}} alt="Voltar" />
                    </Link>
                </DefaultContainer>

                <DefaultContainer heightDiv="fit-content">
                <span style={{color: 'black', width: '90%'}}>1. </span><p style={{fontFamily: "ElaineSansRegular", width: '90%'}}>CLÁUSULA DE RESERVA (Lei 9.610/98 - LEI DE DIREITOS AUTORAIS): Este aplicativofoi publicado e é mantido pelos discentes do 5º semestre, do Curso de Graduação emDesign Digital, da Universidade Anhembi Morumbi, visando a atender às exigências dadisciplina PROJETO INTERDISCIPLINAR: CIBERATIVISMO. Trata-se de uma publicaçãotemporária para propósitos estritamente acadêmicos e sem fins lucrativos. Em atendimentoàs exigências da Lei 9.610/98, do parágrafo 4°, do Artigo 184, do Código Penal, os discentesresponsáveis por esta publicação colocam-se à disposição, por intermédio do e-mail (INSERIR EMAIL), para dirimir quaisquer dúvidas referentes à eventual violação de direitosautorais, comprometendo-se desde já, a retirar do ar, qualquer texto, som ou imagempertencente a autor ou titular que se sinta direta ou indiretamente prejudicado.</p>
                </DefaultContainer>
            </DefaultContainer>
        )
    }
}

export default Termos
