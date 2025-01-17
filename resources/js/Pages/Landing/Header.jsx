import React, { useState, useEffect, useRef } from 'react';
import { Link, scroller } from 'react-scroll';
import logo from '../../../../public/am5-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  const navLinks = [
    { href: 'inicio', label: 'Inicio' },
    { href: 'about', label: 'Sobre Mí' },
    { href: 'services', label: 'Servicios' },
    { href: 'media', label: 'Media' },
    // { href: 'contact', label: 'Contacto' },
  ];

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleLinkClick = (to) => {
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      offset: -navbarHeight,
    });
    setIsMenuOpen(false);
  };

  return (
    <header ref={navbarRef} className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl lg:me-60 sm:me-20 me-16 ps-12 py-4">
        <div className="flex justify-between items-center logo">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo"
              className="h-12"
            />
          </a>
          <button
            className="lg:hidden text-gray-600"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <nav className="hidden lg:flex space-x-10 font-normal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className={`relative text-lg text-gray-700 cursor-pointer ${
                  activeSection === link.href
                    ? 'after:content-[""] after:block after:w-full after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out header-nav-link'
                    : 'hover:after:content-[""] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full header-nav-link'
                }`}
                onSetActive={handleSetActive}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>
          <div className="ml-auto w-2/3 max-w-xs bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out">
            <nav className="space-y-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className={`block relative text-lg text-gray-700 after:content-[''] after:block after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out ${
                    activeSection === link.href
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  } px-4 py-2`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;