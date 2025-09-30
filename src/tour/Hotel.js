

export default function Hotel() {
  return (
    <main className=" text-body">
      <section className="container-fluid py-4">
           <h1 className="text-center"> POPULAR HOTELS</h1>
<h5 className="text-center pb-5">At Jingle Holiday Bazar Brovide Best Hotel facilty National And International</h5>
        <div className="row g-4 align-items-center">
      
         
          <div className="col-md-6 px-3">
            <h1 className="display-6 fw-bold mb-3 text-dark">Taj Aravali Resort & Spa</h1>
            <p className="lead mb-2 text-secondary">
              Prices for Taj Aravali Resort and Spa, one of the best hotels in India,
            </p>
            <p className="lead mb-0 text-secondary">starts at ₹ 12,999+ per night</p>
          </div>
          <div className="col-md-6">
            <img data-aos="fade-up"
              src="https://jingleholidaybazar.com/images/Taj-Aravali-Resort-Spa.jpg"
              alt="Resort exterior with pool"
              className="img-fluid rounded-2 w-100"
              style={{ objectFit: "cover", maxHeight: 360 }}
            />
          </div>
        </div>
      </section>

      {/* Lower content: Hotel 2 and Hotel 3 */}
      <section className="container py-5">
        <div className="row g-5 align-items-start">
          {/* Hotel 2 */}
          <div className="col-lg-6">
            <img data-aos="fade-down"
              src="https://jingleholidaybazar.com/images/172808300.jpg"
              alt="Hotel in mountains during winter"
              className="img-fluid rounded-2 mb-4"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 className="h3 fw-bold text-dark">Hotel Mountain Face by Snow City Hotels</h2>
            <p className="text-secondary mb-2">
              Set in Manali, Hotel Mountain Face by Snow City Hotels offers accommodation with a restaurant,
              free private parking, a shared lounge, and a garden.
            </p>
            <p className="text-secondary mb-0">₹ 1,440+ per night</p>
          </div>

          {/* Hotel 3 */}
          <div className="col-lg-6">
            <img data-aos="fade-left"
              src="https://jingleholidaybazar.com/images/5.jpg" 
              alt="Hideout Premiere Resort in Goa"
              className="img-fluid rounded-2 mb-4"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 className="h3 fw-bold text-dark">Hideout Premiere</h2>
            <p className="lead text-secondary">
              Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our
              guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches or the vibe — ₹ 4,499+ per night.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
