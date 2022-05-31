import React from 'react'
import './Team.css';
import TeamItem from './TeamItem';

export default function Team(props) {
  return (
    <div className='team'>
        <div className='container'>
        <div className='team__title text-center'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <div className='team__body'>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                    <TeamItem name="Walter White" title="Chief Executive Officer" image="/images/team-1.jpg"/>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                    <TeamItem name="Sarah Jhonson" title="Product Manager" image="/images/team-2.jpg"/>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                    <TeamItem name="William Anderson" title="CTO" image="/images/team-3.jpg"/>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                    <TeamItem name="Amanda Jepson" title="Accountant" image="/images/team-4.jpg"/>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}
