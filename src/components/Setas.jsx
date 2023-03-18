import React from 'react';
import { ReactComponent as Seta } from '../assets/seta.svg';
import styles from './Setas.module.css';

const Setas = ({ rotacionaTodos, rotacionaUnico, numero }) => {
  return (
    <div className={styles.setasBox}>
      <div
        onClick={() => {
          rotacionaTodos
            ? rotacionaTodos('cima')
            : rotacionaUnico(numero, 'cima');
        }}
      >
        <Seta />
      </div>
      <div
        onClick={() => {
          rotacionaTodos
            ? rotacionaTodos('esquerda')
            : rotacionaUnico(numero, 'esquerda');
        }}
      >
        <Seta />
      </div>
      <div
        onClick={() => {
          rotacionaTodos
            ? rotacionaTodos('baixo')
            : rotacionaUnico(numero, 'baixo');
        }}
      >
        <Seta />
      </div>
      <div
        onClick={() => {
          rotacionaTodos
            ? rotacionaTodos('direita')
            : rotacionaUnico(numero, 'direita');
        }}
      >
        <Seta />
      </div>
    </div>
  );
};

export default Setas;
