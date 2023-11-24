import React from 'react';
import styles from '../Hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-banner']}>
        <h1 className={styles['hero-banner-h1']}>backroads app</h1>
        <p className={styles['hero-banner-p']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        explicabo debitis est autem dicta.
        </p>
        <button className={styles['hero-btn']}>EXPLORE TOURS</button>
        {/* <a href="#tours" className={styles['hero-btn']}>explore tours</a> */}
      </div>
    </div>
  );
};

export default Hero;
