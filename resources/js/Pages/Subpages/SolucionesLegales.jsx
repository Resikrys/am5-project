// Template Soluciones Legales: Header + cabecera (imagen, title, button + descripción) + 4x3 cards reversibles (flipcard effect)
//Libreria flipcard -> https://www.npmjs.com/package/reactjs-flip-card -> npm install reactjs-flip-card
//Demo llibreria -> https://react-flip-card-demo.surge.sh/
import { useState } from 'react';
import FlipCard from 'reactjs-flip-card';
import Header from '../Landing/Header';
import cabeceraSoluciones from '../../../../public/images/cabeceraSoluciones.webp';
import logo from '../../../../public/am5-logo.png';

// import aboutmePic from '../../../../public/images/aboutmePic.webp'; //For trial

function SolucionesLegales() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const solutions = [ //Antes era conts cards (modificar resto -> const solutions)
    { id: 1, title: 'Corporativo & MA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec erat et arcu eleifend sodales.', img: aboutmePic },
    { id: 2, title: 'Venture Capital', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu convallis erat tristique feugiat.', img: aboutmePic },
    { id: 3, title: 'Laboral y Migración', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo eu odio aliquam feugiat.', img: aboutmePic },
    { id: 4, title: 'Inmobiliario', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus vel augue consectetur tincidunt.', img: aboutmePic },
    { id: 5, title: 'Impuestos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod neque vitae facilisis hendrerit.', img: aboutmePic },
    { id: 6, title: 'Litigios y Arbitrajes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ligula at eros bibendum facilisis.', img: aboutmePic },
    { id: 7, title: 'Insolvencia y Reorganización', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac libero fringilla, dictum turpis non, sagittis sapien.', img: aboutmePic },
    { id: 8, title: 'Compliance', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi et arcu efficitur pharetra.', img: aboutmePic },
    { id: 9, title: 'Consumo y Publicidad', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lacus et tortor tempor viverra.', img: aboutmePic },
    { id: 10, title: 'Propiedad industrial e Intelectual', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac libero fringilla, dictum turpis non, sagittis sapien.', img: aboutmePic },
    { id: 11, title: 'Bancario Financiero y Fintech', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi et arcu efficitur pharetra.', img: aboutmePic },
    { id: 12, title: 'Protección de Datos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lacus et tortor tempor viverra.', img: aboutmePic },

  ];

  return (
    <div id="legales">
      {/* Cabecera */}
      <div className="flex flex-wrap md:flex-nowrap items-center py-8 bg-gray-100">
        <div className="w-full md:w-2/3">
          <img src={aboutmePic} alt="Imagen de cabecera de la sección Soluciones legales" className="w-full max-h-96" />
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col items-start">
          <h1 className="text-3xl font-bold underline decoration-primary mb-4">Soluciones Legales</h1>
          {showDescription ? (
            <p className="text-gray-700 mb-4">
              Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.
            </p>
          ) : null}
          <button
            className="bg-dark-grey text-primary py-2 px-4 rounded-full flex items-center gap-2 hover:bg-black"
            onClick={toggleDescription}
          >
            Ver más
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

  {/* Grid de Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mb-10 justify-center items-center templateGrid">
        {solutions.map((solution) => {
          const cardWidth = "400px";
          const cardHeight = "225px";
          const frontStyle = {
            background: `url(${solution.img}) no-repeat center center / cover`,
            borderRadius: '12px',
            width: cardWidth,
            height: cardHeight,            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            border: '3px solid #ccc',
          };

          const backStyle = {
            background: '#fff',
            borderRadius: '12px',
            width: cardWidth,
            height: cardHeight,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #ccc',
            position: 'relative',
          };

          return (
            <FlipCard
              key={solution.id}
              flipTrigger='onClick'
              direction="vertical"
              frontStyle={frontStyle}
              backStyle={backStyle}
              frontComponent={
                <div className="bg-gray-200 text-center flex flex-row items-center justify-center gap-2 p-2">
                <img src={logo} alt="Logo" className="w-10 h-10 mb-2 logo" />
                <p className="text-gray-700 font-semibold">{solution.title}</p>
              </div>
              }
              backComponent={
                <div className="flex flex-col justify-center items-center text-center">
                <div className='custom-border-box'>
                <div className="left-corner" />
                <div className="right-corner" />
                <h3 className="text-lg font-bold z-10 text-center">{solution.title}</h3>
                <p className="text-gray-600 text-sm text-center z-10 mt-2">{solution.description}</p>
                </div>
              </div>
              }
            >
            </FlipCard>
          );
        })}
      </div>
    </div>
  );
}

export default SolucionesLegales;