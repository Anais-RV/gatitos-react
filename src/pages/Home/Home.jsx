import React, { useContext } from 'react';
import GatitosSlider from '../../components/GatitosSlider/GatitosSlider';
import styles from './Home.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}>
      <h1 className={styles.title}>Adopta un Michi</h1>
      <GatitosSlider />
      <button onClick={toggleTheme}>
        Cambiar tema a {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};

export default Home;