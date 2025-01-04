//Home: Imagen cabecera
import am5logo from '../../../../public/am5-logo.png';

function Cabecera() {
    return (
        <>
            <section
                id="inicio"
                className="cabecera"
                data-component="cabecera"
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
<<<<<<< HEAD
            <div className='custom-hr rounded mx-auto'></div>
=======
            <div className='custom-hr-cabecera rounded'></div>
>>>>>>> resikrys
        </>
    );
}

export default Cabecera;