import React from 'react'
import './Clients.css'



function Clients() {
  return (
    <div className='clients text-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                    <div className='client'>
                        <img className='img-fluid' src='/images/Client1.png' alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6  col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src='/images/Client2.png' alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6  col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src='/images/Client3.png' alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6  col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src='/images/Client4.png' alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src='/images/Client5.png' alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src='/images/Client6.png' alt="Client Image"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Clients