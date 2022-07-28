import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__bg}></div>
      <p className={styles.p}>Testando suas habilidades em HTML, CSS e JS.</p>
      <p className={styles.p}>Linx Impulse</p>
      <p className={styles.p}>2019</p>
    </footer>
  )
}

export default Footer