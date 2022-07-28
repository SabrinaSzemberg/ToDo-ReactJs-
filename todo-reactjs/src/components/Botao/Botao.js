import React from 'react'
import styles from './Botao.module.css'

const Botao = ({texto, produtos, setProdutos}) => {
  return (
    <button className={styles.button}>
      {texto}
    </button>
  )
}

export default Botao