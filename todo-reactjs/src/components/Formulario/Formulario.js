import React from 'react'
import Botao from '../Botao/Botao'
import styles from './Formulario.module.css'

const Formulario = () => {
  return (
    <form className={styles.formulario}>
        <label htmlFor="name">Seu nome:</label>
        <input type="text" id='name' name='name'></input>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id='email' name='email'></input>
        <label htmlFor="cpf">CPF:</label>
        <input type="number" id='cpf' name='cpf'></input>
        <div className={styles.radio}>
            <input type="radio" id='masc' name='gender' value='masc' className={styles.input}/>
            <label htmlFor="masc" className={styles.input}>Masculino</label>
            <input type="radio" id='fem' name='gender' value='fem' className={styles.input}/>
            <label htmlFor="fem" className={styles.input}>Feminino</label>
        </div>
        <Botao texto='Enviar'/>
    </form>
  )
}

export default Formulario