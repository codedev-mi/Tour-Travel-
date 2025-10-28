// // // import React, { useEffect, useState } from "react";

// // // /**
// // //  * Hero component with simple auto slider
// // //  * props: slides = [{image, title, subtitle, ctaText, ctaLink}]
// // //  */
// // // function Hero({ slides = [] }) {
// // //   const [idx, setIdx] = useState(0);

// // //   useEffect(() => {
// // //     const t = setInterval(() => {
// // //       setIdx((i) => (i + 1) % slides.length);
// // //     }, 4000);
// // //     return () => clearInterval(t);
// // //   }, [slides.length]);

// // //   if (!slides.length) return null;

// // //   return (
// // //     <section className="hero" aria-label="hero">
// // //       {slides.map((s, i) => (
// // //         <div
// // //           key={i}
// // //           className={`hero-slide ${i === idx ? "show" : ""}`}
// // //           style={{ backgroundImage: `url(${s.image})` }}
// // //           role="img"
// // //           aria-label={s.title}
// // //         />
// // //       ))}

// // //       <div className="hero-overlay">
// // //         <div className="hero-content">
// // //           <h1>{slides[idx].title}</h1>
// // //           <p>{slides[idx].subtitle}</p>
// // //           {slides[idx].ctaText && (
// // //             <a className="cta" href={slides[idx].ctaLink || "#"}>{slides[idx].ctaText}</a>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div className="hero-dots" aria-hidden>
// // //         {slides.map((_, i) => (
// // //           <button
// // //             key={i}
// // //             className={i === idx ? "active" : ""}
// // //             onClick={() => setIdx(i)}
// // //             aria-label={`go to slide ${i + 1}`}
// // //           />
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Hero;




// // import React from "react";
// // import { motion } from "framer-motion";

// // const Hero = () => {
// //   return (
// //     <section className="hero" id="home">
// //       <motion.h1
// //         initial={{ y: -50, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 1 }}
// //       >
// //         Discover Your Next Adventure
// //       </motion.h1>
// //       <motion.p
// //         initial={{ y: 50, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 1.2 }}
// //       >
// //         Unique travel experiences crafted for every traveler.
// //       </motion.p>
// //       <motion.button
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.95 }}
// //       >
// //         Explore Now
// //       </motion.button>
// //     </section>
// //   );
// // };

// // export default Hero;


// import React from "react";
// import "./Hero.css";

// function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div className="hero-content">
//         <h1>Explore the World with Travelly</h1>
//         <p>
//           Discover breathtaking destinations, unique adventures, and lifetime memories.
//         </p>
//         <button>Start Your Journey</button>
//       </div>
//     </section>
//   );
// }

// export default Hero;





import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Explore Nature’s Beauty</h1>
        <p>Discover breathtaking destinations and eco-friendly tours with Travelly.</p>
        <a href="#services" className="hero-btn">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
