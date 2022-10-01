import React from 'react';
import Container from '../layout/container/Container';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Container>
      <div className={styles.home}>
        <h2>This is a home page</h2>
        <div>
          <p>Here can be found some main info</p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
