import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import "./TwoImage.css"; 

const TwoImage = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold text-primary">Featured Tours in India</h1>
        <p className="lead text-muted mt-3 mx-auto" style={{ maxWidth: "750px" }}>
          India is a vibrant land of stunning contrasts — a fusion of ancient heritage and modern wonders.
          Explore its vast landscapes, vibrant cultures, and unforgettable experiences.
        </p>
      </div>

      <div className="row gy-5 align-items-center">
        {/* LEFT: Dual Images */}
        <div className="col-lg-6 d-flex flex-column flex-md-row gap-3" data-aos="zoom-in">
          <div className="w-100 h-100">
            <img
              src="https://jingleholidaybazar.com/images/Leh03.jpg"
              alt="Leh"
              className="img-fluid rounded shadow-sm mb-3"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <img
              src="https://jingleholidaybazar.com/images/Solang-Valley.jpg"
              alt="Solang Valley"
              className="img-fluid rounded shadow-sm"
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="col-lg-6" data-aos="fade-left">
          <h3 className="text-info mb-3">Week at Solang Valley, Manali</h3>
          <p className="text-muted fs-5">
            Nestled at 8400 feet above sea level, Solang Nala offers a perfect blend of scenic views and adventure sports.
            A short drive from Manali, it's a must-visit destination for snow lovers and thrill seekers alike.
          </p>
          <a href="#" className="btn btn-outline-primary mt-3 px-4">
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwoImage;
