import React, { useState, useEffect } from 'react';
import GatitoCard from '../GatitoCard/GatitoCard';
import styles from './GatitosSlider.module.css';
import { getGatitos } from '../../services/catService.js';

const GatitosSlider = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getGatitos();
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = [];
  for (let i = 0; i < 4; i++) {
    visibleCards.push(cards[(currentIndex + i) % cards.length]);
  }

  return (
    <div className={styles.sliderContainer}>
      {cards.length > 0 && (
        <>
          <button className={styles.sliderButton} onClick={prevCard}>←</button>
          <div className={styles.slider}>
            {visibleCards.map((card, index) => (
              <GatitoCard 
                key={index}
                imagen={card.url} 
              />
            ))}
          </div>
          <button className={styles.sliderButton} onClick={nextCard}>→</button>
        </>
      )}
    </div>
  );
};

export default GatitosSlider;