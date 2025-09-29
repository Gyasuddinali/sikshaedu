
import React from 'react';
import kasar from './destination/Kasar Devi.jpeg'
function AboutSection() {
  return (
    <div className="container mt-5" id="kasar">
      <h1 className=" rounded text-danger" style={{fontFamily:'cursive'}}>KASARDEVI</h1>
      <h2 className=" rounded text-primary text-center mt-3">Images Of Heaven</h2>

      <div className="row mt-4">
        {/* Left: About Section */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h2 className="fw-bold">Soak in the Healthy Climate</h2>
          <p className="text-justify">

Whether you're seeking a romantic escape, a family holiday, or a soul
soothing solo retreat,<strong className='text-primary'>PARADISE CLIFF</strong> is the perfect destination to 
unwind, reconnect, and rejuvenate. We give you the seclusion of the 
mountains without losing touch with modern comforts. Here, mornings begin 
with the songs of birds, days are bathed in the pure mountain breeze, and 
nights are a canvas of countless stars.           </p>

          <img data-aos="fade-up"
            src="https://tse2.mm.bing.net/th/id/OIP.MYm_h0q0II-wN2UrJnrj3wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Main View"
            className="img-fluid rounded mt-3"
            style={{ width: '100%', objectFit: 'cover', maxHeight: '300px' }}
          />
        </div>

        {/* Right: 3 Images */}
        <div className="col-lg-6 col-md-12 d-flex flex-column gap-3">
          <img data-aos="fade-down"
            src="https://static2.tripoto.com/media/filter/nl/img/25072/TripDocument/1531333077_mg_9910_1.jpg"
            alt="Image 1"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
          <img data-aos="flip-up"
          src={kasar}
            alt="Image 2"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
          <img data-aos="flip-right"
            src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/rsz_shutterstock_394361947.jpg"
            alt="Image 3"
            className="img-fluid rounded"
            style={{ objectFit: 'cover', width: '100%', maxHeight: '180px' }}
          />
        </div>
      </div>

      {/* Bottom Section with Overlay */}
      <div className="mt-5 position-relative">
        <img
          src="https://wallpaperaccess.com/full/2416436.jpg"
          alt="Bottom Image"
          className="w-100 rounded"
          style={{
            objectFit: 'cover',
            height: '400px',
            width: '100%',
          }}
        />

        <div
          className="position-absolute text-white p-3 p-sm-4"
          style={{
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '8px',
            maxWidth: '90%',
            width: '100%',
          }}
        >
          <h5 className="fw-bold"> Our Highlights</h5>
          <ul className="mb-0 small">
            <li>Highest hill of Almora — 6500 ft. above sea level</li>
            <li>Just 6 km from Almora town</li>
            <li>Uninterrupted views of Nandadevi, Trishul, and Panchachuli</li>
            <li>Away from the chaos of cities yet close to modern amenities</li>
            <li>Inhabited by Buddhist monks, popular for long stays</li>
            <li>Home to Kasardevi temple, surrounded by dense oak forests</li>
            <li>Excellent public transport to and from Almora</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
