// // import React, { useState } from "react";
// // import "./Contact.css"; // optional if you want to separate its styles

// // const Contact = () => {
// //   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
// //   const [sent, setSent] = useState(false);

// //   const handleChange = (e) =>
// //     setFormData({ ...formData, [e.target.name]: e.target.value });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSent(true);
// //     setTimeout(() => setSent(false), 3000);
// //   };

// //   return (
// //     <section id="contact" className="contact">
// //       <h2 className="section-title">Contact Us</h2>
// //       <form onSubmit={handleSubmit} className="contact-form">
// //         <input name="name" placeholder="Your Name" onChange={handleChange} required />
// //         <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
// //         <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
// //         <button type="submit">Send Message</button>
// //         {sent && <p className="success-msg">✅ Message Sent Successfully!</p>}
// //       </form>
// //     </section>
// //   );
// // };

// // export default Contact;



// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         () => alert("Message sent successfully!"),
//         (error) => alert("Failed to send message. Please try again.")
//       );
//   };

//   return (
//     <section id="contact">
//       <h2 className="section-title">Contact Us</h2>
//       <p className="section-subtitle">We'd love to help you plan your next adventure!</p>
//       <form ref={form} onSubmit={sendEmail} className="contact-form">
//         <input type="text" name="user_name" placeholder="Your Name" required />
//         <input type="email" name="user_email" placeholder="Your Email" required />
//         <textarea name="message" placeholder="Your Message" required></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;



import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
