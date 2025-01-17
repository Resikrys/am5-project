import { Link } from '@inertiajs/react';
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import mediaNews from "../../../../public/images/media-noticias-img.webp";
import mediaContenidos from "../../../../public/images/media-contenidos-img.webp";
import mediaRedes from "../../../../public/images/media-rrss-img.webp";

function Media() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Actualizar tamaño de pantalla dinámicamente
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Información de las cartas
  const mediaItems = [
    {
      title: "Noticias",
      imgDefault: mediaNews,
      imgHover: mediaNews,
      route: "noticias",
    },
    {
      title: "Contenidos",
      imgDefault: mediaContenidos,
      imgHover: mediaContenidos,
      route: "blogs.published",
    },
    {
      title: "Redes Sociales",
      imgDefault: mediaRedes,
      imgHover: mediaRedes,
      route: "rrss",
    },
  ];

  // // Control de navegación del carousel
  // const handlePrev = () => setIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  // const handleNext = () => setIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));

  return (
    <div id="media" className="flex flex-col mx-16">

      <div className="flex justify-center text-center py-4">
        <h2 className="am5-border p-3 text-3xl text-gray-600">Media</h2>
      </div>

      {/* Botones de navegación */}
      {/* <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <Button variant="dark" onClick={handlePrev} className="rounded-circle p-2" id="carousel-btn-back">
          <i className="bi bi-skip-start"></i>
        </Button>
        <div className="rounded-5 border border-black px-4 py-2 fw-semibold">Desliza</div>
        <Button variant="dark" onClick={handleNext} className="rounded-circle p-2" id="carousel-btn-next">
          <i className="bi bi-skip-end"></i>
        </Button>
      </div> */}

      {/* Slider */}
      <div className="carousel-container">
        <Carousel
          fade
          className="custom-carousel"
          activeIndex={index}
          onSelect={setIndex}
          indicators={true}
          controls={false}
          //interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar)
        >
          {mediaItems.map((_, idx) => (
            <Carousel.Item key={idx}>
              <div className="flex justify-center gap-4">
                {mediaItems
                  .slice(index, index + (isSmallScreen ? 1 : 3))
                  .concat(
                    mediaItems.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - mediaItems.length))
                  )
                  .map((item, subIdx) => (
                    <div
                      className="text-center mb-12 media-card rounded"
                      key={subIdx}
                      onMouseEnter={() => setHoveredCard(subIdx)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Imagen que ocupa toda la carta */}
                      <img
                        className="card-img-top w-full h-full object-cover"
                        src={hoveredCard === subIdx ? item.imgHover : item.imgDefault}
                        alt={item.title}
                      />
                      {/* Botón superpuesto */}
                      <div className="media-card-overlay">
                        <Link
                          href={route(item.route)}
                          className="media-card-btn"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='custom-hr rounded mx-auto mt-3'></div>
    </div>
  );
};

export default Media;