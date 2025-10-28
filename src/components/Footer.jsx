// // import React from "react";

// // function Footer(){
// //   return (
// //     <footer className="footer">
// //       <div style={{maxWidth:1100, margin:"0 auto", padding:"0 1rem"}}>
// //         <div style={{marginBottom:8}}>© {new Date().getFullYear()} Trippy Tour • Built with React</div>
// //         <div style={{fontSize:13, color:"rgba(255,255,255,0.9)"}}>Portfolio: Responsive, data-driven UI • Contact form with validation</div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;



// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer>
//       <p>© 2025 Travelly. All rights reserved.</p>
//       <p>Made with ❤️ by Shruti</p>
//     </footer>
//   );
// }

// export default Footer;



import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Travelly🌿</h2>
          <p>Connecting you to the heart of nature — responsibly and beautifully.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Travelly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
