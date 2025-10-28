import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { title: "Eco Adventure", desc: "Explore forests, waterfalls, and hidden trails." },
    { title: "Cultural Tours", desc: "Experience local traditions and cuisines." },
    { title: "Luxury Retreats", desc: "Unwind at serene resorts in nature." },
  ];

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((s, index) => (
          <div key={index} className="service-card fade-in">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
