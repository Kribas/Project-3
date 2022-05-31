import React from 'react'
import './Pricing.css'
import PricingItem from './PricingItem'

export default function Pricing(props) {

    const selected = true;
    const advanced = true;

    const free = <ul><li>Aida dere
    </li>
    <li>Nec feugiat nisl</li>
    <li>Nulla at volutpat dola</li>
    <li style={{color: '#ccc', textDecoration: 'line-through'}}>Pharetra massa</li>
    <li style={{color: '#ccc', textDecoration: 'line-through'}}>Massa ultricies mi</li>
    </ul>

    const business = <ul><li>Aida dere
    </li>
    <li>Nec feugiat nisl</li>
    <li>Nulla at volutpat dola</li>
    <li>Pharetra massa</li>
    <li style={{color: '#ccc', textDecoration: 'line-through'}}>Massa ultricies m</li>
    </ul>

    const developer = <ul><li>Aida dere
        </li>
        <li>Nec feugiat nisl</li>
        <li>Nulla at volutpat dola</li>
        <li>Pharetra massa</li>
        <li>Massa ultricies mi</li>
        </ul>

    const unlimited = <ul><li>Aida dere
    </li>
    <li>Nec feugiat nisl</li>
    <li>Nulla at volutpat dola</li>
    <li>Pharetra massa</li>
    <li>Massa ultricies mi</li>
    </ul>

  return (
    <div className='pricing'>
        <div className='container'>
            <div className='pricing__title text-center'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

            <div className='pricing__body'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <PricingItem title="Free" price="0" plans={free}/>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <PricingItem title="Business" price="19" plans={business} selected={selected}/>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <PricingItem title="Developer" price="29" plans={developer}/>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <PricingItem title="Ultimate" price="49" plans={unlimited} advanced={advanced}/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
