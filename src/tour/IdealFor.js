import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";

function IdealFor() {
  const types = [
    {
      label: "Nature Lovers",
      image:
        "https://www.tomorrowsworldtoday.com/wp-content/uploads/2022/02/Nature-Enthusiast-Travel-Tips-Outdoors.jpg",
    },
    {
      label: "Honeymooners",
      image: "https://wallpapercave.com/wp/wp3736264.jpg",
    },
    {
      label: "Writers & Artists",
      image:
        "https://cdn2.wanderlust.co.uk/media/1021/dreamstime_l_74313148.jpg",
    },
    {
      label: "Weekend Getaways",
      image:
        "https://www.wanderlustmovement.org/wp-content/uploads/2018/10/Kagga-Kamma-Nature-Reserve-weekend-getaway-from-cape-town-1440x811.jpg",
    },
    {
      label: "Corporate Retreats",
      image:
        "https://assets-global.website-files.com/5c729f15fd0819dbaf8e66c6/638e5abfb5884073203d791d_Mount-Lofty-House%20(1).jpeg",
    },
  ];

  return (
    <div className="container-fluid my-5 px-3 px-md-5 ideal-slider">
      {/* <h2
        className="text-center py-3 mb-4 text-white"
        style={{ backgroundColor: "#0b3d2e" }}
      >
        Ideal For
      </h2> */}
<h2 style={{fontSize:'2.75rem', textAlign:'center',marginBottom:'3rem',fontWeight:'700',letterSpacing:'1.2px',color:'#0b3d2e' }}>
Ideal For      </h2>
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
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <span class="${className} custom-bullet" style="background-image:url(${types[index].image});"></span>
            `;
          },
        }}
      >
        {types.map((type, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 shadow-sm h-100 slider-card">
              <img
                src={type.image}
                alt={`Ideal for ${type.label}`}
                className="img-fluid rounded-top slider-img"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{type.label}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}
      <div className="custom-pagination mt-4 d-flex justify-content-center"></div>
    </div>
  );
}

export default IdealFor;
