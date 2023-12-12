// En Page1.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import icon from './imagenes/icon.jpg';
import './pag10e.css';
const Pag10 = () => {
  const elementos = ["https://images.app.goo.gl/yKiHjRD2iBHLNqFLA", "https://elpotosi.net/img/contents/images_980/2021/06/22/c71bb99f-bb8b-40c0-8c78-f73f1d9dac73.jpg", "https://images.app.goo.gl/wbL8rrHyGd6YCoibA","https://images.app.goo.gl/7vnN3JnCvajmML5G8","https://muywaso.com/activistas-artistas-y-academicas-14-mujeres-afrobolivianas-que-debes-conocer/", "https://www.irfabolivia.org/sharon-perez-muestra-un-poco-de-la-historia-del-pueblo-afroboliviano-a-traves-de-su-exposicion-en-la-manzana-1/","https://fb.watch/oRdrs8S6Rp/"];

return (
    <div className='zaza'>
      <center>
      <h1>Autor</h1>
      <h5>Autor: "Edy German Perez Calcina"</h5>
      <h5>ci: 13970355</h5>
  
    <table className="tableglass">
      <tbody>
        <tr>
          <td> </td>
          <td><img src={icon} alt="First slide" /></td>
          <td>"no puedes controlar su miedo o  sus prejuicios,
            <p></p>solo puedes controlar tu indiferencia"</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </center>
    <h1>Creditos</h1>

    las imagenes presentadas son sacadas de las siguientes páginas:

    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}
    </ul>



      
    </div>
  );
}

export default Pag10;
