import React, { useState } from 'react';


export const Cabecera3 = () => {
<<<<<<< HEAD
  const [nombre,setNombre]=useState("Maria del Carmen Fernández");
=======
  const [nombre,setNombre]=useState("Domingo López");
>>>>>>> 14c21578e1accc0b391f1cef1fad505c55d7d96c
  const cambiarNombre=(nuevoNombre:string) =>{
	setNombre(nuevoNombre);
  }
  return (
    <>
      	<h1>Mi nombre es: {nombre}</h1>
      <button onClick={e => cambiarNombre("otro nombre")}>texto2</button>
    </>
  );
};