// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar'; // Importa el componente de la barra superior
import Mapa from './Mapa'; // Importa el componente del mapa

function App() {
    return (
        <div className="App">
            <Navbar /> {/* Utiliza el componente de la barra superior */}
            <Mapa /> {/* Utiliza el componente del mapa */}
        
            {/* Aquí puedes agregar más contenido */}
        </div>
    );
}

export default App;
