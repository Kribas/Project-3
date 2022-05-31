import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import './TeamItem.css'

export default function TeamItem(props) {
  return (
    <div className='team__item text-center'>
        <div className='team__image'>
            <img className='img-fluid' src={props.image} alt="Team Image"/>
            <div className='team__contact'>
            <ul>
                <li><Twitter/></li>
                <li><Facebook/></li>
                <li><Instagram/></li>
                <li><LinkedIn/></li>
            </ul>
        </div>
        </div>
        
        <div className='team__description'>
            <h5 className='team__name'>{props.name}</h5>
            <p className='team__title'>{props.title}</p>
        </div>  
    </div>
  )
}
