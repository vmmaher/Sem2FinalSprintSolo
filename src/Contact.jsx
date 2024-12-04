import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="pageTitleWhite">&lt; contact &gt;</h1>
      <p>Feel free to reach out using the form below!</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
