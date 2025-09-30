








import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [selectedRegion, setSelectedRegion] = useState('NORTH INDIA');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const regionData = {
    'NORTH INDIA': [
      { title: 'New Delhi', img: 'https://jingleholidaybazar.com/images/Red-Fort.jpg' },
      { title: 'Shimla', img: 'https://jingleholidaybazar.com/images/Shimla1.jpg' },
      { title: 'Agra', img: 'https://jingleholidaybazar.com/images/Taj-mahal.jpg' },
      { title: 'Manali', img: 'https://jingleholidaybazar.com/images/Manali1-1.jpg' },
    ],
    'EAST INDIA': [
      { title: 'Kaziranga National Park', img: 'https://jingleholidaybazar.com/images/Ziro-Valley.jpg' },
      { title: 'Tsomgo Lake', img: 'https://jingleholidaybazar.com/images/Goechala.jpg' },
      { title: 'Ziro Valley', img: 'https://jingleholidaybazar.com/images/Ziro-Valley.jpg' },
      { title: 'Goechala', img: 'https://jingleholidaybazar.com/images/Goechala.jpg' },
    ],
    'WEST INDIA': [
      { title: 'Goa', img: 'https://jingleholidaybazar.com/images/Goa-beaches.jpg' },
      { title: 'Mumbai', img: 'https://jingleholidaybazar.com/images/2021006-1895800595.jpg' },
      { title: 'Mahabaleshwar', img: 'https://jingleholidaybazar.com/images/1539784236_1514009275_mahabaleshwar.jpg' },
      { title: 'Panchgani', img: 'https://jingleholidaybazar.com/images/Sydney_point_panchghani.jpg' },
    ],
    'SOUTH INDIA': [
      { title: 'Bangalore', img: 'https://jingleholidaybazar.com/images/Bangalore-Karnataka-1.jpg' },
      { title: 'Coorg', img: 'https://jingleholidaybazar.com/images/Coorg-1.jpg' },
      { title: 'Chennai', img: 'https://jingleholidaybazar.com/images/Chennai-1.jpg' },
      { title: 'Gokarna', img: 'https://jingleholidaybazar.com/images/Gokarna-1.jpg' },
    ],
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-uppercase">Explore Our Destinations</h1>
        <p className="text-muted">All Over India — Destination Gallery by Jingle Holiday Bazar</p>
      </div>

      {/* Tabs */}
      <ul className="nav nav-pills justify-content-center mb-4 flex-wrap gap-2" role="tablist">
        {Object.keys(regionData).map((region, idx) => (
          <li className="nav-item" key={idx}>
            <button
              className={`nav-link px-4 py-2 ${selectedRegion === region ? 'active' : ''}`}
              style={{ borderRadius: '20px', fontWeight: 500 }}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          </li>
        ))}
      </ul>

      {/* Gallery Cards */}
      <div className="row">
        {regionData[selectedRegion].map((place, index) => (
          <div
            className="col-sm-6 col-md-4 col-lg-3 mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card gallery-card h-100 shadow-sm border-0">
              <img
                src={place.img}
                alt={place.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-0">{place.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
