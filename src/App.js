import './App.css';
import freeCodeCampLogo from './img/FreeCodeCamp_logo.svg.png'
import Tarea from './componentes/Tarea'
import Formulario from './componentes/Formulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
       <div className='freecodecamp-logo-contenedor'>
         <img 
         className='freecodecamp-logo' 
         src={freeCodeCampLogo} 
         alt="Logo de freeCodeCamp" 
         />
       </div>
       <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          
          <ListaDeTareas />
          
       </div>
    </div>
  );
}

export default App;
