import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import RutaDeHistoria from './RutaDeHistoria';
import RutaDeMision from './RutaDeMision';
const colors = {
  primary: '#FFD700', // Amarillo dorado
  secondary: '#6A5ACD', // Azul púrpura
  accent1: '#E74C3C', // Rojo oscuro
  accent2: '#F39C12', // Naranja oscuro

};

const CenterWrapper = styled.div`
  text-align: center;
  margin: 20px;
  color: ${colors.primary};
`;

const Heading = styled.h1`
  color: ${colors.secondary};
`;

const MissionHeading = styled.h2`
  color: ${colors.accent1};
`;

const Button = styled.button`
  background-color: ${colors.accent2};
  color: black;
  font-size: 25px;
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken(${colors.accent2}, 10%);
  }
`;

const Pag5 = () => {
  return (
    <CenterWrapper>
      <Heading>Ocultos Mundos - Centro Cultural Afroboliviano</Heading>

      <div>
        <h1>Historia y Misión</h1>
      </div>
      <p>
        Bienvenido a Ocultos Mundos, donde celebramos y revalorizamos la rica cultura afroboliviana.
      </p>

      <MissionHeading>Nuestra Historia</MissionHeading>
      <p>
        En los vibrantes paisajes de Bolivia, Ocultos Mundos surge como un faro cultural. Fundado por artistas, activistas y amantes de la cultura afroboliviana, nuestro centro se convierte en un tributo a la diversidad y la creatividad.
      </p>

      <MissionHeading>Nuestra Misión</MissionHeading>
      <p>
        En Ocultos Mundos, nos dedicamos apasionadamente a:
      </p>
      <ul>
        <li>
          <p>
            <strong>Revalorizar la Cultura Afroboliviana:</strong> Rompemos estereotipos y destacamos la riqueza cultural que enriquece nuestra sociedad.
          </p>
        </li>
        <li>
          <p>
            <strong>Fomentar la Inclusión y Diversidad:</strong> Creamos un espacio donde todos son bienvenidos, celebrando y respetando la diversidad.
          </p>
        </li>
        <li>
          <p>
            <strong>Educar a través del Arte:</strong> Utilizamos el arte como una herramienta poderosa para educar, inspirar y conectar a las personas con las historias y experiencias afrobolivianas.
          </p>
        </li>
      </ul>
      <Link to="/RutaDeHistoria">
        <Button>Ir a Historia oculta</Button>
      </Link>
      <Link to="/RutaDeMision">
        <Button>Ir a Misión secreta</Button>
      </Link>

      <div>

      <button onClick={alert('Sin privilegios de conspiración solo se mostrará lo básico')}> Planes de Dominación Mundial</button>
</div>

      <Routes>
        <Route path="/RutaDeHistoria" element={<RutaDeHistoria />} />
        <Route path="/RutaDeMision" element={<RutaDeMision />} />
      </Routes>
    
</CenterWrapper>

  );
};

export default Pag5;
