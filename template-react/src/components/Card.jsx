import React from 'react'


const Card = ({ nombreMascota, especieMascota }) => {
  return (

    <div className='Card'>

      <h2>Información de la mascota</h2>
      <p> <strong>Nombre:</strong>{nombreMascota}</p>
      <p><strong>Especie:</strong> {especieMascota}</p>
    </div>
  );
};

export default Card;