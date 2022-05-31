import React from 'react'
import './CallAction.css'

export default function CallAction(props) {
  return (
    <div className='call__action text-center'>
        <div className='container'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button className='call__action__button'>Call To Action</button>
        </div>
    </div>
  )
}
