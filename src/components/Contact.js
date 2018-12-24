import React from 'react';
import Map from './views/Map';

export default () => (
  <section id="contact" className="section-padding">
    <div className="text-center">
      <h2>Contact Us</h2>
      <p className="section-p-15 sec-header-p">
        Got any enquires or information for us? feel free to reach out to us via the form below
      </p>
    </div>
    <div className="row">
      <div className="col-2">
        <form action="" method="post">
          <label htmlFor="fname">Name</label>
          <input type="text" id="fname" placeholder="Your Names..." required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email address.." required />
          <label htmlFor="subject">Title</label>
          <input type="text" name="" id="subject" placeholder="Your Message Title" required />
          <label htmlFor="message">Your Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message..."
            required
          />
          <button type="submit" className="btn bg-green" style={{ marginTop: '15px' }}>
            Send Message
          </button>
        </form>
      </div>
      <div className="col-2">
        <Map />
      </div>
    </div>
  </section>
);
