// // // // import React from "react";
// // // // import { Routes, Route } from "react-router-dom";
// // // // import Navbar from "./components/Navbar";
// // // // import Footer from "./components/Footer";
// // // // import ScrollToTopButton from "./components/ScrollToTopButton";


// // // // import Home from "./pages/Home";
// // // // import About from "./pages/About";
// // // // import Service from "./pages/Service";
// // // // import Contact from "./pages/Contact";

// // // // function App() {
// // // //   return (
// // // //     <div className="App">
// // // //       <Navbar />
// // // //       <main>
// // // //         <Routes>
// // // //           <Route path="/" element={<Home />} />
// // // //           <Route path="/about" element={<About />} />
// // // //           <Route path="/service" element={<Service />} />
// // // //           <Route path="/contact" element={<Contact />} />
// // // //         </Routes>
// // // //       </main>
// // // //       <Footer />
// // // //       <ScrollToTopButton />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;




// // // import React, { useState } from "react";
// // // import Navbar from "./components/Navbar";
// // // import Hero from "./components/Hero";
// // // import Packages from "./components/Packages";
// // // import Testimonials from "./components/Testimonials";
// // // import Contact from "./components/Contact";
// // // import Footer from "./components/Footer";
// // // import ScrollToTopButton from "./components/ScrollToTopButton";
// // // import "./App.css";

// // // function App() {
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   const toggleDarkMode = () => setDarkMode(!darkMode);

// // //   return (
// // //     <div className={darkMode ? "app dark" : "app"}>
// // //       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
// // //       <Hero />
// // //       <Packages />
// // //       <Testimonials />
// // //       <Contact />
// // //       <Footer />
// // //       <ScrollToTopButton />
// // //     </div>
// // //   );
// // // }

// // // export default App;



// // import React from "react";
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Packages from "./components/Packages";
// // import Testimonials from "./components/Testimonials";
// // import Contact from "./components/Contact";
// // import Footer from "./components/Footer";
// // import ScrollToTopButton from "./components/ScrollToTopButton";
// // import "./App.css";

// // function App() {
// //   return (
// //     <>
// //       <Navbar />
// //       <Hero />
// //       <Packages />
// //       <Testimonials />
// //       <Contact />
// //       <Footer />
// //       <ScrollToTopButton />
// //     </>
// //   );
// // }

// // export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Packages from "./components/Packages";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ScrollToTopButton from "./components/ScrollToTopButton";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Packages />
//       <Testimonials />
//       <Contact />
//       <Footer />
//       <ScrollToTopButton />
//     </>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./pages/Contact"; // ✅ correct path based on your folder
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
