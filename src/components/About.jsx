import React from 'react';
import profileImg from '../assets/profile.webp';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Profile Image"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profileImg}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                Passionate about innovation and staying ahead of emerging technologies. 6+ years of experience crafting
                high-quality web applications.
              </p>
              <p className="about-wrapper__info-text">
                Dedicated to delivering exceptional user experiences through expertise in HTML,
                CSS, JavaScript, Angular, and React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;