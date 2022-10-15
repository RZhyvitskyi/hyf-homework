import React from 'react';
import Container from '../container/Container';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__nav">
          <div>
            <Link to="/" className="nav__link">
              ToDo List
            </Link>
          </div>
          <p>Here can be found some useful links</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
