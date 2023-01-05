import React from 'react'
import Header from '../components/header'
export default function landing() {
  return (
        <div className='containe-fluid my-5 pb-5 about' id="landing">
            <div className='row me-0'>
                <div className='col-sm-6 offset-sm-3 pt-4 mt-5 d-flex justify-content-center align-items-center'>
                    <div>
                    <h5 className='text-center pb-5 green-text f-700 f-16'>For Better Future</h5>
                    <h2 className='text-center pb-5'>HIGH QUALITY COURSES </h2>
                    <p className='text-center pb-4' style={{color:"#737373"}}>Find the right instructor for you from over 10,000 <br/>teachers</p>
                    <div className='d-flex justify-content-center align-items-center pb-3'>
                        <button className='green-btn'>Get Quote Now</button>
                        <button className='green-btn outlined ms-3'>Learn More</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
