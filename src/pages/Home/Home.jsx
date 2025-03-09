import React from 'react';
import GatitosSlider from '../../components/GatitosSlider/GatitosSlider';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Adopta un Michi</h1>
      <GatitosSlider />
    </div>
  );
};

export default Home;