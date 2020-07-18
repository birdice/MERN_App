import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">UNIR - MERN App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Lista de Ejercicios</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Nuevo Registro de Ejercicio</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Nuevo Usuario</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}