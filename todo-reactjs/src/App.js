import Header from "./components/Header/Header"
import {lorem} from "./assets/text"
import Formulario from "./components/Formulario/Formulario"
import Produtos from "./components/Produtos/Produtos"
import Share from "./components/Share/Share"
import Footer from "./components/Footer/Footer"
import 'normalize.css'
import styles from "./App.module.css"


function App() {
  return (
    <div>
    <Header/>
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.section__text}>
          <h2>Ajude o algoritmo a ser mais certeiro</h2>
          <p>{lorem}</p>
        </div>
        <Formulario/>
      </section>
      <Produtos/>
      <Share/>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
