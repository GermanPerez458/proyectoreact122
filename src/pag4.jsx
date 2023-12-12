// En Page1.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './pag4e.css';

const Pag4 = () => {
  const songs = [
    'High for This',
 'What You Need',
 'House of Balloons / Glass Table Girls',
 'The Morning',
 'Wicked Games',
 'The Party & The After Party',
 'Coming Down',
 'Loft Music',
 'The Knowing',
 'Twenty Eight',
 'Lonely Star',
 'Life of the Party',
 'Thursday',
 'The Zone (feat. Drake)',
 'Rolling Stone',
 'Valerie',
 'Initiation',
 'Same Old Song (feat. Juicy J)',
 'The Fall',
 'Next',
  ];

  const getRandomSize = () => Math.floor(Math.random() * 12) + 1;
  const getRandomOffset = () => Math.floor(Math.random() * 12);

  return (
    <div>
      <h1>Eventos y Actividades</h1>
      
<p></p>
    <Container>
      <Row>
        <Col>Diciembre 23: Taller de Danza</Col>
        <Col>Diciembre 24: Actividades lúdicas con huerfanos</Col>
      </Row>
      <Row>
        <Col>1 al 3 de enero, torneo de lanzamiento de enanos</Col>
        <Col>2 al 5 de enero: concurso de poesía "Através del Universo"</Col>
        <Col>6 de enero: Acogida de desemparados por Reyes</Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col xs={12} md={8}>
          Febrero 28, Concurso de cuadros al óleo 
        </Col>
        <Col xs={6} md={4}>
          Febrero 14, Concierto "Dos noches de luna azúl"
        </Col>
      </Row>

    <Row>
        <Col xs={6} md={4}>
         lost the faith
        </Col>
        <Col xs={6} md={4}>
          alone again
        </Col>
        <Col xs={6} md={4}>
          Fail again
        </Col>
      </Row>

    <Row>
        <Col xs={6}>Marzo 8, representación escenica de la historia San Benito</Col>
        <Col xs={6}>Marzo 7, representación escenica de la historia San Benito </Col>
      </Row>

    <Row>
      <Col xs={8}> Lost in the Fire</Col>
      <Col xl={6}>The hills</Col>
    </Row>
   
    <div className="tracklist">
      {songs.map((song, index) => (
        <Row key={index} className="mb-3">
          <Col xs={getRandomSize()} md={getRandomSize()} lg={getRandomSize()} xl={getRandomSize()} className={`offset-${getRandomOffset()}`}>
            {song}
          </Col>
        </Row>
      ))}
    </div>

    </Container>

    </div>
  );
}

export default Pag4;
