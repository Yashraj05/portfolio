import './WorkCardStyles.css';
import React from 'react';
import Amazon from '../assets/amazon-clone.png'
import { NavLink } from 'react-router-dom';


export default function WorkCard ({imgsrc,title,text,source}) {
  return (
   
            <div className='project-card'>
                <img src={imgsrc} alt="amazon" />
                <h2 className='project-title'>{title}</h2>
                <div className='pro-details'>
                    <p>{text}</p>
                    <div className='pro-btns'>
                        
                        <NavLink to={source} className='btn'>Source</NavLink>
                    </div>
                </div>
            </div>
  )
}
