//Migración footer bootstrap -> tailwind
import logo from '../../../../public/am5-logo.png';
 

function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-4 text-center md:text-left">

          {/* Columna 1: QR */}
          <div className="hidden md:flex w-full md:w-1/5 flex justify-center items-center mb-6 md:mb-0">
            <img 
              src={logo} 
              alt="QR que conduce a la página de inicio de AM5" 
              className="max-w-[150px]"
            />
          </div>

          {/* Columna 2: Contactos */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4 text-left">Contacto</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="bi bi-geo text-[#FFFF29] mr-2 pulse-icon"></i>
                <span>Antonio Bellet 193, Oficina 1210, Providencia, RM</span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-telephone text-[#FFFF29] mr-2 pulse-icon"></i>
                <span>+569 6344 1988</span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-envelope-paper text-[#FFFF29] mr-2 pulse-icon"></i>
                <span>contacto@claimy.cl</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4 text-left">Redes Sociales</h5>
            <div className="flex flex-wrap justify-center md:justify-start">
              <ul className="w-1/2 space-y-2">
                <li>
                  <a 
                    href="https://spotify.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:underline decoration-primary"
                  >
                    <i className="bi bi-spotify text-[#FFFF29] mr-2 pulse-icon"></i>Spotify
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/andresmadariaga_" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:underline decoration-primary"
                  >
                    <i className="bi bi-instagram text-[#FFFF29] mr-2 pulse-icon"></i>Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:underline decoration-primary"
                  >
                    <i className="bi bi-facebook text-[#FFFF29] mr-2 pulse-icon"></i>Facebook
                  </a>
                </li>
              </ul>
              <ul className="w-1/2 space-y-2">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/andrés-madariaga" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:underline decoration-primary"
                  >
                    <i className="bi bi-linkedin text-[#FFFF29] mr-2 pulse-icon"></i>LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:underline decoration-primary"
                  >
                    <i className="bi bi-youtube text-[#FFFF29] mr-2 pulse-icon"></i>YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tiktok.com/@andresmadariaga_" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:underline decoration-primary"
                  >
                    <i className="bi bi-tiktok text-[#FFFF29] mr-2 pulse-icon"></i>TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4: Logo */}
          <div className="flex md:hidden w-full md:w-1/4 flex justify-center items-center">
            <img 
              src={logo} 
              alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" 
              className="max-w-[100px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;