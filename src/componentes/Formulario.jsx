import React, { useState } from "react";
import '../stylesheet/Formulario.css';
// UUID Permite crear ID unicos, es un paquete externo
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

  const [input, steInput] = useState('');

  const manejarCambio = e => {
    // Cada cambio es registrado con el valor actualizado con target.value
    steInput(e.target.value)
  };

  const manejarEnvio = e => {
    // Prevenir reinicio de pagina por defecto
    e.preventDefault();
    // Crear objeto con el texto introducido en input con un id unico y un booleano false para despuer cambiar la clase del objeto
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  };

  return(
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input 
        className="tarea-input"
        type='text'
        placeholder="Escribe tu Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default Formulario;