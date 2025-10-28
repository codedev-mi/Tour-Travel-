// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import Hero from "../components/Hero";

// function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_mg3c5fg", // 🔁 replace with your Service ID
//         "template_xpxoi22", // 🔁 replace with your Template ID
//         form.current,
//         "mQQKa1hb0xOzeG_VY" // 🔁 replace with your Public Key
//       )
//       .then(
//         () => setStatus("✅ Message sent successfully!"),
//         (error) => setStatus("❌ Failed to send message.")
//       );
//   };

//   return (
//     <div>
//       <Hero
//         image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//         title="Contact Us"
//         subtitle="We'd love to hear from you!"
//       />
//       <section style={{ padding: "2rem", textAlign: "center" }}>
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "1rem",
//             maxWidth: "400px",
//             margin: "auto",
//           }}
//         >
//           <input
//             type="text"
//             name="from_name"
//             placeholder="Your Name"
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//           <input
//             type="email"
//             name="from_email"
//             placeholder="Your Email"
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Your Message"
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           ></textarea>
//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#0d47a1",
//               color: "white",
//               border: "none",
//               padding: "0.7rem 1.2rem",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Send Message
//           </button>
//           {status && <p>{status}</p>}
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Contact;









import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
        {sent && <p className="success-msg">✅ Message Sent Successfully!</p>}
      </form>
    </section>
  );
};

export default Contact;
