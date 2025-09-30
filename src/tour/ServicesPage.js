
import React, { useEffect, useState } from 'react';
import './ServicesPage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: 'bi-house-door',
    title: 'Jingle Holiday Bazar Homestays',
    sub: 'Book Villas, Apartments And Resorts',
    description: 'Jingle Holiday Bazar.com ventured into Homestays in India in 2015. If you are looking for a holiday with a difference and want to savour local flavours, we bring cozy villas, apartments, and resorts just for you.',
    link: '/',
  },
  {
    icon: 'bi-building',
    title: 'Jingle Holiday Bazar Hotels',
    sub: 'Book Hotels with Jingle Holiday Bazar.com',
    description: 'Jingle Holiday Bazar is back in the post-pandemic world with a bouquet of hotels across India. Be it leisure or business, we ensure comfort at a great value.',
    link: '/',
  },
  {
    icon: 'bi-airplane-engines',
    title: 'Flight Bookings',
    sub: 'Book Flights at the Best Rates',
    description: 'Book domestic and international flights easily with us. Whether for business or leisure, we help you find the best deals and a smooth booking experience.',
    link: '/',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-wrapper py-5 bg-light">
      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-up">
        <h1 className="display-5 fw-bold text-primary">Our Services</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
          At Jingle Holiday Bazar, we ensure you save on every trip with unbeatable prices on flights,
          hotels, and tours. Enjoy reliable service and unforgettable experiences.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className="row g-4">
          {services.map(({ icon, title, sub, description, link }, idx) => (
            <div key={idx} className="col-md-4" data-aos="zoom-in">
              <div className="card h-100 shadow-sm border-0 service-card-modern p-4">
                <div className="text-center mb-3">
                  <i className={`bi ${icon} text-primary`} style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h5 className="fw-bold text-dark text-center">{title}</h5>
                <p className="text-secondary text-center small mb-2">{sub}</p>
                <p className="text-muted small">{description}</p>
                <div className="text-center mt-3">
                  <a href={link} className="btn btn-outline-primary btn-sm px-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
