// En Page1.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';




const Pag7 = () => {
  return (
   
    
    <>
      {
      
      [

        'Casa de Hacienda cuervo',
        'Marte',
        'Piramide de Saberhagen',
        'Kaer Morhen',
        'Lordran',
        'Drangleic',
        'Versalles',
        'Blue Bang',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'aquamarine' ? 'dark' : 'green'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>sitio</Card.Header>
          <Card.Body>
            <Card.Title>{variant} <h5>Espacios y Instalaciones</h5> </Card.Title>
            <Card.Text>
            <h1></h1>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}



  

export default Pag7;
