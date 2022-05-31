import { FormatQuote } from '@material-ui/icons'
import React from 'react'
import './CarouselItem.css'

export default function CarouselItem(props) {
  return (
    <div className='carousel__item'>
        <div className='testimonial__text'>
        <FormatQuote className='testimonial__icon'/>
        <p>{props.testimonial}</p>
        </div>
        <img className='item__image' src={props.image} alt="Testimonial Image"/>
        <h5>{props.name}</h5>
        <h3 className='item__title'>{props.title}</h3>
    </div>
  )
}
