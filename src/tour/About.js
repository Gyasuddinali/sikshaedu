import React from 'react'

export default function About() {
  return (
    <div>

{/* About Section */}
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* <div className="about-image-container">
                <img
                  src="https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg"
                  alt="Explore the World"
                  className="img-fluid rounded shadow-lg about-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-globe fa-3x"></i>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6">
              <h2 className="section-title pt-5" style={{color:'#d4af37'}}>About The Visionary Promoters</h2>
              <p className="lead text-dark">
AMAFHH Hotels & Resorts Pvt. Ltd. - one of the pioneering companies to introduce the concept of life amidst nature is a well known name in the field of real estate development in the Himalayan hills.
AMAFHH has already to its credit the success of its previously promoted projects that have not just provided material properties to its clients but has also built a life long association with them. AMAFHH prides it self for its expertises and experience of transforming dreams into realities. The joy and happiness of its satisfied customers

              </p>
              <div className="features">
                <div className="feature-item">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span className="text-dark">Curated Destinations</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-users text-primary"></i>
                  <span className="text-dark">Local Guides</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-hiking text-primary"></i>
                  <span className="text-dark">Adventure Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
