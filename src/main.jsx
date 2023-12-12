import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import king from './imagenes/king.jpg';
import portal from './imagenes/portal.jpg';
import portal2 from './imagenes/portal2.jpg';
import './pag1e.css';
const main = () => {
  const backgroundStyle = {
    backgroundImage: `url('src/imagenes/fondo.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px',
  };
  return (
    <div className="main" style={backgroundStyle}>
      <h1>Identidad, identidades, identiquis</h1>
     <h3> El centro cultural Ocultus Mundus es un espacio ficticio que se encarga de promover, revalorizar y el arte del pueblo afroboliviano así como visibilizarlos</h3>

     <div style={backgroundStyle}>
     

    <Figure>
      <Figure.Image
        width={271}
        height={280}
        alt="271x280"
        src={portal}
      />
      <Figure.Caption>
      <h4>  En una sociedad donde una cultura es tan invisible que puede hacerse pasar por extranjeros en su propia tierra, se debe encender las brasas del conocimiento y visibilidad para crear puentes culturales
      </h4></Figure.Caption>
    </Figure>
<p>.</p>
    <Figure>
      <Figure.Image
      width={600}
      height={450}
      alt='life and life'
      src={portal2}
      />
      <Figure.Caption>
        <h4>
        ¿como despues de más de 500 años acá aun hay gente que nos toma por extraños? ¿acaso el afroboliviano no tiene derecho a tener patria? Por supuesto que tenemos.</h4>
        </Figure.Caption>
    </Figure>

  <Figure>
      <Figure.Image
      width={600}
      height={450}
      alt='life and life'
      src={king}
      />
      <Figure.Caption>
        <h3>

          Internados entre los valles subtropicales del departamento de La Paz se encuentra lo que según la BBC es uno de los ultimos reinos en américa, el pueblo afro; no obstante y hablando desde mi opinión, se falla al querer considerar uno solo al pueblo afro. Claro, tuvimos que unirnos para sobrevivir, para enfrentar un mal mayor, para buscar el mal menor...no obstante, no todos los afros tienen los mismos ancestros ni esos ancestros el mismo origen, El comentario de la BBc surge a la existencia dedescendeintes directos de antiguos monarcas africanos en los yungas, tal como el caso de Julio Bonifaz Pinedo. Es un ejemplo de como de sanguinario fue el traslado que esclavo y príncipe acabaron hace sientos de años esclavizados lado a lado...
          <p></p>
          Mi discrepancia surge en esta unificación pues aquellos que llegaron vinieron mezclados, Africa es un continente enorme, con muchas, muchímas culturas, lenguas, países, costumbres, dialectos...hasta el día de hoy uno de los mayores prejuicios que azota la sociedad es creer que todos  aquellos que fueron sacados de sus tierras hablaban el mismo idioma; eran extraños entre ellos; estaban mayormente solos y mezclados con gente que hablaba un idoma aparte... 
          <p></p>
          y así como no todos los que llegaron eran de un solo territorio, no todos los que estamos venimos de un solo lugar; si bien los yungas sería una especie de capital, la verdad es que hay comunidades afro amplias tanto en Cochabamba, Santa Cruz e incluso en Chuquisaca...por lo mimso, hemos avanzado de formas distintas, teniendo que aprender a sobrellevar que si de por si somos pocos y la gente nos mire con rescelo por ser diferentes, entre nosotros también somos diferentes; 
           <p></p>
          así al final de día. si bien se comparten ciertos detalles, también existen determinadas diferencias.


        </h3>

    </Figure.Caption>

    </Figure>

    </div>

    </div>


  );
}
export default main;


