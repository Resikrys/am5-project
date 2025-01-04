<<<<<<< HEAD
import { useState, useRef } from 'react';
=======
//Home section - sobre mí -> Tailwind version
import { useState } from 'react';
>>>>>>> resikrys
import aboutmePic from '../../../../public/images/aboutmePic.webp';

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(null);
<<<<<<< HEAD
  // Para obtener una referencia al contenedor cuyo tamaño se va a animar
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
=======
>>>>>>> resikrys

  const aboutSections = [
    {
      title: 'Educación',
      content: [
        'Abogado, Licenciado en Ciencias Jurídicas y Sociales. Universidad Bernardo O\'Higgins (2015).',
        'Master en Derecho de la Empresa y Negocios. Pontificia Universidad Católica de Chile (2017).',
      ],
    },
    {
      title: 'Experiencia',
      content: [
        'Abogado en VTR (2015 - 2017).',
        'Jefe Legal en Axity (2017 - 2019).',
        'Coordinador Legal en CNTV (2021 - 2022).',
        'Jefe Legal en Dafiti (2022 - 2023).',
        'Profesor de Derecho en Universidad Autónoma de Chile (2021 - presente).',
        'Profesor de Derecho en Universidad Academia de Humanismo Cristiano (2023 - presente).',
      ],
    },
    {
      title: 'Idiomas',
      content: [
        'Español: Nativo.',
        'Inglés: Avanzado (C1).',
      ],
    },
    {
      title: 'Membresía',
      content: ['Miembro del Colegio de Abogados.'],
      isDisabled: true,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
<<<<<<< HEAD
      <div id="about" className="flex justify-center text-center py-8">
        <h2 className="am5-border text-3xl p-3">Sobre Mí</h2>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="flex justify-center md:w-1/3 w-full">
          <img src={aboutmePic} alt="Foto de Andrés Madariaga" className="object-contain w-full" />
        </div>
        <div className="px-10 md:pt-0 pt-10 md:w-2/3 w-full">
          <div className="mb-4 custom-card">
            <div className="aboutme-button">
              <button
                onClick={() => toggleAccordion(0)}
                className={`accordion-button w-full text-left relative border-0 focus:outline-none ${
                  activeIndex !== 0 ? 'collapsed' : ''
                }`}
              >
                Andrés Madariaga
              </button>
              <div
                ref={(el) => (contentRefs.current[0] = el)}
                className={`mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                style={{
                  maxHeight:
                    activeIndex === 0
                      ? `${contentRefs.current[0]?.scrollHeight}px`
                      : '0px',
                }}
              >
                <p className="text-sm text-gray-700">
                  Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más de 10 años asesorando a empresas internacionales, descubrí una gran necesidad en el mundo legal y de negocios: personas, startups y empresas que no encuentran soluciones legales realmente alineadas con sus desafíos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutSections.map((section, idx) => (
              <div className="mb-4" key={idx}>
                <div className="custom-am5-border">
                  <button
                    onClick={() => toggleAccordion(idx + 1)}
                    disabled={section.isDisabled}
                    className={`accordion-button w-full text-left text-lg text-gray-700 border-0 focus:outline-none ${
                      activeIndex !== idx + 1 ? 'collapsed' : ''
                    } ${section.isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {section.title}
                  </button>
                  <div 
                    ref={(el) => (contentRefs.current[idx + 1] = el)}
                    className={`mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                    style={{
                      maxHeight:
                        activeIndex === idx + 1
                          ? `${contentRefs.current[idx + 1]?.scrollHeight}px`
                          : '0px',
                    }}
                  >
                    <ul className="text-sm text-gray-600 py-4 px-5">
                      {section.content.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
=======
      {/* Título */}
      <div id="about" className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-700 border-primary inline-block p-3 am5-border">Sobre Mí</h2>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Imagen */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img
            src={aboutmePic}
            alt="Foto de Andrés Madariaga"
            className="w-80 h-auto rounded-full shadow-lg"
          />
        </div>

        {/* Acordeón */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Descripción inicial */}
            <div className="text-lg font-bold text-gray-700 cursor-pointer" onClick={() => toggleAccordion(-1)}>
              Andrés Madariaga
            </div>
            {activeIndex === -1 && (
              <p className="mt-4 text-sm text-gray-600">
                Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más de 10 años asesorando a empresas internacionales, descubrí una gran necesidad en el mundo legal y de negocios: personas, startups y empresas que no encuentran soluciones legales realmente alineadas con sus desafíos.
              </p>
            )}
          </div>

          {/* Acordeones de secciones */}
          {aboutSections.map((section, idx) => (
            <div
              key={idx}
              className={`bg-white shadow-lg rounded-lg ${section.isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div
                className={`text-lg font-semibold text-gray-700 p-4 cursor-pointer ${
                  section.isDisabled ? '' : 'hover:bg-gray-100'
                }`}
                onClick={() => !section.isDisabled && toggleAccordion(idx)}
              >
                {section.title}
>>>>>>> resikrys
              </div>
              {activeIndex === idx && (
                <div className="p-4 text-sm text-gray-600">
                  <ul className="list-none space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD
      {/* <div className="w-3/4 mx-auto mt-6 border-t-2 border-gray-300"></div> */}
      <div className='custom-hr rounded mx-auto mt-3'></div>
=======

      {/* Línea divisoria */}
      <div className="custom-hr rounded"></div>
>>>>>>> resikrys
    </div>
  );
}

export default AboutMe;

//**** Probando SolucioneLegales.jsx *****
// import { useState } from 'react';
// import FlipCard from 'reactjs-flip-card';
// import aboutmePic from '../../../../public/images/aboutmePic.webp';
// import logo from '../../../../public/am5-logo.png';

// function AboutMe() {
//   const [showDescription, setShowDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };

//   const solutions = [ //Antes era conts cards (modificar resto -> const solutions)
//     { id: 1, title: 'Corporativo & MA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec erat et arcu eleifend sodales.', img: aboutmePic },
//     { id: 2, title: 'Venture Capital', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu convallis erat tristique feugiat.', img: aboutmePic },
//     { id: 3, title: 'Laboral y Migración', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo eu odio aliquam feugiat.', img: aboutmePic },
//     { id: 4, title: 'Inmobiliario', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus vel augue consectetur tincidunt.', img: aboutmePic },
//     { id: 5, title: 'Impuestos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod neque vitae facilisis hendrerit.', img: aboutmePic },
//     { id: 6, title: 'Litigios y Arbitrajes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ligula at eros bibendum facilisis.', img: aboutmePic },
//     { id: 7, title: 'Insolvencia y Reorganización', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac libero fringilla, dictum turpis non, sagittis sapien.', img: aboutmePic },
//     { id: 8, title: 'Compliance', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi et arcu efficitur pharetra.', img: aboutmePic },
//     { id: 9, title: 'Consumo y Publicidad', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lacus et tortor tempor viverra.', img: aboutmePic },
//     { id: 10, title: 'Propiedad industrial e Intelectual', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac libero fringilla, dictum turpis non, sagittis sapien.', img: aboutmePic },
//     { id: 11, title: 'Bancario Financiero y Fintech', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi et arcu efficitur pharetra.', img: aboutmePic },
//     { id: 12, title: 'Protección de Datos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lacus et tortor tempor viverra.', img: aboutmePic },

//   ];

//   return (
//     <div id="about">
//       {/* Cabecera */}
//       <div className="flex flex-wrap md:flex-nowrap items-center py-8 bg-gray-100">
//         <div className="w-full md:w-2/3">
//           <img src={aboutmePic} alt="Imagen de cabecera de la sección Soluciones legales" className="w-full max-h-96" />
//         </div>
//         <div className="w-full md:w-1/3 px-6 flex flex-col items-start">
//           <h1 className="text-3xl font-bold underline decoration-primary mb-4">Soluciones Legales</h1>
//           {showDescription ? (
//             <p className="text-gray-700 mb-4">
//               Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.
//             </p>
//           ) : null}
//           <button
//             className="bg-dark-grey text-primary py-2 px-4 rounded-full flex items-center gap-2 hover:bg-black"
//             onClick={toggleDescription}
//           >
//             Ver más
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
//             </svg>
//           </button>
//         </div>
//       </div>

//   {/* Grid de Cards */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mb-10 justify-center items-center templateGrid">
//         {solutions.map((solution) => {
//           const cardWidth = "400px"; // Ancho de la carta
//           const cardHeight = "225px"; // Alto de la carta
//           const frontStyle = {
//             background: `url(${solution.img}) no-repeat center center / cover`,
//             borderRadius: '12px',
//             width: cardWidth,
//             height: cardHeight,            
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-end',
//             border: '3px solid #ccc',
//           };

//           const backStyle = {
//             background: '#fff',
//             borderRadius: '12px',
//             width: cardWidth,
//             height: cardHeight,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '1rem',
//             border: '1px solid #ccc',
//             position: 'relative',
//           };

//           return (
//             <FlipCard
//               key={solution.id}
//               flipTrigger='onClick'
//               direction="vertical"
//               frontStyle={frontStyle}
//               backStyle={backStyle}
//               frontComponent={
//                 <div className="bg-gray-200 text-center flex flex-row items-center justify-center gap-2 p-2">
//                 <img src={logo} alt="Logo" className="w-10 h-10 mb-2 logo" />
//                 <p className="text-gray-700 font-semibold">{solution.title}</p>
//               </div>
//               }
//               backComponent={
//                 <div className="flex flex-col justify-center items-center text-center">
//                 <div className='custom-border-box'>
//                 <div className="left-corner" />
//                 <div className="right-corner" />
//                 <h3 className="text-lg font-bold z-10 text-center">{solution.title}</h3>
//                 <p className="text-gray-600 text-sm text-center z-10 mt-2">{solution.description}</p>
//                 </div>
//               </div>
//               }
//             >
//             </FlipCard>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

//Home section - Sobre mí -> Bootstrap version
// import { useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import aboutmePic from '../../../../public/images/aboutmePic.webp';

// function AboutMe() {
//   const [activeKey, setActiveKey] = useState(null);
//   const aboutSections = [
//     {
//       title: 'Educación',
//       content: [
//         '- Abogado, Licenciado en Ciencias Jurídicas y Sociales.',
//         '  Universidad Bernardo O\'Higgins (2015).',
//         '- Master en Derecho de la Empresa y Negocios.',
//         '  Pontificia Universidad Católica de Chile (2017).'
//       ]
//     },
//     {
//       title: 'Experiencia',
//       content: [
//         '- Abogado en VTR (2015 - 2017).',
//         '- Jefe Legal en Axity (2017 - 2019).',
//         '- Coordinador Legal en CNTV (2021 - 2022).',
//         '- Jefe Legal en Dafiti (2022 - 2023).',
//         '- Profesor de Derecho en Universidad Autónoma de Chile (2021 - a la fecha).',
//         '- Profesor de Derecho en Universidad Academia de Humanismo Cristiano (2023 - a la fecha).'
//       ]
//     },
//     {
//       title: 'Idiomas',
//       content: [
//         '- Español: Nativo.',
//         '- Inglés: Avanzado (C1).'
//       ]
//     },
//     {
//       title: 'Membresía',
//       content: ['- Miembro del Colegio de Abogados.'],
//       isDisabled: true
//     }
//   ];

//   return (
//     <div className="flex flex-col">
//       <div id="about" className="text-center py-8">
//         <h2 className="am5-border text-3xl font-bold p-3">Sobre Mí</h2>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center">
//         <div className="flex justify-center mb-6 md:mb-0">
//           <img src={aboutmePic} alt="Foto de Andrés Madariaga" className="w-60 h-auto rounded-full" />
//         </div>
//         <div className="px-6 md:px-12">
//           <div className="mb-4 bg-white shadow-lg rounded-lg p-6">
//             <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
//               <Accordion.Item eventKey="0">
//                 <Accordion.Header className="border-0 text-lg font-bold">
//                   Andrés Madariaga
//                 </Accordion.Header>
//                 <Accordion.Body className="text-sm text-gray-700">
//                   Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más de 10 años asesorando a empresas internacionales, descubrí una gran necesidad en el mundo legal y de negocios: personas, startups y empresas que no encuentran soluciones legales realmente alineadas con sus desafíos.
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {aboutSections.map((section, idx) => (
//               <div className="mb-4" key={idx}>
//                 <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
//                   <Accordion.Item eventKey={String(idx)}>
//                     <Accordion.Header as="button" disabled={section.isDisabled} className="text-lg font-semibold text-gray-700">
//                       {section.title}
//                     </Accordion.Header>
//                     <Accordion.Body className="text-sm text-gray-600">
//                       <ul>
//                         {section.content.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="w-3/4 mx-auto mt-6 border-t-2 border-gray-300"></div>
//     </div>
//   );
// }

// export default AboutMe;