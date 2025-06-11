import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // const formData = new FormData(form.current);
    // const userName = formData.get("name");
    // const userEmail = formData.get("email");
    // const useTitle = formData.get("title");
  
    emailjs
      .sendForm(
        "service_ps8mfcp",
        "template_z8ppiwm",
        form.current,
        "Pvx3XjAx0yXFxgGjy"
      )
      .then((result) => {
        alert("Message sent successfully!");
        form.current.reset();
  
        // emailjs.send(
        //   "service_ps8mfcp",
        //   "template_4c9trqg",
        //   {
        //     name: userName,    
        //     email: userEmail,     
        //     title: useTitle
        //   },
        //   "Pvx3XjAx0yXFxgGjy"
        // ).then(
        //   () => console.log("Auto-reply sent successfully"),
        //   (err) => console.error("Auto-reply failed:", err)
        // );
      })
      .catch((error) => {
        alert("Failed to send the message, try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading">
        We'd love to hear from you. Send us a message using the form below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Message Title" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
