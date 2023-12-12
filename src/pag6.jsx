
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './pag6e.css';


const Pag6 = () => {
  const [formData, setFormData] = useState({
    apellidos: '',
    nombres: '',
    email: '',
    celular: '',
    check: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Registrado');
  };
  return (
    <div className="tab">
      <h1>Talleres y Cursos</h1>
      <p>................................</p>
      <h3>Próximamente:
        <p></p>
        Taller potenciador de sentidos
        <p></p>
        <p>Fecha:  7 de diciembre de 2077</p>
        <p>Hora:  17:30 - 20:00</p>
        <p>Entrada: Gratis</p>
      </h3>
      <div className="registro">
        <h3> Regístrese Ahora :D </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="apellidos">
            <Form.Label htmlFor="apellidos">Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellidos"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombres">
            <Form.Label htmlFor="nombres">Nombres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombres"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduzca su email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Nosotros nunca compartiremos su email con nadie mas.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="celular">
            <Form.Label>Número Celular</Form.Label>
            <Form.Control
              type="int"
              placeholder="Celular"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="check">
            <Form.Check
              type="checkbox"
              label="¿es mayor de 15 años?"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="matricula">
        <h3>Datos registrados:</h3>
        <p>Apellidos: {formData.apellidos}</p>
        <p>Nombres: {formData.nombres}</p>
        <p>Email: {formData.email}</p>
        <p>Celular: {formData.celular}</p>
        <p>Aceptó términos: {formData.check ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
};
export default Pag6;