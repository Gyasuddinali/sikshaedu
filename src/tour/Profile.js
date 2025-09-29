
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  return (
    <div className="container mt-5"  id="profile">
        <h1 className="fst-italic text-success rounded-pill ps-5 border border-warning">Company Profile</h1>
      <div className="row">
        {/* Left: 3 Smaller Responsive Images */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column gap-3">
            <img
              src="https://th.bing.com/th/id/OIP.kohG1y7ObGG_VZdlWrpu5wHaEo?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Image 1"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <img
              src="https://labukubong.myhomestays.my/uploads/roomtype/7K7GE1614322817.jpg"
              alt="Image 2"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <img
              src="https://funsteria.com/wp-content/uploads/shutterstock_662011525.jpg"
              alt="Image 3"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="col-md-6">
          <h2 className="bg-success  text-center text-white rounded ">The Visionary Promoters</h2>
          <p style={{ textAlign: 'justify' }}>
            AMAFHH Hotels & Resorts Pvt. Ltd. - one of the pioneering companies to
             introduce
             the concept of life amidst nature is a well known name in the field
              of real estate development in the Himalayan hills.</p>



<p className='pt-5 mt-5' style={{ textAlign: 'justify' }}>AMAFHH has already to its credit the success of its previously promoted 
projects that have not just provided material properties to its clients
 but has also built a life long association with them. AMAFHH prides it
  self for its expertises and experience of transforming dreams into 
  realities. The joy and happiness of its satisfied customers.

          </p>
          <p className='mt-4 pt-5' style={{ textAlign: 'justify' }}>
            Paradise Cliff-a unique residential project in the most serene
             surroundings in yet another effort of AMAFHH to provide its 
             occupants a life filled with pure nature. This meticulously 
             planned, elegant arrangement of homes at a strategic location 
             at Kasardevi in Almora
             is an unparalleled concept where living is a joy in itself.
          </p>
          <h5 className='mt-5'>The Promoters</h5>
           {/* <img
              src="https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg"
              alt="Image 3"
              className="img-fluid w-100 rounded"
            //   style={{ maxHeight: '180px', objectFit: 'cover' }}
          style={{
            height: '300px',
            objectFit: 'cover',
            display: 'block'
          }}
            /> */}
        </div>
      </div>

      {/* Bottom Image with Overlay Box */}
      <div className="mt-5 position-relative">
        <img
          src="https://wallpapercave.com/wp/wp6019702.jpg"
          alt="Bottom Image"
          className="w-100 rounded"
          style={{
            height: '400px',
            objectFit: 'cover',
            display: 'block'
          }}
        />

      </div>
    </div>
  );
}

export default Profile;