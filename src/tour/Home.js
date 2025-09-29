import { useEffect, useState } from "react";
import "./root.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import HeroSection from "./HeroSection";

function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Tour & Travel categories and items
  const portfolioItems = [
    { id: 1, category: "adventure", title: "Mountain Trekking", description: "Explore breathtaking mountain trails and panoramic views.", image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/mountain-climbing-1990991_1280.jpg", size: "large" },
    { id: 2, category: "culture", title: "Local Markets", description: "Vibrant street markets with local crafts and cuisine.", image: "https://cdn.pixabay.com/photo/2018/01/31/07/59/market-3124037_1280.jpg", size: "medium" },
    { id: 3, category: "nature", title: "Serene Beach Escape", description: "Unwind at exotic beaches with golden sands and turquoise waters.", image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/beach-690034_1280.jpg", size: "large" },
    { id: 4, category: "city", title: "City Lights Tour", description: "Experience nightlife and iconic urban landmarks.", image: "https://cdn.pixabay.com/photo/2016/11/18/14/33/architecture-1836478_1280.jpg", size: "medium" },
    { id: 5, category: "heritage", title: "Ancient Monuments", description: "Visit historic landmarks and architectural marvels.", image: "https://cdn.pixabay.com/photo/2015/07/28/22/05/temple-865370_1280.jpg", size: "small" },
    { id: 6, category: "cruise", title: "Luxury Cruise Voyage", description: "Sail through pristine oceans on a luxury liner.", image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/cruise-1990989_1280.jpg", size: "large" },
    { id: 7, category: "wildlife", title: "Jungle Safari", description: "Close encounters with wildlife in natural habitats.", image: "https://cdn.pixabay.com/photo/2016/11/29/10/07/lion-1866531_1280.jpg", size: "medium" },
    { id: 8, category: "hiking", title: "Canyon Hike", description: "Dramatic hikes through grand canyon landscapes.", image: "https://cdn.pixabay.com/photo/2016/06/22/05/36/grand-canyon-1473276_1280.jpg", size: "large" },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterChange = filter => setActiveFilter(filter);

  // Helper to render alternating sections
  const renderAlternatingSections = () => {
    return portfolioItems.map((item, idx) => {
      const isLeft = idx % 2 === 0;
      return (
        <section className="alt-section py-5" key={item.id}>
          <div className="container">
            <div className="row align-items-center">
              {isLeft && (
                <div className="col-md-6">
                  <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
                </div>
              )}
              <div className="col-md-6">
                <h3>{item.title}</h3>
                <p className="lead">{item.description}</p>
              </div>
              {!isLeft && (
                <div className="col-md-6">
                  <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
                </div>
              )}
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>
      <HeroSection />

      {/* Alternating Feature Sections */}
      {renderAlternatingSections()}

      {/* Portfolio Section */}
      <section className="portfolio-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Tours & Experiences</h2>
            <p>Explore our curated selection of tours by category.</p>
          </div>
          {/* Filters */}
          <div className="filter-buttons text-center mb-4">
            {["all","adventure","culture","nature","city","heritage","cruise","wildlife","hiking"].map(cat => (
              <button
                key={cat}
                className={`btn filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="row">
            {filteredItems.map((item, idx) => (
              <div key={item.id} className={`col-lg-${item.size==="large"?"6":item.size==="medium"?"4":"3"} col-md-6 mb-4`}>
                <div className="portfolio-item">
                  <img src={item.image} alt={item.title} className="img-fluid rounded" />
                  <h5 className="mt-2">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>What We Offer</h2>
            <p>Your travel dreams, perfectly curated.</p>
          </div>
          <div className="row g-4">
            {[
              { img: "https://cdn.pixabay.com/photo/2016/10/13/09/06/boracay-1731269_1280.jpg", title: "Island Retreat", desc: "Private beaches & serene resorts." },
              { img: "https://cdn.pixabay.com/photo/2015/11/19/21/11/skier-1056737_1280.jpg", title: "Snow Adventures", desc: "Skiing and snowboarding escapes." },
              { img: "https://cdn.pixabay.com/photo/2018/05/09/20/55/safari-3382230_1280.jpg", title: "Desert Safari", desc: "Sunsets and dune bashing thrills." }
            ].map((srv, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="service-card text-center">
                  <img src={srv.img} alt={srv.title} className="service-icon mb-3 rounded" />
                  <h4>{srv.title}</h4>
                  <p>{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Reviews */}
      <section className="contact-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2>Start Your Adventure</h2>
              <p className="lead">Reach out to plan your next escape with us.</p>
              <div className="contact-info">
                <div className="contact-item"><i className="fas fa-phone text-primary"></i><span>+91 99245 53636</span></div>
                <div className="contact-item"><i className="fas fa-envelope text-primary"></i><span>tour@gmail.com</span></div>
                <div className="contact-item"><i className="fas fa-map-marker-alt text-primary"></i><span>Siwan, Bihar, India</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="contact-form">
                <div className="mb-3"><input type="text" className="form-control" placeholder="Your Name" /></div>
                <div className="mb-3"><input type="email" className="form-control" placeholder="Your Email" /></div>
                <div className="mb-3"><textarea rows="4" className="form-control" placeholder="Tell us about your dream trip..."></textarea></div>
                <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section py-4 text-center">
        <p>&copy; 2025 Travel With Us. All rights reserved.</p>
        <div className="social-links">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
