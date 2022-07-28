import React, { useEffect } from 'react'
import Botao from '../../Botao/Botao';
import styles from './Produto.module.css'

const Produto = ({produtos}) => {

  return (
    <>
      {produtos.map(produto => {
        return (
          <div key={produto.id} className={styles.produto}>
            <div className={styles.produto__img}>
              <img src={produto.image} alt={produto.description} />
            </div>
            <div className={styles.produto__descricao}>
                <h4 className={styles.tituloProduto}>{produto.name}</h4>
                <h5 className={styles.h5}>{produto.description}</h5>
                <h5 className={styles.h5}>{`De: R$${produto?.oldPrice?.toFixed(2).replace(".", ",")}`}</h5>
                <h4 className={styles.h4}>{`Por: R$${produto?.price?.toFixed(2).replace(".", ",")}`}</h4>
                <h5 className={styles.h5}>{`ou ${produto?.installments?.count}x de R$${produto?.installments?.value?.toFixed(2).replace(".", ",")}`}</h5>
                <Botao texto='Comprar'/>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Produto