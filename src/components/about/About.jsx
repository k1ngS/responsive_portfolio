import React from 'react'
import './about.css'
import AboutMe from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="sectionTitle">About Me</h2>

      <div className="aboutContainer grid">
        <img src={AboutMe} alt="about img" className="aboutImg" />

        <div className="aboutData grid">
          <div className="aboutInfo">
            <p className="aboutDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat.
            </p>
            <a href="#" className="btn">Download CV</a>
          </div>

          <div className="aboutSkills grid">
            <div className="skillsData">
              <div className="skillsTitles">
                <h3 className="skillsName">Lorem Ipsum</h3>
                <span className="skillsNumber">90%</span>
              </div>

              <div className="skillsBar">
                <span className="skillsPercentage skill1"></span>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitles">
                <h3 className="skillsName">Lorem Ipsum</h3>
                <span className="skillsNumber">80%</span>
              </div>

              <div className="skillsBar">
                <span className="skillsPercentage skill2"></span>
              </div>
            </div>

            <div className="skillsData">
              <div className="skillsTitles">
                <h3 className="skillsName">Lorem Ipsum</h3>
                <span className="skillsNumber">60%</span>
              </div>

              <div className="skillsBar">
                <span className="skillsPercentage skill3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About