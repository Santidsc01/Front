// Navbar.js
import React from 'react';
import logo from './LogoDiSport.png'; // Importa el logo
import './Navbar.css'; // Importa los estilos CSS para la barra superior

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" /> {/* Agrega el logo */}
            <h1 className="title">DiSportUIS</h1>
        </div>
    );
}

export default Navbar;
