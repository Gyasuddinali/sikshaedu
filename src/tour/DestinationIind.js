import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './MountainRom.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function MountainRom() {
  return (
    <div className="container py-5" id="almora">
      {/* Title */}
      <div className="text-center mb-4" data-aos="fade-up">
        <h1 className="display-5 fw-bold text-primary">
          Popular Destinations in India
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '750px' }}>
          India is a vibrant land of startling contrasts where the traditional meets the modern. With a rich cultural
          heritage and centuries of diverse influences, India offers travelers an unforgettable experience at every turn.
        </p>
      </div>

      {/* Content Row */}
      <div className="row g-4 align-items-stretch">
        {/* Left: Single Large Image */}
        <div className="col-lg-6" data-aos="fade-right">
          <div className="h-100 shadow-sm rounded overflow-hidden">
            <img
              src="https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg"
              alt="Jallianwala Bagh"
              className="img-fluid w-100 h-100 object-cover"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right: Grid of 2 Smaller Images */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          <div className="shadow-sm rounded overflow-hidden" data-aos="zoom-in-up">
            <img
              src="https://jingleholidaybazar.com/images/Gangtok.jpg"
              alt="Gangtok"
              className="img-fluid w-100"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>

          <div className="shadow-sm rounded overflow-hidden" data-aos="zoom-in-up" data-aos-delay="100">
            <img
              src="https://jingleholidaybazar.com/images/Taj-mahal.jpg"
              alt="Taj Mahal"
              className="img-fluid w-100"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MountainRom;
