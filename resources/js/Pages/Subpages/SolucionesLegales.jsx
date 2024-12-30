// Template Soluciones Legales: Header + cabecera (imagen, title, button + descripción) + 4x3 cards reversibles (flipcard effect)
//Libreria flipcard -> https://react-flip-card-demo.surge.sh/ -> npm install reactjs-flip-card
import { useState } from 'react';
import FlipCard from 'reactjs-flip-card';
import Header from './Header';
import cabeceraSoluciones from '../../../../public/images/cabeceraSoluciones.webp';
import logo from '../../../../public/am5-logo.png';


function SolucionesLegales() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const solutions = [ //Antes era conts cards (modificar resto -> const solutions)
    { id: 1, title: 'Venture Capital', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec erat et arcu eleifend sodales.' }, 
    { id: 2, title: 'Compliance Legal', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu convallis erat tristique feugiat.' },
    { id: 3, title: 'Derecho Corporativo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo eu odio aliquam feugiat.' },
    { id: 4, title: 'Asesorías Tributarias', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus vel augue consectetur tincidunt.' },
    { id: 5, title: 'Litigación Estratégica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod neque vitae facilisis hendrerit.' },
    { id: 6, title: 'Contratos Comerciales', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ligula at eros bibendum facilisis.' },
    { id: 7, title: 'Fusiones y Adquisiciones', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac libero fringilla, dictum turpis non, sagittis sapien.' },
    { id: 8, title: 'Propiedad Intelectual', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi et arcu efficitur pharetra.' },
    { id: 9, title: 'Arbitraje Comercial', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lacus et tortor tempor viverra.' },
  ];

  return (
    <div id="legales">
      <Header />
      {/* Cabecera */}
      <div className="flex flex-wrap md:flex-nowrap items-center py-8 bg-gray-100">
        <div className="w-full md:w-2/3">
          <img src={cabeceraSoluciones} alt="Imagen de cabecera de la sección Soluciones legales" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col items-start">
          <h1 className="text-3xl font-bold underline decoration-primary mb-4">Soluciones Legales</h1>
          {showDescription ? (
            <p className="text-gray-700 mb-4">
              Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.
            </p>
          ) : null}
          <button
            className="bg-black text-white py-2 px-4 rounded-md flex items-center gap-2"
            onClick={toggleDescription}
          >
            Ver más
            <span className="transform rotate-90">&uarr;</span>
          </button>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((solution) => (
          <FlipCard key={solution.id} flipDirection="vertical" className="h-full">
            {/* Front Card */}
            <div className="front-card h-full bg-white border border-gray-300 rounded-xl overflow-hidden flex flex-col">
              <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/card${solution.id}.webp')` }}>
                {/* Imagen ocupando la mayor parte de la carta */}
              </div>
              <div className="bg-gray-200 text-center p-4 flex flex-col items-center justify-center">
                <img src={logo} alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" className="w-10 h-10 mb-2" />
                <p>{solution.title}</p>
              </div>
            </div>

            {/* Back Card */}
            <div className="back-card h-full bg-white border border-gray-300 rounded-xl overflow-hidden p-4 flex flex-col justify-center items-center relative">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-primary opacity-50 rounded-lg"></div>
              <h3 className="text-lg font-bold z-10">{card.title}</h3>
              <p className="text-gray-600 text-sm text-center z-10 mt-2">{card.description}</p>
            </div>
          </FlipCard>
        ))}
      </div>
    </div>
  );
}

export default SolucionesLegales;
