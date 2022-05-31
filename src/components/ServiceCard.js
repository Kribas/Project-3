import React from 'react'
import './ServiceCard.css'

export default function ServiceCard(props) {
  return (
    <div className='service__card text-center'>
      <div className={`card__body ${props.color}`}>
        <span>{props.icon}</span>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
