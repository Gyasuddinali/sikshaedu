// // src/components/HeroSection.jsx

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// import './HeadSlider.css';

// const images = [
//   'https://jingleholidaybazar.com/images/badrinath-banner.webp',
//   'https://jingleholidaybazar.com/images/akshardham-temple.webp',
//   'https://jingleholidaybazar.com/images/goechala-banner.webp',
//   'https://jingleholidaybazar.com/images/rameshwarm-banner.webp',
// ];

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className="hero-swiper"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="hero-slide"
//               style={{ backgroundImage: `url(${img})` }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Overlay Content */}
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <h1 className="hero-title text-white">Welcome to Jingle Holiday Bazar Pvt Ltd</h1>
//           <h2 className="hero-subtitle">
//             Where the Himalayas greet you every morning.
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;









import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './HeadSlider.css';
const images = [
  'https://jingleholidaybazar.com/images/badrinath-banner.webp',
  'https://jingleholidaybazar.com/images/akshardham-temple.webp',
  'https://jingleholidaybazar.com/images/goechala-banner.webp',
  'https://jingleholidaybazar.com/images/rameshwarm-banner.webp',
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-overlay">
        <div className="hero-content text-center text-white">
          <h1 className="hero-title  text-white"> Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          {/* <p className="hero-subtitle  text-white">
            Experience the magic of the Himalayas and beyond.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
