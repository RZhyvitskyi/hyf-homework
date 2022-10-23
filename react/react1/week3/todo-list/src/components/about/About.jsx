import React from 'react';
import Container from '../layout/container/Container';
import './About.css';

const About = () => {
  return (
    <Container>
      <div className="about">
        <h2>This is an About page</h2>
        <div>
          <p>Here can be found some info about the project</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
