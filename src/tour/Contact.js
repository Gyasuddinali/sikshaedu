import React from 'react'
import "./root.css";

export default function Contact() {
  return (
    <div>
{/* Contact */}
      <section className="contact-section py-5" id="contact">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2 className='pt-5'>Plan Your Journey</h2>
              <p className="lead">Reach out to start crafting your dream trip.</p>
              <div className="contact-info">
                <div className="contact-item"><i className="fas fa-phone text-primary"></i><span>+91 9199245 536</span></div>
                <div className="contact-item"><i className="fas fa-envelope text-primary"></i><span>tour@paradisecliff.com</span></div>
                <div className="contact-item"><i className="fas fa-map-marker-alt text-primary"></i><span>Siwan, Bihar, India</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="contact-form pt-5">
                <div className="mb-3"><input type="text" className="form-control" placeholder="Your Name" /></div>
                <div className="mb-3"><input type="email" className="form-control" placeholder="Your Email" /></div>
               <div className="mb-3"><input type="destination" className="form-control" placeholder="Your Destination" /></div>

                <div className="mb-3"><textarea rows="4" className="form-control" placeholder="Tell us about your dream trip..."></textarea></div>
                <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>



 {/* Full-Screen Responsive Map Section */}
      <section className="w-100 vh-100">
        <iframe
          title="Paradise Cliff Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.946456342907!2d79.65396761509137!3d29.61917668205425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a53b6e6503b3%3A0xf0f7e75f29b45fc9!2sKasar%20Devi%2C%20Almora%2C%20Uttarakhand%20263601!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-100 h-100 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  )
}
