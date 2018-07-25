import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <a
            className="footer__link"
            href="https://allankehl.com"
            aria-label="Ver meu portfólio"
          >
            @ Allan Kehl
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
