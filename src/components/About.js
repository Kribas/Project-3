
import { Newspaper, ViewInAr } from '@mui/icons-material'
import './About.css'
import React from 'react'


export default function About() {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='about__image'>
                        <img className='img-fluid' src="/images/about.jpg" alt="About Image"/>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='about__detail'>
                        <h2>Voluptatem dignissimos provident quasi</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                        <div className='about__detail__inner'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                    <div className='inner__item'>
                                       <Newspaper style={{fontSize: '48px', color: '#8b97b3'}}/>
                                       <h5>Corporis voluptates sit</h5>
                                       <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6'>
                                <div className='inner__item'>
                                        <ViewInAr style={{fontSize: '48px', color: '#8b97b3'}}/>
                                       <h5>Ullamco laboris nisi</h5>
                                       <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
