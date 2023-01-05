import React from 'react'

export default function header(props) {
    const handleChooseMenu=(txt)=>{
        props.FromHeader(txt)
    }
    return (
        <div classNameName='m-0 mb-5 position-fixed'>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent navbar-fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand logo f-700 f-24" href="#"><img src="/two-leaves.png"/></a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item pb-0">
                                <a className="nav-link active f-700 f-14 mute-text" aria-current="page" onClick={()=>handleChooseMenu("landing")}>Home</a>
                            </li>
                            <li className="nav-item pb-0">
                                <a className="nav-link active f-700 f-14 mute-text" aria-current="page" onClick={()=>handleChooseMenu("packg")}>Product</a>
                            </li>
                            <li className="nav-item pb-0">
                                <a className="nav-link active f-700 f-14 mute-text" aria-current="page" onClick={()=>handleChooseMenu("pricing")}>Pricing</a>
                            </li>
                            <li className="nav-item pb-0">
                                <a className="nav-link active f-700 f-14 mute-text" aria-current="page" onClick={()=>handleChooseMenu("newsletter")}>contact</a>
                            </li>
                        </ul>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h6 className='green-text px-5'>Login</h6>
                        <button className='green-btn text-uppercase'>Join us<img className="ms-2 mb-1" src="/arrow.svg"/></button>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
