// src/components/Booking.js
import React from "react";

function Booking() {
  return (
    <section className="container py-5 text-center">
      <h2>Book Your Stay Today!</h2>
      <p>Let the mountains welcome you with open arms.</p>
      <p className="fst-italic">
        "Come for the view. Stay for the experience."
      </p>
      <div className="mt-3">
        <p>📞 Call: <strong>[Phone Number]</strong></p>
        <p>🌐 Visit: <a href="#">[Website URL]</a></p>
        <p>📍 Location: <a href="#">[Google Maps Link]</a></p>
      </div>
    </section>
  );
}

export default Booking;
