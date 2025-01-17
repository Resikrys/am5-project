//Home section - Servicios
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Carousel } from 'react-bootstrap';
import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid';
import img1 from '../../../../public/images/img1.jpg';
import img1filter from '../../../../public/images/img1filter.jpg';
import img2 from '../../../../public/images/img2.jpg';
import img2filter from '../../../../public/images/img2filter.jpg';
import img3 from '../../../../public/images/img3.jpg';
import img3filter from '../../../../public/images/img3filter.jpg';
import img4 from '../../../../public/images/img4.jpg';
import img4filter from '../../../../public/images/img4filter.jpg';
import img5 from '../../../../public/images/img5.jpg';
import img5filter from '../../../../public/images/img5filter.jpg';
import backgroundImage from '../../../../public/images/bg-services-section.webp';

function ServiciosCarousel() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const estilo = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // Información de cada carta
  const services = [
    {
      title: "Soluciones legales.",
      description: "Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.",
      imgDefault: img1filter,
      imgHover: img1,
      route: "legales"
    },
    {
      title: "Soluciones de negocio y backoffice.",
      description: "Ofrecemos soluciones de negocio y backoffice diseñadas para impulsar el crecimiento diario de tu empresa, optimizando operaciones y fortaleciendo cada área clave para tu éxito.",
      imgDefault: img2filter,
      imgHover: img2,
      route: "negocios"
    },
    {
      title: "Comunicaciones estratégicas.",
      description: "Brindamos soluciones de comunicación estratégica que fortalecen tu imagen y marca, mejoran tu reputación y anticipan riesgos legales y regulatorios.",
      imgDefault: img3filter,
      imgHover: img3,
      route: "comunicaciones"
    },
    {
      title: "Capacitación y coach empresarial.",
      description: "Ofrecemos capacitación y coaching empresarial personalizados para potenciar habilidades, mejorar la comunicación y transformar la cultura organizacional.",
      imgDefault: img4filter,
      imgHover: img4,
      route: "coach"
    },
    {
      title: "Sostenibilidad y RCE.",
      description: "Potenciamos la sostenibilidad empresarial y el trabajo pro bono, impulsando un impacto positivo en comunidades y promoviendo prácticas responsables.",
      imgDefault: img5filter,
      imgHover: img5,
      route: "sostenibilidad"
    }
  ];

  //Tomar medidas de la pantalla (trial)
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Manejo de navegación manual
  const handlePrev = () => setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));


  return (
    <div id='services' className="flex flex-col">

      <div className="flex justify-center text-center py-4">
        <h2 className="am5-border p-3 text-3xl text-gray-600">Servicios</h2>
      </div>

      <div className='max-w-6xl mx-auto text-center px-10 md:px-0'>
        <div className='custom-border-box'>

          <div className="left-corner" />
          <div className="right-corner" />

          <p className='text-muted'>
            En AM5 ofrecemos soluciones estratégicas para personas, startups y empresas que buscan
            apoyo integral en el mundo legal, de negocios y comunicación pública. Nos especializamos en:
          </p>

        </div>
      </div>

      {/* Botones de navegación con iconos */}
      <div className="flex justify-center items-center gap-3 mb-4">
        <button onClick={handlePrev} className="rounded-full p-2 inline-block bg-gray-900" id='carousel-btn-back'>
          <BackwardIcon className="h-6 w-6 text-[#FFFF29]" />
        </button>
        <div className='rounded-full border border-black px-4 py-2 font-semibold'>Desliza</div>
        <button onClick={handleNext} className="rounded-full p-2 inline-block bg-gray-900" id='carousel-btn-next'>
          <ForwardIcon className="h-6 w-6 text-[#FFFF29]" />
        </button>
      </div>

      {/* Slider */}
      <div className='carousel-container'>
        <Carousel
          fade
          className='custom-carousel'
          style={estilo}
          activeIndex={index}
          onSelect={setIndex}
          indicators={true}
          controls={false} // Oculta controles prev y next por defecto
          interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar)
        >
          {services.map((_, idx) => (
            <Carousel.Item key={idx}>
              <div className="flex justify-center gap-4">
                {services
                  .slice(index, index + (isSmallScreen ? 1 : 3)) //Medidas pantalla
                  .concat(services.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - services.length))) //Medidas pantalla
                  .map((service, subIdx) => {
                    const isHovered = !isSmallScreen && hoveredCard === subIdx; // Hover solo en pantallas grandes

                    return (
                      <div
                        className={`carousel-card bg-white rounded shadow-md text-center mb-12 ${hoveredCard === subIdx ? 'hovered' : ''}`} //Correcting slider trial
                        key={subIdx}
                        style={{ width: '25rem', transition: 'transform 0.3s' }}
                        onMouseEnter={() => !isSmallScreen && setHoveredCard(subIdx)} // Marca la carta en hover
                        onMouseLeave={() => setHoveredCard(null)}  // Restablece el estado
                      >
                        <img
                          className="card-img-top w-full h-full object-cover"
                          variant="top"
                          src={isSmallScreen ? service.imgHover : (isHovered ? service.imgHover : service.imgDefault)}
                          alt={service.title}
                        />
                        <div className="p-4">
                          <h5 className="text-xl text-gray-900 mb-2">{service.title}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                          {/* <button className="custom-btn-carousel px-3 py-1.5 text-white bg-blue-500 rounded hover:bg-blue-600" href={service.link}>Ver más</button> */}
                          <Link
                            href={route(service.route)}
                            className="custom-btn-carousel px-3 py-1.5 text-white bg-blue-500 rounded hover:bg-blue-600"
                          >
                            Ver más
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='custom-hr rounded mx-auto'></div>
      {/* Animación para elevar la carta central */}
      <style>{`
        .hovered {
          transform: translateY(-10px); /* Eleva la carta al hacer hover */
        }
      `}</style>
    </div>
  );
}

export default ServiciosCarousel;