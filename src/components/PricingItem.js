import React from 'react'
import './PricingItem.css'

export default function PricingItem(props) {
  return (
    <div className={`pricing__item text-center ${props.selected && "selected"}`}>
        <span class={`advanced ${!props.advanced && "d-none"}`}>Advanced</span>
        <div className="pricing__item__title">
            <h6>{props.title}</h6>
        </div>
        <div className='pricing__item__details'>
            <div className='pricing__item__price d-flex justify-content-center align-items-center'>
                <h3><sup>$</sup>{props.price}</h3><span> / month</span>
            </div>
            <div className='pricing__item__plans'>
                    {props.plans}
            </div>
        </div>
        
        <div className="pricing__item__footer">
            <button className="footer__button">Buy Now</button>
        </div>
    </div>
  )
}
