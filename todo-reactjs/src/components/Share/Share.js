import React from 'react'
import Botao from '../Botao/Botao'
import Titulo from '../Titulo/Titulo'
import styles from './Share.module.css'


const Share = () => {
  return (
    <div className={styles.share}>
        <Titulo texto='Compartilhe a novidade'/>
        <p className={styles.share__text}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <form className={styles.share__form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="nameFriend">Nome do seu amigo:</label>
            <input type="text" id='nameFriend' name='nameFriend'></input>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="emailFriend">E-mail:</label>
            <input type="email" id='emailFriend' name='emailFriend'></input>
          </div>
        </form>
        <Botao texto='Enviar agora'/>
    </div>
  )
}

export default Share