import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import RutaDeHistoria from './RutaDeHistoria';
import RutaDeMision from './RutaDeMision';

import Historia from './RutaDeHistoria';
import Mision from './RutaDeMision';
import logo from './logo.svg';
import Main from './main';
import Pag10 from './pag10';
import Pag2 from './pag2';
import Pag3 from './pag3';
import Pag4 from './pag4';
import Pag5 from './pag5';
import Pag6 from './pag6';
import Pag7 from './pag7';
import Pag8 from './pag8';
import Pag9 from './pag9';





const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Sea usted bienvenido a Ocultus Mundos, edición IX
    </p>
    <h5>Tome un paseo breve por nuestro meta espacio cultural</h5>
    <p>
    <p>
      <p></p>
    </p>
  </p>
  <div className="enlazados">
  <button className="button-78" role="button"><Link to="/main"> Ideosincracia de la Identidad</Link></button> <p></p>
  < button className="button-78" role="button"><Link to="/pag2">Galería de Arte</Link> </button>
  <button className="button-78" role="button"><Link to="/pag3">Exposiciones </Link> </button><p></p>
  <button className="button-78" role="button"> <Link to="/pag4"> Eventos y Actividades </Link> </button>
  
  <button className="button-78" role="button" ><Link to="/pag5">Historia y Misión</Link> </button>
    <button className="button-78" role="button">   <Link to="/pag6">Talleres y Cursos</Link> </button> <p></p>
    <button className="button-78" role="button">   <Link to="/pag7">Espacios e Instalaciones</Link> </button>
    <button className="button-78" role="button">   <Link to="/pag8">Noticias y Blog Cultural</Link> </button>
    <button className="button-78" role="button">   <Link to="/pag9">Contacto y Ubicación</Link> </button> <p></p>
    <button className="button-78" role="button">    <Link to="/pag10">Colaboradores y Patrocinadores</Link> </button>
  
  
  </div>
  
  <p>
    <p>
      <p></p>
    </p>
  </p>
  </header>
);

// Footer Component
const Footer = () => (
  <footer>
    <p></p>
    <h3>Centro Cultural ocultus mundos IXXIIMMMXXIL</h3>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="App">
     
        <Header />

        <main>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/pag2" element={<Pag2 />} />
            <Route path="/pag3" element={<Pag3 />} />
            <Route path="/pag4" element={<Pag4 />} />
            <Route path="/pag5" element={<Pag5 />} />
            <Route path="/pag6" element={<Pag6 />} />
            <Route path="/pag7" element={<Pag7 />} />
            <Route path="/pag8" element={<Pag8 />} />
            <Route path="/pag9" element={<Pag9 />} />
            <Route path="/pag10" element={<Pag10 />} />
            <Route path="/" exact component={Pag5} />
      <Route path="/RutaDeHistoria" component={RutaDeHistoria} />
      <Route path="/RutaDeMision" component={RutaDeMision} />
      <Route path="/RutaDeHistoria" component={Historia} />
      <Route path="/RutaDeMision" component={Mision} />
      <Route path="/contactos" component={Pag9} />
      <Route path="/RutaDeHistoria" element={RutaDeHistoria} />
      <Route path="/RutaDeMision" element={RutaDeMision} />
    
          </Routes>
        
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
