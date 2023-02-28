import React from 'react'
import './certiDesign.css'
import Logo from "../images/logo.png"
import QR from '../images/qr.png'
const certiDesign = () => {
  return (
    <div className='all-certi'>
    <div className='certi'>
    <div className='certi-content'>
        <div className='certi-head'>
          <h5 className='head-content'>CERTIFICATE OF <br/> <h1 className='head-2'>INTERNSHIP</h1></h5>
          
          <img src={Logo} className='certi-logo' alt=''/>
        </div>
        <div className='certi-mid'>
            <h1>This Certificate is presented to</h1>
            <p className='name'>HARSH KANSAL</p>
            <p className='details'>For completing the "<b>React Developer</b>" Internship <br/>
            from 1 February 2023 to 20 February 2023. <br/>
            We appreciate his work and contribution
            </p>
            
        </div>

        <div className='certi-footer'>
          <hr className='line'/>
          <div className='desig-all'>
          <h3 className='desig-name'>Prasenjeet</h3>
          <h6 className='desig'>CEO & MD</h6>
          <div className='certi-right'>
              <img className='qr' src={QR} alt=''/>
              <p>*Scan QR for Verification</p>
            </div>
          </div>
        </div>
        
    </div>
    
    </div>
    <button className='certi-btn'>Print</button>
    </div>
  )
}

export default certiDesign