import React from "react";
import "../style/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="Enter name" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="Enter Email" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about yor query.."
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
