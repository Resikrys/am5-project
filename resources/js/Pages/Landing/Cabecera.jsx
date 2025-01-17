//Home: Imagen cabecera
import React, { useState, useEffect } from 'react';
import am5logo from '../../../../public/am5-logo.png';
import largeImage from '../../../../public/images/imagenhome.webp';
import smallImage from '../../../../public/images/imagenhome-small.webp';

function Cabecera() {

    const [backgroundImage, setBackgroundImage] = useState(largeImage);
    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(smallImage);
            } else {
                setBackgroundImage(largeImage);
            }
        };

        // Actualiza la imagen al cargar el componente
        updateBackgroundImage();

        // Agrega un event listener para actualizar la imagen en el cambio de tamaño de la ventana
        window.addEventListener('resize', updateBackgroundImage);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, []);


    return (
        <>
            <section
                id="inicio"
                className="cabecera"
                data-component="cabecera"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="text-center items-end">
                    {/* Contenido en la parte derecha */}
                    <div className="box-cabecera">
                        <div className="flex flex-row items-center justify-end gap-3">
                            <img
                                className='hidden md:flex ps-0'
                                src={am5logo}
                                alt="Logo de AM5, startup de soluciones legales y comunicación estratégica."
                                fluid
                            />
                            <div className="right-corner"></div>
                            <h1 className="px-3 text-gray-600">
                                Soluciones legales<br />
                                Negocios<br />
                                Asuntos Públicos
                            </h1>
                        </div>
                    </div>

                </div>
                {/* <div className='cabecera-hr'></div> */}

            </section>
            <div className='custom-hr rounded mx-auto'></div>
        </>
    );
}

export default Cabecera;