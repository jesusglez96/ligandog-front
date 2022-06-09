import React from 'react';
import '../scss/pretendiente.scss';

function Pretendiente({
  // eslint-disable-next-line react/prop-types
  image, name, sex, size, email,
}) {
  return (
    <div className="pretendiente card mx-auto w-75">
      <img src={image} className="img-fluid card-img-top" alt="Pretendiente" />
      <div className="pretendiente__info card-body">
        <h1 className="card-title">{name}</h1>
        <h2 className="card-text">Email: {email}</h2>
        <h3 className="card-text">Sex: {sex}</h3>
        <h3 className="card-text">Size: {size}</h3>
      </div>
    </div>
  );
}

export default Pretendiente;
