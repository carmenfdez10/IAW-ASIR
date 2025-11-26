import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Pie from './componentes/Pie';
import Inicio from './paginas/Inicio';
import Noticias from './paginas/Noticias';
import Contacto from './paginas/Contacto';
import Navbar from './componentes/Navbar';
import Aside from './componentes/Aside';
import styles from './componentes/web.module.css';

export default function Web() {
  return (
    <BrowserRouter>
      <Header />

      {/* Navbar debajo del header */}
      <Navbar />
      
      <div className={styles.layout}>
        <Aside />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>

      <Pie />
    </BrowserRouter>
  );
}