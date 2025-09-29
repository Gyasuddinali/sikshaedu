import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import './Attractions.css'
function Attractions() {
  const attractions = [
        { name: "Adventure", distance: "8 km", image: "https://tse1.mm.bing.net/th/id/OIP.edTGeHXkc6CeGz0FQ6hLaAHaE7?w=1280&h=853&rs=1&pid=ImgDetMain&o=7&rm=3" },

    // { name: "Koshi", distance: "7 km", image: "https://s3.envato.com/files/c8a50d08-c1d7-47a3-a821-2f1f8d0ff030/inline_image_preview.jpg" },
    { name: "Trekking Trail", distance: "18 km", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/trekking-annapurnas-nepal.jpg" },
    // { name: "Char Dham Temple", distance: "10 km", image: "https://www.templeduniya.com/wp-content/uploads/elementor/thumbs/kedarnath-temple-q9mr4xuzs09smdv41k7ug2ri3fezii51ezed2yv98o.jpg" },
  ];

  return (
    <div className="container-fluid my-5 px-3 px-md-5 ideal-slider">
      {/* <h2 className="text-center py-3 mb-4 text-white" style={{ backgroundColor: "#0b3d2e" }}>
        Nearby Attractions
      </h2> */}
<h2 style={{fontSize:'2.75rem', textAlign:'center',marginBottom:'3rem',fontWeight:'700',letterSpacing:'1.2px',color:'#0b3d2e' }}>
        Nearby Attractions
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}

        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }} 
      >
        {attractions.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 shadow-sm h-100">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid rounded-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">Distance: {item.distance}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Attractions;
