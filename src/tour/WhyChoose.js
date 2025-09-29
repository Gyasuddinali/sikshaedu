import React from "react";
import "./WhyChoose.css"; 
function WhyChoose() {
  const features = [
    {
      title: "Breathtaking Location",
      description: "Surrounded by misty mountains, pine forests, and panoramic valley views.",
    },
    {
      title: "Elegant Accommodation",
      description: "Choose from luxury cottages, valley-view suites, or cozy mountain lodges – all designed with comfort and nature in mind.",
    },
    {
      title: "Delicious Dining",
      description: "Enjoy farm-to-table meals at our in-house restaurant serving authentic Kumaoni, Indian, and continental cuisines.",
    },
    {
      title: "Adventure & Leisure",
      description: "From nature walks, trekking, and bird-watching to yoga sessions and bonfire nights – there's something for every traveler.",
    },
    {
      title: "Warm Hospitality",
      description: "Experience personalized service that reflects the warmth of the hills and the spirit of Uttarakhand.",
    },
  ];

  const activities = [
    "Nature walks & bird watching",
    "Cultural exploration in Almorah",
    "Meditation & yoga retreats",
    "Bonfire evenings under the stars",
  ];

  return (
    <section className="whychoose-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-3">Why Choose <span>PARADISE CLIFF</span></h2>
        <p className="section-subtitle text-center mb-5">
          Discover a place where luxury meets nature. Paradise Cliff isn't just a destination—it's an experience that rejuvenates your soul and inspires your spirit.
        </p>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="feature-card h-100 shadow-sm p-4">
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 className="mt-5 mb-3">Activities You’ll Love</h4>
        <p className="text-muted mb-3">
          Engage your senses and awaken your adventurous side with carefully curated activities designed to connect you with nature and culture.
        </p>

        <ul className="list-group list-group-flush">
          {activities.map((act, idx) => (
            <li className="list-group-item ps-0 border-0" key={idx}>
              <span className="check-icon me-2">✓</span>{act}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChoose;
