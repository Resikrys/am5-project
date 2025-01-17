import { useState, useRef } from 'react';
import aboutmePic from '../../../../public/images/aboutmePic.webp';

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(null);
  // Para obtener una referencia al contenedor cuyo tamaño se va a animar
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const aboutSections = [
    {
      title: 'Educación',
      content: [
        '- Abogado, Licenciado en Ciencias Jurídicas y Sociales.',
        '  Universidad Bernardo O\'Higgins (2015).',
        '- Master en Derecho de la Empresa y Negocios.',
        '  Pontificia Universidad Católica de Chile (2017).'
      ]
    },
    {
      title: 'Experiencia',
      content: [
        '- Abogado en VTR (2015 - 2017).',
        '- Jefe Legal en Axity (2017 - 2019).',
        '- Coordinador Legal en CNTV (2021 - 2022).',
        '- Jefe Legal en Dafiti (2022 - 2023).',
        '- Profesor de Derecho en Universidad Autónoma de Chile (2021 - a la fecha).',
        '- Profesor de Derecho en Universidad Academia de Humanismo Cristiano (2023 - a la fecha).'
      ]
    },
    {
      title: 'Idiomas',
      content: [
        '- Español: Nativo.',
        '- Inglés: Avanzado (C1).'
      ]
    },
    {
      title: 'Membresía',
      content: ['- Miembro del Colegio de Abogados.'],
      isDisabled: true
    }
  ];

  return (
    <div className="flex flex-col md:mx-16">
      <div id="about" className="flex justify-center text-center py-8">
        <h2 className="am5-border p-3 text-3xl text-gray-600">Sobre Mí</h2>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="flex justify-center md:w-1/3 w-full px-10 md:px-0">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="w-3/4 mx-auto mt-6 border-t-2 border-gray-300"></div> */}
      <div className='custom-hr rounded mx-auto mt-3'></div>
    </div>
  );
}

export default AboutMe;