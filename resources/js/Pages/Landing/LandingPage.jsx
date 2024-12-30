import React from 'react';

import Header from './Header';
import Cabecera from './Cabecera';
import AboutMe from './AboutMe';
import Servicios from './Servicios';
import Media from './Media';
import Contacto from './Contacto';
import Footer from './Footer';
import { Route } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Header />
            <Cabecera />
            <AboutMe />
            <Servicios />
            {/*<Media />*/}
            {/* <Contacto /> */}
            <Footer />
        </div>
    );
};

export default LandingPage;

//Trials
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SolucionesLegales from '../Subpages/SolucionesLegales';
// import Header from './Header';
// import Cabecera from './Cabecera';
// import AboutMe from './AboutMe';
// import Servicios from './Servicios';
// import Media from './Media';
// import Contacto from './Contacto';
// import Footer from './Footer';


// const App = () => {
//   return (
//     <div className='LandingPage'>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Cabecera />
//             <AboutMe />
//             <Servicios />
//             <Media />
//             <Contacto />
//           </>
//         } />
//         <Route path="/legales" element={<SolucionesLegales />} />
//         {/* <Route path="/news" element={<News />} /> */}
//       </Routes>
//       <Footer />
//     </Router>
//     </div>
//   );
// };

// export default App;