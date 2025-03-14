import React from 'react';
import styles from './GatitoCard.module.css';
import Btn from '../Btn/Btn';

const GatitoCard = ({ cat }) => {
  const { url, breeds } = cat;
  const breed = breeds && breeds.length > 0 ? breeds[0] : null;

  const handleAdoptClick = () => {
    alert('¡Gracias por querer adoptar a este gatito!');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={url} alt={breed ? breed.name : 'Gatito'} className={styles.image} />
      </div>
      {breed && (
        <div className={styles.info}>
          <h2 className={styles.name}>{breed.name}</h2>
          <p className={styles.description}>{breed.description}</p>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <Btn onClick={handleAdoptClick} />
      </div>
    </div>
  );
};

export default GatitoCard;