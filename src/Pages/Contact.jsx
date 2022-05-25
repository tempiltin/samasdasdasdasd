import React from 'react'
import ContactCard from '../Components/ContactForCard/ContactCard'
import MailPost from '../Components/ContactForCard/MailPost'

const Contact = () => {
  return (
    <header className="contact ptt">
        <div className="container">
          <div className="inside-hero-one">
              <div className="container">
                  <h2 className="page-title  font-recoleta">Get in Touch</h2>
                  <p>Get our all info and also can message us directly from here</p>
              </div>
          </div>
          <ContactCard/>
          <hr />
          <MailPost />
        </div>
    </header>
  )
}

export default Contact