import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.tabnav}>
      <p className={styles.espaco}></p>
      <h1>Flipar Imagens Ver.2</h1>
      <a href="https://aarthx.github.io/flipImage/">
        <p className={styles.siteOld}>Veja a primeira versão feita aqui</p>
      </a>
    </div>
  );
};

export default Header;
