import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../components/WebDevService.css'; // Custom styles if needed

function AboutSection() {
  return (
    <div className="container py-5" id="uttranchal">
      {/* Title Section */}
      <div className="text-center mb-4" data-aos="fade-up">
        <h1 className="display-5 fw-bold text-success">
          Popular International Destinations
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '750px' }}>
          Mother Earth, along with mankind, has co-created some of the most spectacular places on this planet.
          From sprawling cities to breathtaking natural wonders, these global destinations promise unforgettable memories.
        </p>
      </div>

      {/* Image Grid */}
      <div className="row g-4 align-items-stretch">
        {/* Left: Large Feature Image */}
        <div className="col-lg-6" data-aos="fade-right">
          <div className="shadow-sm rounded overflow-hidden h-100">
            <img
              src="https://jingleholidaybazar.com/images/DUBAI1.jpg"
              alt="Dubai"
              className="img-fluid w-100 h-100 object-cover"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right: Two Smaller Images */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          <div className="shadow-sm rounded overflow-hidden" data-aos="zoom-in">
            <img
              src="https://jingleholidaybazar.com/images/caption.jpg"
              alt="Image 1"
              className="img-fluid w-100"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>

          <div className="shadow-sm rounded overflow-hidden" data-aos="zoom-in-up" data-aos-delay="100">
            <img
              src="https://jingleholidaybazar.com/images/download%20(8).jpg"
              alt="Image 2"
              className="img-fluid w-100"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-5" data-aos="fade-up">
        <a href="#all-destinations" className="btn btn-outline-success btn-lg px-4">
          View All Destinations
        </a>
      </div>
    </div>
  );
}

export default AboutSection;
