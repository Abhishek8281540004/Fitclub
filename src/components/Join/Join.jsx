import React from 'react'
import './Join.css'



function Join() {
  
  return (
 <div className="Join" id="join-us">
    <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
        </div>
    </div>
    <div className="right-j">
        <form  className="email-container" >
            <input type="email" name='uder_email' placeholder='Enter Your Email Address' />
            <button className='btn btn-j'>Join Now</button>
        </form>
    </div>
 </div>
  )
}

export default Join
