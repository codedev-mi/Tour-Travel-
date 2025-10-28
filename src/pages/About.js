import React from "react";
import Hero from "../components/Hero";

function About(){
  const slide = {
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1400&auto=format&fit=crop",
    title: "About Trippy Tour",
    subtitle: "We believe travel transforms lives. Our team curates immersive trips with comfort and authenticity.",
  };

  return (
    <>
      <Hero slides={[slide]} />
      <section className="container">
        <h2 className="section-title">Our Story</h2>
        <p style={{color:"#374151", lineHeight:1.7}}>
          Trippy Tour started as a small group of passionate travelers. Today we craft travel experiences across countries,
          combining local knowledge with responsible tourism. We take pride in delivering memorable journeys — from planning
          to safe return.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1rem", marginTop:"1rem"}}>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="team"/>
            <div className="card-body">
              <h3>Experienced Guides</h3>
              <p>Local experts who care about safety and authentic experiences.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200&auto=format&fit=crop" alt="sustainable"/>
            <div className="card-body">
              <h3>Sustainable Travel</h3>
              <p>We support local communities and eco-friendly practices.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
