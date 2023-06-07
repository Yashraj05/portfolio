import './HeroImgStyles.css';
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg';
import { Link, NavLink } from 'react-router-dom';
export default function HeroImg() {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='intro-img' src={IntroImg} alt='introImg '></img>
        </div>
        <div className='content'>
          <h1>Software Developer</h1>
          <div>
            <Link to='/portfolio/project' className='btn'>Projects</Link>
            <NavLink to="https://drive.google.com/file/d/18YJ3IC6-mDrD1jqVdwBElMYiNuqny50M/view?usp=sharing"className='btn'>Resume</NavLink>        
          </div>
        </div>
    </div>
  )
}
