import React, {useState} from "react";
import Formulario from "./Formulario";
import '../stylesheet/ListaDeTareas.css';
import Tarea from "./Tarea";


function ListaDeTareas(){

    const [tareas, setTareas] = useState([]); 

    const agregarTarea = tarea => {
        // Si el texto no esta vacio. Trim permite quitar los espacios del principio y del final de una cadena de texto
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            // hacemos que la tarea que se ingresa quede en primer lugar con el array
            const tareasActualizadas = [tarea, ...tareas];
            // Uso del hook para actualizar el estado
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id) 
        setTareas(tareasActualizadas)
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return(
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className="tareas-listas-contenedor">
              {
                  tareas.map((tarea) => 
                  <Tarea 
                    // Key permite identificar los elementos como unicos en React
                    // Key no se puede pasar como un prop, por eso hay que usar tambien id para poder pasarlo entre compomentes
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    // hay que pasar la funcion como prop para que funcione en otro componente
                    eliminarTarea={eliminarTarea}
                  />

                  )
              }
            </div>
        </>
    )
};

export default ListaDeTareas;