import React from 'react'
import estilos from './pie.module.css'
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
export default function Pie() {
  return (
    <footer className={estilos.pie}>
      <div className={estilos.contenedor}>
        <p>Web hecha por María del Carmen Fernández Fernández - IES Cura Valera </p>

        <div className={estilos.redes}>
          <a
            href="https://www.facebook.com/p/Ies-Cura-Valera-100011212297789/?locale=es_ES"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>

          <a
            href="https://www.instagram.com/ies_cura_valera/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          <a
            href="https://x.com/iesCuraValera"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>

          <a
            href="https://www.youtube.com/user/iescuravalera"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
