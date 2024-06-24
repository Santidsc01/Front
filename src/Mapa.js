// Mapa.js

import React from 'react';
import './Mapa.css'; // Importa los estilos CSS para el mapa
import mapaImage from './mapa.jpeg'; // Importa la imagen del mapa

function Mapa() {
    return (
        <div className="map-container">
            <img src={mapaImage} alt="Mapa de la universidad" className="map-img" />
        </div>
    );
}

export default Mapa;




