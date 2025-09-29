import React from 'react';

const Footer = () => {
const bg={
  background:'blue'
  // background:'linear-gradient(to right,#3498db 50%,#e74c3c 50%'
}
  return (
    <footer className="bg-dark text-light pt-5 pb-4"  style={bg}>
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Jingle Holiday Bazar</h5>
            <p>Travel with us from here to anywhere...</p>
            <p><strong>Phone:</strong><br />
              +91 8506922777 / +91 8506944777
            </p>
            <p>
              jingleholidaybazar@gmail.com<br />
              thejingleholidaybazar@gmail.com
            </p>
            <p>24/7 Dedicated Customer Support</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog List</a></li>
              <li><a href="#" className="text-light text-decoration-none">Destinations</a></li>
              <li><a href="#" className="text-light text-decoration-none">Hotels</a></li>
              <li><a href="#" className="text-light text-decoration-none">Gallery</a></li>
            </ul>
          </div>

          {/* Domestic Packages */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Domestic</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Uttarakhand</a></li>
              <li><a href="#" className="text-light text-decoration-none">Mumbai</a></li>
              <li><a href="#" className="text-light text-decoration-none">Ladakh</a></li>
              <li><a href="#" className="text-light text-decoration-none">Meghalaya</a></li>
              <li><a href="#" className="text-light text-decoration-none">North East India</a></li>
              <li><a href="#" className="text-light text-decoration-none">Rajasthan</a></li>
            </ul>
          </div>

          {/* International Packages */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">International</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Maldives</a></li>
              <li><a href="#" className="text-light text-decoration-none">Singapore</a></li>
              <li><a href="#" className="text-light text-decoration-none">Switzerland</a></li>
              <li><a href="#" className="text-light text-decoration-none">Saudi Arabia</a></li>
              <li><a href="#" className="text-light text-decoration-none">Thailand</a></li>
              <li><a href="#" className="text-light text-decoration-none">Dubai</a></li>
            </ul>
          </div>

          {/* Yatra Packages */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Yatra Packages</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Mata Vaishno</a></li>
              <li><a href="#" className="text-light text-decoration-none">Kedarnath</a></li>
              <li><a href="#" className="text-light text-decoration-none">Badrinath</a></li>
              <li><a href="#" className="text-light text-decoration-none">Char Dham Yatra</a></li>
              <li><a href="#" className="text-light text-decoration-none">Ramayana Yatra</a></li>
              <li><a href="#" className="text-light text-decoration-none">9 Devi Yatra</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <hr className="bg-light" />
          <p className="mb-0">© {new Date().getFullYear()} Jingle Holiday Bazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
