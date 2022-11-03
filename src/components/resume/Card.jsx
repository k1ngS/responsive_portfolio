import React from 'react';

const Card = (props) => {
  return (
    <div className="timelineItem">
      <i className={props.icon}></i>
      <span className="timelineDate">{props.year}</span>
      <h3 className="timelineTitle">{props.title}</h3>
      <p className="timelineText">{props.desc}</p>
    </div>
  )
}

export default Card