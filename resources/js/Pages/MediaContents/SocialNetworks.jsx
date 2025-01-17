// Template Soluciones Legales: Header + cabecera (imagen, title, button + descripción) + 4x3 cards reversibles (flipcard effect)
//Libreria flipcard -> https://www.npmjs.com/package/reactjs-flip-card -> npm install reactjs-flip-card
//Demo llibreria -> https://react-flip-card-demo.surge.sh/
import { useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import Header from '../Landing/Header';
import logo from '../../../../public/am5-logo.png';
import aboutmePic from '../../../../public/images/aboutmePic.webp';
import BackgroundImage from '../../../../public/images/soluciones-legales.webp';
import CorporateImage from '../../../../public/images/corporate-building.webp';

const SocialCards = ({ title, description, button, href, image }) => {
    const cardStyles = {
        front: {
            background: `url(${image}) no-repeat center center / cover`,
            borderRadius: '12px',
            width: '400px',
            height: '225px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            border: '3px solid #ccc',
        },
        back: {
            background: '#fff',
            borderRadius: '12px',
            width: '400px',
            height: '225px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #ccc',
        }
    };

    return (
        <ReactFlipCard
            flipTrigger="onHover"
            direction="vertical"
            frontStyle={cardStyles.front}
            backStyle={cardStyles.back}
            frontComponent={
                <div className="bg-gray-200 text-center flex flex-row items-center justify-center gap-2 p-2">
                    <img src={logo} alt="Logo" className="w-10 h-10 logo" />
                    <p className="text-gray-700 font-semibold m-0">{title}</p>
                </div>
            }
            backComponent={
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="custom-border-box">
                        <div className="left-corner" />
                        <div className="right-corner" />
                        <h3 className="text-lg font-bold z-10 text-center">{title}</h3>
                        <p className="text-gray-600 text-sm text-center z-10 mt-2">{description}</p>
                        <button className="bg-transparent hover:bg-primary text-dark font-bold py-2 px-4 border border-primary border-opacity-100 rounded-full shadow-lg transition duration-300 ease-in-out text-decoration-none">
                            <a href={href}>{button}</a>
                        </button>
                    </div>
                </div>
            }
        />
    );
};

const ServiceIntro = ({ showDescription, toggleDescription }) => (
    <div className="flex flex-wrap md:flex-nowrap items-center bg-white">
        <div className="w-full md:w-2/3">
            <img src={BackgroundImage} alt="Imagen de cabecera de la sección Soluciones legales" className="w-full max-h-96" />
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col items-start">
            <h1 className="text-3xl font-semibold underline decoration-primary mb-4">Nuestras redes sociales</h1>
            {showDescription && (
                <p className="text-gray-700 mb-4">
                    Conéctate conmigo en mis redes sociales y sé parte de mi comunidad de AM5. En AM5, te brindo contenido exclusivo, consejos y trucos para mejorar tus habilidades y alcanzar tus objetivos. ¡Sigue mis redes sociales para estar al día de mis últimas publicaciones y conectarte conmigo en Instagram, Facebook, TikTok y LinkedIn!
                </p>
            )}
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
);

const LEGAL_SOLUTIONS = [
    { id: 1, title: 'Instagram', description: 'Descubre mis consejos y trucos para mejorar tus habilidades y alcanzar tus objetivos!', button: 'Sigue mis consejos', href:'https://instagram.com/andresmadariaga_', image: CorporateImage },
    { id: 2, title: 'Facebook', description: 'Únete a mi comunidad y obtén acceso a mis consejos y recursos para mejorar tus habilidades y alcanzar tus objetivos!', button: 'Únete a mi comunidad - Próximamente', href:'', image: aboutmePic },
    { id: 3, title: 'TikTok', description: 'Ve mis consejos y trucos para mejorar tus habilidades y alcanzar tus objetivos en mis videos!', button: 'Ve mis videos', href:'https://tiktok.com/@andresmadariaga_', image: aboutmePic },
    { id: 4, title: 'LinkedIn', description: 'Conecta conmigo y obtén acceso a mis consejos y recursos para mejorar tus habilidades y alcanzar tus objetivos en la industria!', button: 'Conecta conmigo', href:'https://www.linkedin.com/in/andrés-madariaga', image: aboutmePic },
];

const Blogs = () => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div id="blogs">

            <Header />

            <ServiceIntro
                showDescription={showDescription}
                toggleDescription={() => setShowDescription(!showDescription)}
            />

            <div className="flex justify-center items-center gap-6 py-10 text-center flex-wrap">
                {LEGAL_SOLUTIONS.map(solution => (
                    <SocialCards
                        key={solution.id}
                        title={solution.title}
                        description={solution.description}
                        button={solution.button}
                        href={solution.href}
                        image={solution.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blogs;