import WorkCard from './WorkCard';
import ProjectCardData from './WorkCardData';
import './WorkCardStyles.css';
import React from 'react';




export default function Work () {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {ProjectCardData.map((val,index)=>{
                return <WorkCard
                key={index}
                imgsrc={val.imgsrc}
                text={val.text}
                title={val.title}
                source={val.source}
                ></WorkCard>
            })}
        </div>
    </div>
  )
}
