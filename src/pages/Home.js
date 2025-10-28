import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import services from "../data/servicesData";
import Testimonials from "../components/Testimonials";

function Home(){
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
      title: "Discover Your Next Adventure",
      subtitle: "Unique travel experiences crafted for every traveler.",
      ctaText: "Explore Services",
      ctaLink: "/service",
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
      title: "Mountains, Beaches & Cities",
      subtitle: "Hand-picked itineraries with local insights.",
      ctaText: "View Packages",
      ctaLink: "/service",
    },
    {
      image: "https://images.unsplash.com/photo-1519821172141-b5d8d0c5f6c9?q=80&w=1400&auto=format&fit=crop",
      title: "Travel Smart & Safe",
      subtitle: "We handle logistics so you can relax and enjoy.",
      ctaText: "Contact Us",
      ctaLink: "/contact",
    },
  ];

  return (
    <>
      <Hero slides={slides} />

      <section className="container" aria-labelledby="popular">
        <h2 id="popular" className="section-title">Popular Packages</h2>
        <div className="cards" role="list">
          {services.map(s => <Card key={s.id} item={s} />)}
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default Home;
