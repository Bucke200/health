import React from 'react'
import "./Contact.css"

function AboutUs() {
  return (
    <>
      <div className='contactcontainer' >
        <h1 style={{ margin: '0px', padding: '25px', fontSize: '70px', color: 'white' }}>
          About Us
        </h1>
         </div>

      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{padding:'40px', width: "90%", display: 'flex', justifyContent: 'center', gap: '10%' }}>
          <div>
            <h1>
              Who We Are
            </h1>
            <p>
              Welcome to HealthUP, a student-led initiative from DSATM College dedicated to transforming mental health care. We're committed to creating a supportive environment where everyone can access virtual therapy sessions, resources, workshops, and online communities to address their mental health needs.
            </p>
            <p>
              At HealthUP, confidentiality and personalized care are our top priorities. We strive to make mental health services accessible and affordable for everyone. Join us in prioritizing your well-being and take the first step towards a healthier, balanced life. Remember, you're not alone—we're here to support you every step of the way.
            </p>
          </div>
          <div style={{padding:'10px'}}>
            <img src="https://healthup2.odoo.com/web/image/website.s_text_image_default_image" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs