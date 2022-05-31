import React from 'react'
import { motion } from 'framer-motion'


export default function PortfolioItem(props) {
  return (
    <motion.div layout 
    animate = {{opacity: 1, scale: 1}}
    initial = {{opacity: 0, scale: 0}}
    exit = {{opacity: 0, scale: 0}}
    >
        <img src={props.image} alt="Item Image"/>
    </motion.div>
  )
}
