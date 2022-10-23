import React from 'react';
import Container from '../container/Container';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Container>
        <nav className="nav">
          <div>
            <Link to="/" className="nav__link">
              ToDo List
            </Link>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/home" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/tasks" className="nav__link">
                Tasks
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
