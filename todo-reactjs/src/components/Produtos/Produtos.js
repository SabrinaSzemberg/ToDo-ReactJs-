import React, { useEffect } from 'react'
import Produto from "./Produto/Produto"
import styles from './Produtos.module.css'
import { useState } from 'react';
import Titulo from '../Titulo/Titulo'
import { fetchProdutos } from './fetch.js';
import Botao from '../Botao/Botao';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [proxPag, setProxPag] = useState('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');

  const resultProdutos = async () => {
    const listaProdutos = await fetchProdutos(proxPag);
    return listaProdutos.products;
  }

  const resultProxPag = async () => {
    const urlNextPage = await fetchProdutos(proxPag);
    return `https://${urlNextPage.nextPage}`
  }

  useEffect(() => {
    const teste = async () => {
      setProdutos(await resultProdutos());
      setProxPag(await resultProxPag());
    }

    teste();
  }, [])

  useEffect(() => {
    const mudaPagina = async () => {
      setProxPag(await resultProxPag());
    }
    mudaPagina();
  }, [produtos]);

  return (
    <section className={styles.produtos}>
      <Titulo texto='Sua seleção especial'/>
      <div className={styles.listaProdutos}>
        <Produto produtos={produtos}/>
      </div>
      <div
        className={styles.wrapperBtn}
        onClick={async () => {
          const novosProdutos = await resultProdutos();       
          setProdutos(produtos => [...produtos, ...novosProdutos]);
        }}>
        <Botao texto='Ainda mais produtos aqui!'/>
      </div>
    </section>
  )
}

export default Produtos