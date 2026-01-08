import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper load-hidden">
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:sidharthav94@gmail.com"
          >
            Contact me via email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;