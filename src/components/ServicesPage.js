// import React, { useEffect, useState } from 'react';
// import './ServicesPage.css';

// import { FaHome } from 'react-icons/fa';

// const services = [
  
//   {    icon:'bi bi-house',

//     title: 'Jingle Holiday Bazar Homestays',
//     sub:'Book Villas, Apartments And Resorts',
//     description: 'Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer',
//     link: '/',
//   },
//   {
//      icon: 'bi bi-building',
//     title: 'Jingle Holiday Bazar Hotels',
//         sub:'Book Hotels with Jingle Holiday Bazar.com',

//     description: 'We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online',
//     link: '/',
//   },
//   {
//     icon: 'bi bi-airplane',
//     title: 'Jingle Holiday Bazar Hotels',
//             sub:'Book Hotels with Jingle Holiday Bazar.com',

//     description: 'Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step',
//     link: '/',
//   },
  
// ];

// export default function ServicesPage() {
//   const [animate, setAnimate] = useState(false);
// const [selectedService, setSelectedService] = useState(null);
//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   return (
//     <div className={`services-container ${animate ? 'fade-in' : ''}`}>
//       {/* Hero Section */}
//       <section className="services-hero">
//         <h1 >OUR SERVICES</h1>
//         <p>
          
// At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday
// booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budge
//         </p>
//       </section>

//       {/* Services Grid */}
//       <section className="services-grid">
//         {services.map(({ icon, title, description, link,sub }, idx) => (
//           <div key={idx} className="service-card" data-aos="fade-down">
//             <i className= {`${icon}  text-success fs-1`}></i>
//             <h3>{title}</h3>
//             <h5> {sub}</h5>
//             <p>{description}</p>
//             <a href={link} className="btn btn-outline-primary btn-learn">
//               Learn More
//             </a>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }






import React, { useEffect, useState } from 'react';
import './ServicesPage.css'; // You’ll update this too

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
