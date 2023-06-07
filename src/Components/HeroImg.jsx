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
          <h3>Hello I'm</h3>
          <h1>Yashraj Singh Mandloi</h1>
          <h2 className='software'>Software Developer</h2>
          <div>
            <Link to='/portfolio/project' className='btn'>Projects</Link>
            <NavLink to="https://drive.google.com/file/d/18YJ3IC6-mDrD1jqVdwBElMYiNuqny50M/view?usp=sharing"className='btn'>Resume</NavLink>        
          </div>
        </div>
    </div>
  )
}
