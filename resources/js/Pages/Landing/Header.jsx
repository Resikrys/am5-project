import logo from '../../../../public/am5-logo.png';

function Header() {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" className="h-12" />
                    </a>
                    <button className="lg:hidden text-gray-600" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <nav className="hidden lg:flex space-x-6">
                        <a href="#inicio" className="text-lg text-gray-700 hover:text-yellow-500">Inicio</a>
                        <a href="#about" className="text-lg text-gray-700 hover:text-yellow-500">Sobre Mí</a>
                        <a href="#services" className="text-lg text-gray-700 hover:text-yellow-500">Servicios</a>
                        <a href="#media" className="text-lg text-gray-700 hover:text-yellow-500">Media</a>
                        <a href="#contact" className="text-lg text-gray-700 hover:text-yellow-500">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;