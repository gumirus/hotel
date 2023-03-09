import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // You can add your own logic here to submit the form data
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label className="contact-form-label">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-form-input"
        />
      </label>
      <label className="contact-form-label">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-form-input"
        />
      </label>
      <label className="contact-form-label">
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-form-input contact-form-message"
        />
      </label>
      <button type="submit" className="contact-form-submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
