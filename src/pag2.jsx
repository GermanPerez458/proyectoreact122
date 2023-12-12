import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import im1 from './imagenes/im1.jpg';
import im10 from './imagenes/im10.jpg';
import im2 from './imagenes/im2.jpg';
import im3 from './imagenes/im3.jpg';
import im4 from './imagenes/im4.jpg';
import im5 from './imagenes/im5.jpg';
import im6 from './imagenes/im6.jpg';
import im8 from './imagenes/im8.jpg';
import im9 from './imagenes/im9.jpg';
import './pag2e.css';
const Pag2 = () => {
return (
    <div className="Galery">
    <h1>Galería de Arte</h1>
    <p>
      ...
    </p>
    <Carousel>
        <Carousel.Item>
          <img src={im1} alt="First slide" />
          <Carousel.Caption>
            <h3>Artista: </h3>
            <p>Sharon Perez.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Artista: </h3>
            <p>Sharon Perez</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Artista:</h3>
            <p>Juan José Toro Montoya </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p >.</p>
      <p >..</p>
      <Carousel>
        <Carousel.Item>
          <img src={im4} alt="First slide" />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im5} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im6} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p >.</p>
      <p >..</p>
      <Carousel>
        <Carousel.Item>
          <img src={im9} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im8} alt="Second slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im10} alt="Third slide" />
          <Carousel.Caption>
            <h3>Fuente:</h3>
            <p>Los tiempos </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p >.</p>
      <p >..</p>

      <Carousel>
        <Carousel.Item>
          <img src={im1} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im8} alt="Second slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im5} alt="Third slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      <p >.</p>
      <p >..</p>
      <p>
        <center>
        <h3>
          
        

          Obras que representan historias y vivencias del pueblo afroboliviano en Bolivia


        </h3>
        <p>
          ...
        </p>
        </center>
      </p>
    </div>
);
}

export default Pag2;