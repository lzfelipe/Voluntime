import React, { Component } from 'react'
import { motion } from 'framer-motion'

class ongPage extends Component {

    render() {
        return (
            <motion.div animate={{x: '0vh', opacity: 1}} initial={{x: '100vw', opacity: 0}} transition={{duration: 0.5}} style={{overflowX: 'hidden'}}>
                <h1>{this.props.location.ongName}</h1>
            </motion.div>
        )
    }
}

export default ongPage
