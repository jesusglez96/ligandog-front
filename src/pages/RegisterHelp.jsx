import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/help.scss';

function RegisterHelp() {
  return (
    <main className="help-container">
      <header className="help-container__img">
        <img className="img-fluid" src="images/logo.png" alt="Logo" />
      </header>
      <article className="help-container__info">
        <h1 className="text-center">Ayuda de Registro</h1>
        <section className="help-container__info-content">
          <h2>Campos</h2>
          <div className="help-container__info-content-campo">
            <h3>Name</h3>
            <p>Nombre del perro</p>
            <p>Por ejemplo: Gusanito</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Email</h3>
            <p>Tu email. Este email debe ser único.</p>
            <p>Por ejemplo: gusanito@gmail.com</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Contraseña</h3>
            <p>La contraseña con la que te quieres registrar.</p>
            <p>Por ejemplo: gusanito123</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Imagen</h3>
            <p>Imagen de tu perro</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Sex</h3>
            <p>Sexo del perro</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Tamaño</h3>
            <p>Tamaño del perro</p>
          </div>
        </section>
        <Link to="/register">Volver</Link>
      </article>
    </main>
  );
}

export default RegisterHelp;
