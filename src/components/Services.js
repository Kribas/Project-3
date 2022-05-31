import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import { AccountBalance, DesktopWindows, FilterNone, Speed, SportsBasketball } from '@material-ui/icons'
import { StickyNote2 } from '@mui/icons-material'

export default function Services(props) {
  return (
      <div className='services'>
        <div className='container'>
        <div className='services__title text-center'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <div className='row mt-5'>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                <ServiceCard color="blue" icon = {<SportsBasketball/>} title="Lorem Ipsum" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            </div> 
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <ServiceCard color="orange"  icon = {<StickyNote2/>} title="Sed Perspiciatis" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
            </div> 
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <ServiceCard color="pink"  icon = {<Speed/>} title="Magni Dolores" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"/>
            </div> 

        </div>
        <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <ServiceCard color="yellow"  icon = {<FilterNone/>} title="Nemo Enim" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>
            </div> 
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <ServiceCard color="red"  icon = {<DesktopWindows/>} title="Dele Cardo" description="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"/>

            </div> 
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
            <ServiceCard color="green"  icon = {<AccountBalance/>} title="Divera Don" description="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"/>
            </div> 

        </div>
    </div>
      </div>
    
  )
}
