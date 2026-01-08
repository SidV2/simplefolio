import React from 'react';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a rel="noreferrer" target="_blank" href="https://github.com/SidV2">
            <i className="fa fa-github fa-inverse"></i>
          </a>
          <a 
            rel="noreferrer" 
            href="https://github.com/SidV2/" 
            target="_blank"
          >
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;