
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Comp from './Comp';
import encuentroVideo from './imagenes/encuentro.mp4';
const Pag3 = () => {
  return (
    <div>
      <h1>Exposiciones</h1>

      <Comp />

      <h2> Encuentro</h2>
      <p>

      Archivo y Biblioteca Nacionales de Bolivia
      Aproximación al uso de fuentes del ABNB en las investigaciones sobre el pueblo afroboliviano”, con el objetivo de dar a conocer la riqueza documental que dio origen a la cultura ancestral Afroboliviana

      </p>
      <video width="640" height="360" controls>
        <source src={encuentroVideo} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

    </div>
  );
}

export default Pag3;
