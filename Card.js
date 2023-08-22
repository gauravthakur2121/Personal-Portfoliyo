import React from 'react'
import "./Card.css";
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <div>
        <div className='project-card'>
                    <img src={props.imgsrc}
                     alt="image" />
                     <h2 className='project-title'>{props.title}</h2>
                     <div className='pro-details'>
                        <p>{props.Text}</p>
                        <div className='pro-btns'>
                            <NavLink to={props.view} className="bt"><button>VIEW</button></NavLink>
                            <NavLink to="url.com" className="bt"><button>SOURCE</button></NavLink>

                        </div>
                     </div>
                </div>
      
    </div>
  )
}

export default Card
