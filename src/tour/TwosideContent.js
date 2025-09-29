import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TwosideContent = () => {
  return (
    <div className="container my-5 py-5 px-3 px-md-5 rounded" style={{
      background: 'linear-gradient(to right, #f8fbff, #f3f6fa)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
    }}>
      <div className="row align-items-center text-center text-md-start g-4">

        {/* Left Content */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0" data-aos="fade-up">
            <div className="card-body">
              <h3 className="card-title text-primary mb-3 fw-bold">
                Week At Thiksey Monastery
              </h3>
              <p className="card-text text-muted">
                This 12-storey complex hosts over 500 monks and is considered one of the most beautiful Buddhist monasteries in Ladakh. Learn about Buddhist culture, lifestyle, scriptures, and more.
              </p>
              <a href="#" className="btn btn-outline-primary mt-3 fw-semibold">
                WhatsApp Now for Details
              </a>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="col-md-4 d-flex justify-content-center" data-aos="zoom-in">
          <img
            src="https://jingleholidaybazar.com/images/india-goa-best-beaches-vagator-beach.jpg"
            alt="Goa Beach"
            className="img-fluid rounded shadow border"
            style={{ maxHeight: '280px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0" data-aos="fade-up">
            <div className="card-body">
              <h3 className="card-title text-primary mb-3 fw-bold">
                Week At Goa Beaches
              </h3>
              <p className="card-text text-muted">
                Goa, India’s coastal paradise, is known for its vibrant beaches, relaxed lifestyle, and captivating charm. Perfect for unwinding and water adventures.
              </p>
              <a href="#" className="btn btn-outline-primary mt-3 fw-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TwosideContent;
