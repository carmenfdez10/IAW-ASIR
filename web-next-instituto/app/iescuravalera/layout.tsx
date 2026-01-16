import estilos from './(componentes)/inicio.module.css'
import Link from 'next/link'

export default function MainLayout({ children, }:
    { children: React.ReactNode}) {
     return (
        <div>
        {/* Header */}
        <header className={estilos.header}>
            <h1>IES Cura Valera</h1>
        </header>

            {/* Barra de navegación */}
        <nav className={estilos.navbar}>
            <ul className={estilos.navList}>
                <li className={estilos.navItem}>
                <Link href="/iescuravalera">Inicio</Link>
                </li>

            {/* Noticias con Desplegable */}
                <li className={estilos.navItemDropdown}>
                <Link href="/iescuravalera/noticias">Noticias</Link>
                <ul className={estilos.dropdown}>
                    <li><Link href="/iescuravalera/noticias/recientes">Recientes</Link></li>
                    <li><Link href="/iescuravalera/noticias/eventos">Eventos</Link></li>
                </ul>
                </li>
                    
            {/* Oferta Educativa */}
                <li className={estilos.navItemDropdown}>
                <Link href="/iescuravalera/oferta">Oferta Educativa</Link>
                <ul className={estilos.dropdown}>
                    <li><Link href="/iescuravalera/oferta/eso">ESO</Link></li>
                    <li><Link href="/iescuravalera/oferta/bachillerato">Bachillerato</Link></li>
                    <li><Link href="/iescuravalera/oferta/ciclos">Ciclos</Link></li>
                </ul>
                </li>

            {/* Biblioteca con Desplegable*/}
                <li className={estilos.navItemDropdown}>
                <Link href="/iescuravalera/biblioteca">Biblioteca Escolar</Link>
                <ul className={estilos.dropdown}>
                    <li><Link href="/iescuravalera/biblioteca/biblioweb">BiblioWeb</Link></li>
                    <li><Link href="/iescuravalera/biblioteca/blog">Blog</Link></li>
                </ul>
                </li>

            {/* Contacto */}
                <li className={estilos.navItem}>
                <Link href="/iescuravalera/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
        <main>{children}</main>
        {/* Footer común */}
        <footer className="bg-gray-900 text-white p-4">
            © 2026 Mi Sitio
        </footer>
        </div>
     )
    }