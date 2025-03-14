import React, { useReducer } from 'react';
import styles from './AdoptionForm.module.css';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  termsAccepted: false,
  errors: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: ''
        }
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const AdoptionForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validate = () => {
    let valid = true;
    if (!state.name) {
      dispatch({ type: 'SET_ERROR', field: 'name', error: 'El nombre es obligatorio' });
      valid = false;
    }
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
      dispatch({ type: 'SET_ERROR', field: 'email', error: 'Email inválido' });
      valid = false;
    }
    if (!state.phone || !/^\d{9}$/.test(state.phone)) {
      dispatch({ type: 'SET_ERROR', field: 'phone', error: 'Teléfono inválido' });
      valid = false;
    }
    if (!state.termsAccepted) {
      dispatch({ type: 'SET_ERROR', field: 'termsAccepted', error: 'Debes aceptar los términos' });
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Formulario enviado con éxito');
      dispatch({ type: 'RESET' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
        />
        {state.errors.name && <span className={styles.error}>{state.errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
        />
        {state.errors.email && <span className={styles.error}>{state.errors.email}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={state.phone}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
        />
        {state.errors.phone && <span className={styles.error}>{state.errors.phone}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          value={state.address}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'address', value: e.target.value })}
        />
      </div>
      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            checked={state.termsAccepted}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'termsAccepted', value: e.target.checked })}
          />
          Acepto los términos y condiciones
        </label>
        {state.errors.termsAccepted && <span className={styles.error}>{state.errors.termsAccepted}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AdoptionForm;