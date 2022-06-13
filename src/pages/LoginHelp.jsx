import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/help.scss';

function LoginHelp() {
  return (
    <main className="help-container">
      <header className="help-container__img">
        <img className="img-fluid" src="images/logo.png" alt="Logo" />
      </header>
      <article className="help-container__info">
        <h1 className="text-center">Ayuda de Login</h1>
        <section className="help-container__info-content">
          <h2>Campos</h2>
          <div className="help-container__info-content-campo">
            <h3>Email</h3>
            <p>El email con el que te registraste.</p>
            <p>Por ejemplo: user@gmail.com</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Contraseña</h3>
            <p>La contraseña con la que te registraste.</p>
            <p>Por ejemplo: user</p>
          </div>
        </section>
        <Link to="/login">Volver</Link>
      </article>
    </main>
  );
}

export default LoginHelp;
