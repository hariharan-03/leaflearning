import React from 'react'

export default function footer() {
  return (
    <>
    <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <h5 className='f-700 f-16'>Company Info</h5>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='col-md-2'>
            <h5 className='f-700 f-16'>Legal</h5>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='col-md-2'>
            <h5 className='f-700 f-16'>Features</h5>
              <ul>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div className='col-md-2'>
            <h5 className='f-700 f-16'>Resources</h5>
              <ul>
                <li>IOS & Android</li>
                <li>Watch a demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div className='col-md-4'>
                <h5 className='f-700 f-16'>Get in touch</h5>
                <ul>
                  <li><img src="/phone-icon.svg"/>(480) 555-0103</li>
                  <li><img src="/map-icon.svg"/>4517 Washington Ave. Manchester,Kentucky 39495</li>
                  <li><img src="/mail-icon.svg"/>debra.holt@example.com</li>
                </ul>
            </div>
          </div>
        </div>
        <div className='container-fluid bottom p-3'>
        <div className='row'>
            <div className='col-md-9 m-auto mb-4 mb-md-0'><h6 className='f-700 f-14 ms-md-5 ps-md-5 mb-0'>Made With Love By Figmaland All Right Reserved </h6></div>
            <div className='col-md-3 m-auto'>
              <ul className='d-flex'>
                <li className='pb-lg-0'><img src="/facebook-icon.svg"/></li>
                <li className='pb-lg-0'><img src="/insta-icon.svg"/></li>
                <li className='pb-lg-0'><img src="/twitter-icon.svg"/></li>
              </ul>
            </div>
          </div>
        </div>
        </>
  )
}
