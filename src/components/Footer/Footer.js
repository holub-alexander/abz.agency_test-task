import React from 'react';

import Font from './../UI/Typography/Font';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="container">
            <small className="copyright">
              <Font type="normal">
                &copy; abz.agency specially for the test task
              </Font>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
