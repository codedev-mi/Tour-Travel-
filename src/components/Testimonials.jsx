// // // import React from "react";

// // // const DUMMY = [
// // //   { id:1, name: "Aisha K.", text: "Amazing experience! Guides were friendly and everything was smooth." },
// // //   { id:2, name: "Ravi S.", text: "Well planned itinerary. Highly recommended." },
// // //   { id:3, name: "Maya P.", text: "Great value and lovely hotels. Will travel again." },
// // // ];

// // // function Testimonials(){
// // //   return (
// // //     <section className="container">
// // //       <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.75rem"}}>
// // //         <h3 className="section-title">What travelers say</h3>
// // //       </div>

// // //       <div className="testimonials">
// // //         {DUMMY.map(t => (
// // //           <div key={t.id} className="testimonial">
// // //             <p>"{t.text}"</p>
// // //             <h4>- {t.name}</h4>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Testimonials;




// // import React from "react";
// // import { motion } from "framer-motion";

// // const testimonials = [
// //   { name: "Aisha K.", text: "Amazing experience! Guides were friendly and everything was smooth." },
// //   { name: "Ravi S.", text: "Well planned itinerary. Highly recommended." },
// //   { name: "Maya P.", text: "Great value and lovely hotels. Will travel again." },
// // ];

// // const Testimonials = () => {
// //   return (
// //     <section id="testimonials">
// //       <h2 className="section-title">What Travelers Say</h2>
// //       <div className="testimonials-container">
// //         {testimonials.map((t, index) => (
// //           <motion.div
// //             key={index}
// //             className="testimonial"
// //             whileHover={{ scale: 1.03 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <p>"{t.text}"</p>
// //             <h4>- {t.name}</h4>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;




// import React from "react";
// import "./Testimonials.css";

// const testimonials = [
//   {
//     name: "Aarav Patel",
//     quote: "Travelly made my honeymoon in the Maldives unforgettable! The process was smooth and easy.",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Sanya Mehra",
//     quote: "Professional and affordable! Highly recommend Travelly for stress-free travel planning.",
//     img: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
//   {
//     name: "Rohan Gupta",
//     quote: "Loved every bit of my Switzerland trip! Great hotel and activities suggestions.",
//     img: "https://randomuser.me/api/portraits/men/52.jpg",
//   },
// ];

// function Testimonials() {
//   return (
//     <section id="testimonials">
//       <h2 className="section-title">What Our Clients Say</h2>
//       <div className="testimonial-grid">
//         {testimonials.map((item, index) => (
//           <div key={index} className="testimonial-card">
//             <img src={item.img} alt={item.name} />
//             <p>"{item.quote}"</p>
//             <h4>- {item.name}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Testimonials;



import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Aarav", text: "A peaceful and rejuvenating experience!" },
    { name: "Meera", text: "Loved every moment exploring nature with Travelly!" },
    { name: "Ravi", text: "Great guides and eco-friendly stays!" },
  ];

  return (
    <section id="testimonials">
      <h2>What Our Travelers Say</h2>
      <div className="testimonials-container">
        {reviews.map((r, i) => (
          <div className="testimonial" key={i}>
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
