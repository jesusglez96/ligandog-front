import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/help.scss';

function IndexHelp() {
  return (
    <article className="help-container">
      <article className="help-container__info">
        <h1 className="text-center">Ayuda general</h1>
        <section className="help-container__info-content">
          <h2>Menú</h2>
          <p>El menú de navegación nos podremos mover a través de la aplicación</p>
          <div>
            <img className="img-fluid" src="../images/menuhelp.png" alt="Ayuda menu" />
          </div>
          <div className="help-container__info-content-campo">
            <h3>Logo</h3>
            <p>Es el logo de la aplicación, que a la vez es el enlace a home</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Menú desplegable</h3>
            <p>En esta parte, encontraremos los enlaces a las
              diferentes secciones de la aplicación, asi como el enlace para
              desloguearnos. Si estamos en versión móvil, tendremos que pulsar el
              botón hamburguesa para acceder al menú</p>
            <div>
              <img className="img-fluid" src="../images/menu2help.png" alt="Menu desplegado" />
            </div>
          </div>
        </section>
        <section className="help-container__info-content">
          <h2>Home</h2>
          <p>Esta sección se encarga de presentar posibles pretendientes,
            para que el usuario los escoja o no.</p>
          <div>
            <img className="img-fluid" src="../images/homehelp.png" alt="Ayuda home" />
          </div>
          <div className="help-container__info-content-campo">
            <h3>Pretendiente</h3>
            <p>Tendremos toda la información del pretendiente,
              como su nombre, email, sexo y tamaño.</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Botones</h3>
            <p>Aquí encontramos dos botones. Cada uno con su función:</p>
            <ul>
              <li>Me gusta <svg style={{ width: '20px' }} viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M38.5 29C31.5975 29 26 34.5917 26 41.4905C26 47.0595 28.1875 60.2768 49.72 73.6378C50.1057 73.8747 50.5485 74 51 74C51.4515 74 51.8943 73.8747 52.28 73.6378C73.8125 60.2768 76 47.0595 76 41.4905C76 34.5917 70.4025 29 63.5 29C56.5975 29 51 36.57 51 36.57C51 36.57 45.4025 29 38.5 29Z" fill="#2EB872" fillOpacity="0.75" />
              </svg> con este botón , indicaremos que un usuario nos gusta.</li>
              <li>No me gusta <svg style={{ width: '20px' }} viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M64.3522 30.6681C59.9037 35.1193 55.4473 39.5713 51.0034 44.0232C46.5517 39.5736 42.1001 35.1216 37.6468 30.6681C32.4958 25.5199 24.5145 33.5042 29.6632 38.6524C34.1134 43.0997 38.5674 47.554 43.0121 51.9997C38.5643 56.4494 34.111 60.9029 29.6632 65.3549C24.5145 70.5015 32.4997 78.4835 37.6468 73.3384C42.097 68.8865 46.5486 64.4352 51.0034 59.9833C55.4551 64.4352 59.9037 68.8849 64.3522 73.3384C69.5017 78.4843 77.4838 70.5015 72.3389 65.3557C67.8865 60.9037 63.4348 56.4541 58.9823 52.0005C63.4356 47.5493 67.8873 43.0973 72.3389 38.6453C77.4838 33.4987 69.5017 25.5144 64.3522 30.6626" fill="#FA4659" fillOpacity="0.75" />
              </svg> con este botón, indicaremos que un usuario no nos gusta.</li>
            </ul>
          </div>
        </section>
        <section className="help-container__info-content">
          <h2>My Likes</h2>
          <p>En esta sección tendremos a todos los usuarios a los que le hemos dado me gusta</p>
          <div>
            <img className="img-fluid" src="../images/mylikeshelp.png" alt="Ayuda My Likes" />
          </div>
          <div className="help-container__info-content-campo">
            <h3>Imagen</h3>
            <p>La imagen del usuario</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Información</h3>
            <p>Tendremos la información del usuario: nombre y correo.</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Botón</h3>
            <p>Podremos a eliminar al usuario.</p>
          </div>
        </section>
        <section className="help-container__info-content">
          <h2>I got likes</h2>
          <p>En esta sección tendremos a todos los usuarios que nos han dado me gusta</p>
          <div>
            <img className="img-fluid" src="../images/igotlikeshelp.png" alt="Ayuda I got likes" />
          </div>
          <div className="help-container__info-content-campo">
            <h3>Imagen</h3>
            <p>La imagen del usuario</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Información</h3>
            <p>Tendremos la información del usuario: nombre y correo.</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Botónes</h3>
            <p>Tenemos dos botones:</p>
            <ul>
              <li>Me gusta <svg style={{ width: '20px' }} viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M38.5 29C31.5975 29 26 34.5917 26 41.4905C26 47.0595 28.1875 60.2768 49.72 73.6378C50.1057 73.8747 50.5485 74 51 74C51.4515 74 51.8943 73.8747 52.28 73.6378C73.8125 60.2768 76 47.0595 76 41.4905C76 34.5917 70.4025 29 63.5 29C56.5975 29 51 36.57 51 36.57C51 36.57 45.4025 29 38.5 29Z" fill="#2EB872" fillOpacity="0.75" />
              </svg> podemos dar me gusta también y crear un match</li>
              <li>No me gusta <svg style={{ width: '20px' }} viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M64.3522 30.6681C59.9037 35.1193 55.4473 39.5713 51.0034 44.0232C46.5517 39.5736 42.1001 35.1216 37.6468 30.6681C32.4958 25.5199 24.5145 33.5042 29.6632 38.6524C34.1134 43.0997 38.5674 47.554 43.0121 51.9997C38.5643 56.4494 34.111 60.9029 29.6632 65.3549C24.5145 70.5015 32.4997 78.4835 37.6468 73.3384C42.097 68.8865 46.5486 64.4352 51.0034 59.9833C55.4551 64.4352 59.9037 68.8849 64.3522 73.3384C69.5017 78.4843 77.4838 70.5015 72.3389 65.3557C67.8865 60.9037 63.4348 56.4541 58.9823 52.0005C63.4356 47.5493 67.8873 43.0973 72.3389 38.6453C77.4838 33.4987 69.5017 25.5144 64.3522 30.6626" fill="#FA4659" fillOpacity="0.75" />
              </svg> podemos eliminar ese pretendiente</li>
            </ul>
          </div>
        </section>
        <section className="help-container__info-content">
          <h2>Matches</h2>
          <p>Aquí apareceran todos los matches que tenemos.</p>
          <div>
            <img className="img-fluid" src="../images/matchhelp.png" alt="Ayuda Matches" />
          </div>
          <div className="help-container__info-content-campo">
            <h3>Imagen</h3>
            <p>La imagen del usuario</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Información</h3>
            <p>Tendremos la información del usuario: nombre y correo.</p>
          </div>
          <div className="help-container__info-content-campo">
            <h3>Botónes</h3>
            <p>Tenemos dos botones:</p>
            <ul>
              <li>Chat <svg style={{ width: '20px' }} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="24" fill="white" stroke="#949494" strokeWidth="4" />
                <path d="M39.8323 20.2069C39.0795 18.4103 37.9843 16.7772 36.6078 15.3988C35.2355 14.018 33.6053 12.9202 31.8098 12.1677C29.9705 11.393 27.9942 10.996 25.9984 11H25.9313C23.9014 11.0101 21.9385 11.4127 20.0898 12.2046C18.3097 12.9648 16.6948 14.0646 15.3353 15.4424C13.9722 16.8177 12.8896 18.4451 12.1478 20.2338C11.3778 22.0938 10.9877 24.0891 11.0003 26.1022C11.0104 28.4307 11.5673 30.7425 12.6075 32.8094V37.9094C12.6075 38.7617 13.2987 39.4529 14.1476 39.4529H19.2409C21.3174 40.5007 23.6088 41.052 25.9347 41.0634H26.0051C28.0116 41.0634 29.9543 40.6742 31.7863 39.9125C33.5727 39.169 35.1968 38.084 36.5676 36.7183C37.95 35.346 39.0371 33.7422 39.7987 31.9538C40.5872 30.1017 40.9899 28.1321 40.9999 26.0988C41.0066 24.0555 40.6107 22.0725 39.8323 20.2069ZM19.3013 27.6423C18.4155 27.6423 17.6941 26.9209 17.6941 26.0317C17.6941 25.1426 18.4155 24.4212 19.3013 24.4212C20.1871 24.4212 20.9085 25.1426 20.9085 26.0317C20.9085 26.9209 20.1904 27.6423 19.3013 27.6423ZM25.9984 27.6423C25.1126 27.6423 24.3912 26.9209 24.3912 26.0317C24.3912 25.1426 25.1126 24.4212 25.9984 24.4212C26.8842 24.4212 27.6056 25.1426 27.6056 26.0317C27.6056 26.9209 26.8842 27.6423 25.9984 27.6423ZM32.6956 27.6423C31.8098 27.6423 31.0884 26.9209 31.0884 26.0317C31.0884 25.1426 31.8098 24.4212 32.6956 24.4212C33.5814 24.4212 34.3028 25.1426 34.3028 26.0317C34.3028 26.9209 33.5814 27.6423 32.6956 27.6423Z" fill="#2EB872" fillOpacity="0.75" />
              </svg> podemos chatear con el match</li>
              <li>Eliminar <svg style={{ width: '20px' }} viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="51.5" cy="51.5" r="47.5" fill="white" stroke="#949494" strokeWidth="8" />
                <path d="M64.3522 30.6681C59.9037 35.1193 55.4473 39.5713 51.0034 44.0232C46.5517 39.5736 42.1001 35.1216 37.6468 30.6681C32.4958 25.5199 24.5145 33.5042 29.6632 38.6524C34.1134 43.0997 38.5674 47.554 43.0121 51.9997C38.5643 56.4494 34.111 60.9029 29.6632 65.3549C24.5145 70.5015 32.4997 78.4835 37.6468 73.3384C42.097 68.8865 46.5486 64.4352 51.0034 59.9833C55.4551 64.4352 59.9037 68.8849 64.3522 73.3384C69.5017 78.4843 77.4838 70.5015 72.3389 65.3557C67.8865 60.9037 63.4348 56.4541 58.9823 52.0005C63.4356 47.5493 67.8873 43.0973 72.3389 38.6453C77.4838 33.4987 69.5017 25.5144 64.3522 30.6626" fill="#FA4659" fillOpacity="0.75" />
              </svg> podemos eliminar ese pretendiente</li>
            </ul>
          </div>
        </section>
        <Link to="/index/principal">Volver</Link>
      </article>
    </article>
  );
}

export default IndexHelp;
