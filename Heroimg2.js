import React from 'react'
import "./Heroimg2styles.css";

 function Heroimg2(props){
  return (
    <div>
        <div className="hero-img text-white">
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg2
