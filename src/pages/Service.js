import React from "react";
import Hero from "../components/Hero";
import services from "../data/servicesData";
import Card from "../components/Card";

function Service(){
  const slide = {
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop",
    title: "Our Services",
    subtitle: "We build packages that suit your needs — solo, family or corporate.",
  };

  return (
    <>
      <Hero slides={[slide]} />
      <section className="container">
        <h2 className="section-title">What we offer</h2>
        <div className="cards">
          {services.map(s => <Card key={s.id} item={s} />)}
        </div>

        <div style={{marginTop:"1.25rem"}}>
          <h3 className="section-title">More Services</h3>
          <ul style={{lineHeight:1.8, color:"#374151"}}>
            <li>✈️ Flight Booking & support</li>
            <li>🏨 Hotel Reservations with verified partners</li>
            <li>🚗 Local transport & chauffeur services</li>
            <li>🗺️ Customized itineraries & private guides</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Service;
