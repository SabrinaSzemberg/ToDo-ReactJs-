import React from 'react';
import styles from './Header.module.css';
import Botao from '../Botao/Botao'

const Header = () => {
  const textos = ['Conheça a Linx', 'Ajude o algoritmo', 'Seus produtos', 'Compartilhe'];

  return (
    <header>
      <div className={styles.header__bg}></div>
      <div className={styles.header__texto}>
        <h2 className={`${styles.h2} ${styles.texto}`}>uma seleção de produtos</h2>
        <h1 className={`${styles.h1} ${styles.texto}`}>especial para você</h1>
        <h3 className={`${styles.h3} ${styles.texto}`}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
      </div>
      <div className={styles.header__botoes}>
        {textos.map((texto, index) => (
          <Botao key={index} className={styles.botao} texto={texto}/>
        ))}
      </div>
    </header>
  )
}

export default Header
