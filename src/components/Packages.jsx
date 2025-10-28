// import React from "react";
// import { motion } from "framer-motion";

// const packages = [
//   { title: "Adventure Trips", image: "/assets/adventure.jpg" },
//   { title: "Beach Holidays", image: "/assets/beach.jpg" },
//   { title: "Cultural Tours", image: "/assets/culture.jpg" },
// ];

// const Packages = () => {
//   return (
//     <section id="packages">
//       <h2 className="section-title">Popular Packages</h2>
//       <div className="cards-container">
//         {packages.map((pkg, index) => (
//           <motion.div
//             key={index}
//             className="card"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             <img src={pkg.image} alt={pkg.title} className="card-img" />
//             <h3>{pkg.title}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Packages;


import React from "react";
import "./Packages.css";

const packages = [
  { id: 1, title: "Maldives Escape", price: "$999", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
  { id: 2, title: "Swiss Adventure", price: "$1199", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { id: 3, title: "Desert Safari Dubai", price: "$799", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
];

function Packages() {
  return (
    <section id="packages">
      <h2 className="section-title">Popular Packages</h2>
      <p className="section-subtitle">Choose your perfect getaway from our top picks!</p>
      <div className="package-grid">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.img} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p className="price">{pkg.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
