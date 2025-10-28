// // // import React, { useState } from "react";
// // // import { Link, useLocation } from "react-router-dom";

// // // function Navbar() {
// // //   const [open, setOpen] = useState(false);
// // //   const loc = useLocation();

// // //   // close mobile menu on navigation
// // //   const handleLink = () => setOpen(false);

// // //   return (
// // //     <header className="navbar">
// // //       <Link to="/" className="brand" onClick={() => window.scrollTo(0,0)}>
// // //         <div className="logo">TT</div>
// // //         <div>
// // //           <div style={{fontWeight:700}}>Trippy Tour</div>
// // //           <small style={{ fontSize: 11, color: "rgba(255,255,255,0.9)" }}>Explore • Discover • Travel</small>
// // //         </div>
// // //       </Link>

// // //       <nav>
// // //         <div className="nav-links">
// // //           <Link to="/" className={loc.pathname === "/" ? "active" : ""}>Home</Link>
// // //           <Link to="/about" className={loc.pathname === "/about" ? "active" : ""}>About</Link>
// // //           <Link to="/service" className={loc.pathname === "/service" ? "active" : ""}>Service</Link>
// // //           <Link to="/contact" className={loc.pathname === "/contact" ? "active" : ""}>Contact</Link>
// // //         </div>

// // //         <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
// // //           {/* simple hamburger */}
// // //           <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //             <rect width="18" height="2" rx="1" fill="white"/>
// // //             <rect y="5" width="18" height="2" rx="1" fill="white"/>
// // //             <rect y="10" width="18" height="2" rx="1" fill="white"/>
// // //           </svg>
// // //         </button>

// // //         {open && (
// // //           <div className="mobile-menu" onClick={() => setOpen(false)}>
// // //             <Link to="/" onClick={handleLink}>Home</Link>
// // //             <Link to="/about" onClick={handleLink}>About</Link>
// // //             <Link to="/service" onClick={handleLink}>Service</Link>
// // //             <Link to="/contact" onClick={handleLink}>Contact</Link>
// // //           </div>
// // //         )}
// // //       </nav>
// // //     </header>
// // //   );
// // // }

// // // export default Navbar;





// // import React from "react";

// // const Navbar = ({ darkMode, toggleDarkMode }) => {
// //   return (
// //     <nav className="navbar">
// //       <div className="logo">🌍 Trippy Tour</div>
// //       <ul className="nav-links">
// //         <li><a href="#home">Home</a></li>
// //         <li><a href="#packages">Packages</a></li>
// //         <li><a href="#testimonials">Testimonials</a></li>
// //         <li><a href="#contact">Contact</a></li>
// //       </ul>
// //       <button className="dark-toggle" onClick={toggleDarkMode}>
// //         {darkMode ? "☀️" : "🌙"}
// //       </button>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1 className="logo">Travelly</h1>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#packages">Packages</a></li>
//         <li><a href="#testimonials">Testimonials</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;





import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Travelly🌿</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
