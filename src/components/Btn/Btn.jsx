import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Btn.module.css';

const Btn = () => {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate('/adopt');
  };

  return (
    <button className={styles.adoptButton} onClick={handleAdoptClick}>
      ¡Adóptame!
    </button>
  );
};

export default Btn;