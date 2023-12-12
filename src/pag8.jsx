import React, { useState } from 'react';
import './pag8';
import './scss/_accordion.scss';
import './scss/_variables.scss';
const Pag8 = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
  };

  const ordinalSuffixOf = (i) => {
    const j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  };

  return (
    <div className="accordion" id="accordionExample">
      {[1, 2, 3, 4, 5].map((index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={activeButton === index ? 'true' : 'false'}
              aria-controls={`collapse${index}`}
              onClick={() => handleButtonClick(index)}
            >
              Accordion Item #{index}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeButton === index ? 'show' : ''}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Esta será la {ordinalSuffixOf(index)}  sorpresa.</strong> {/* Utiliza la función para obtener sufijo ordinal */}
             <p>
              proximamente: 22/12/24 
              </p>  {/* Agrega tu contenido único aquí */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pag8;



