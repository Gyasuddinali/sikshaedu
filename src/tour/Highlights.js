


import "./highlight.css"; 
function Highlights() {
  const highlights = [
    "Breathtaking Views –  See Nandadevi, Trishul, Panchachuli from your room",
    "Kasardevi Temple –  A spiritual landmark surrounded by oak forests",
    "Tranquil Retreat –  Inhabited by Buddhist monks; ideal for meditation & long stays",
    "Well Connected – Excellent public transport to & from Almorah",
    "Nature All Around – Oak forests, nature walks, and serene picnic spots",
    "Perfect Location –  Far from the chaos, close to amenities",
  ];

  return (
    <section className="highlights-section">
      <div className="container">
        <h2>Our Highlights</h2>
        <div className="row">
          {highlights.map((hl, idx) => (
            <div key={idx} className="col">
              <div className="icon">✓</div>
              <p id="p1">{hl}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;





