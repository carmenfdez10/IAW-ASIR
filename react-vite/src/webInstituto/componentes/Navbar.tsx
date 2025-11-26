import { Link } from "react-router-dom";
import estilos from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={estilos.nav}>
      <Link to="/">Inicio</Link>
      <Link to="/noticias">Noticias</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};
