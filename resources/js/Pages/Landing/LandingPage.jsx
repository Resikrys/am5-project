import React from 'react';

import Header from './Header';
import Cabecera from './Cabecera';
import AboutMe from './AboutMe';
import Servicios from './Servicios';
import Media from './Media';
import Contacto from './Contacto';
import Footer from './Footer';
import { Head } from "@inertiajs/react";

const LandingPage = () => {
    return (
        <>
            <Head title="Andrés Madariaga" />
            <div className="LandingPage">
                <Header />
                <Cabecera />
                <AboutMe />
                <Servicios />
                <Media />
                <Contacto />
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
