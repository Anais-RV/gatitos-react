import React from 'react';
import AdoptionForm from  '../../components/forms//AdoptionForm/AdoptionForm.jsx'
import styles from './AdoptPage.module.css';

const AdoptPage = () => {
  return (
    <div className={styles.container}>
      <h1>Formulario de Adopción</h1>
      <AdoptionForm />
    </div>
  );
};

export default AdoptPage;