// // // import React, { useState, useEffect } from "react";

// // // const ScrollToTopButton = () => {
// // //   const [visible, setVisible] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (window.scrollY > 300) setVisible(true);
// // //       else setVisible(false);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const scrollToTop = () => {
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   };

// // //   return (
// // //     visible && (
// // //       <button
// // //         onClick={scrollToTop}
// // //         style={{
// // //           position: "fixed",
// // //           bottom: "40px",
// // //           right: "30px",
// // //           backgroundColor: "#0d47a1",
// // //           color: "#fff",
// // //           border: "none",
// // //           borderRadius: "50%",
// // //           width: "50px",
// // //           height: "50px",
// // //           fontSize: "22px",
// // //           cursor: "pointer",
// // //           boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
// // //           zIndex: 1000,
// // //         }}
// // //       >
// // //         ↑
// // //       </button>
// // //     )
// // //   );
// // // };

// // // export default ScrollToTopButton;














// // import React, { useEffect, useState } from "react";

// // const ScrollToTopButton = () => {
// //   const [visible, setVisible] = useState(false);

// //   const toggleVisibility = () => {
// //     setVisible(window.scrollY > 200);
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", toggleVisibility);
// //     return () => window.removeEventListener("scroll", toggleVisibility);
// //   }, []);

// //   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// //   return (
// //     visible && (
// //       <button className="scroll-btn" onClick={scrollToTop}>
// //         ⬆
// //       </button>
// //     )
// //   );
// // };

// // export default ScrollToTopButton;




// import React, { useState, useEffect } from "react";
// import "./ScrollToTopButton.css";

// function ScrollToTopButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) setVisible(true);
//       else setVisible(false);
//     };
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     visible && (
//       <button
//         className="scroll-top"
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       >
//         ↑
//       </button>
//     )
//   );
// }

// export default ScrollToTopButton;



import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll up
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button onClick={scrollToTop} className="scroll-top animated-btn">
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
