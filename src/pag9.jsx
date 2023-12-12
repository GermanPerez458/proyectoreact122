import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const colors = {
  primary: '#007BFF', // Azul
  secondary: '#17A2B8', // Azul claro
};

const PageWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const Heading = styled.h1`
  color: ${colors.primary};
`;

const ContactItem = styled.div`
  margin: 10px 0;
`;

const pag9 = () => {
  return (

    <div>
    <PageWrapper>
      <Heading>Contactos y Ubicaciones </Heading>

      <ContactItem>
        <strong>Correo Electrónico:</strong> InfiniteRose@gmail.com
      </ContactItem>
      <ContactItem>
        <strong>Teléfono:</strong> 2-2237708
      </ContactItem>

      <Heading>Ubicaciones</Heading>

      <ContactItem>
        <strong>Oficina central:</strong> 1243 Calle Spooner, La Paz
      </ContactItem>
      <ContactItem>
        <strong>Oficina respaldo:</strong> 456 Avenida Imaginaria, Pueblo Beauclear
      </ContactItem>


    

      <Link to="/">Volver a la Página Principal</Link>
    </PageWrapper>

    <ListGroup>
      <ListGroup.Item disabled>Instagram: OpiumCultureClub</ListGroup.Item>
      <ListGroup.Item>Teléfono: 2238708</ListGroup.Item>
      <ListGroup.Item>Telegram: OcultusMasters</ListGroup.Item>
      <ListGroup.Item>Facebook: MTCentrocultura</ListGroup.Item>
    </ListGroup>



   </div>
  );
};

export default pag9;

