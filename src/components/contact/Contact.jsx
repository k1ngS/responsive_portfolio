import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="sectionTitle">Get In Touch</h2>

      <div className="contactContainer grid">
        <div className="contactInfo">
          <h3 className="contactTitle">
            Let's talk about everything!
          </h3>
          <p className="contactDetails">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form action="" className="contactForm">
          <div className="contactForm-group">
            <div className="contactForm-div">
              <input type="text" className="contactForm-input" placeholder='Insert your name' />
            </div>

            <div className="contactForm-div">
              <input type="email" className="contactForm-input" placeholder='Insert your email' />
            </div>
          </div>

          <div className="contactForm-div">
            <input type="text" className="contactForm-input" placeholder='Insert your subject' />
          </div>

          <div className="contactForm-div contactForm-area">
            <textarea name="" id="" cols="30" rows="10"
              className='contactForm-input' placeholder='Write your message'></textarea>
          </div>

          <button className='btn'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact