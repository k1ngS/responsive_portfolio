import React from 'react';

const AboutBox = () => {
  return (
    <div className="aboutBoxes grid">
      <div className="aboutBox">
        <i className="aboutIcon icon-fire"></i>
        <div>
          <h3 className="aboutTitle">198</h3>
          <span className="aboutSubtitle">Project Completed</span>
        </div>
      </div>

      <div className="aboutBox">
        <i className="aboutIcon icon-cup"></i>
        <div>
          <h3 className="aboutTitle">5670</h3>
          <span className="aboutSubtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="aboutBox">
        <i className="aboutIcon icon-people"></i>
        <div>
          <h3 className="aboutTitle">427</h3>
          <span className="aboutSubtitle">Satisfied clients</span>
        </div>
      </div>

      <div className="aboutBox">
        <i className="aboutIcon icon-badge"></i>
        <div>
          <h3 className="aboutTitle">35</h3>
          <span className="aboutSubtitle">Nominees winner</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox