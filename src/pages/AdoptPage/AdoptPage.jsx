import React from 'react';
import styles from './AdoptPage.module.css';

const AdoptPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Gracias por querer adoptar a un gatito!</h1>
      <p className={styles.message}>Estamos trabajando en esta página. Pronto podrás completar el formulario de adopción.</p>
      <div className={styles.underConstruction}>
        <img src="/images/UnderConstruction.gif" alt="Página en construcción" className={styles.image} />
      </div>
    </div>
  );
};

export default AdoptPage;
