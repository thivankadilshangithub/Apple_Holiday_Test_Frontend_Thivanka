import React from 'react'
import "../App.css";

const About = () => {
  return (
    <div
    class="container container2 text-center"
    style={{ boxSizing: "border-box" }}
  >
    <div class="row mt-10" style={{ height: "100vh" }}>
      <div class="col-6 leftabout">
      <h3 className="welcomeabout">About Us ...</h3>
      <p className='contentabout'>We are dedicated to providing innovative solutions for student management. 
        Our mission is to make education accessible and efficient through cutting-edge 
        technology and user-friendly interfaces.</p>
      </div>
      <div class="col-6 rightabout">
        <img
          src="https://c1.wallpaperflare.com/preview/477/613/306/contact-us-communication-email-phone.jpg"
          alt="Image"
        />
      </div>
    </div>
  </div>
  )
}

export default About
