import React from 'react';
import styles from './GatitoCard.module.css';
import Btn from '../Btn/Btn';

const GatitoCard = ({ imagen }) => {
  const handleAdoptClick = () => {
    alert('¡Gracias por querer adoptar a este gatito!');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt="Gatito" className={styles.image} />
      </div>
      <div className={styles.buttonContainer}>
        <Btn onClick={handleAdoptClick} />
      </div>
    </div>
  );
};

export default GatitoCard;