import React from 'react';
import '../scss/pretendiente.scss';

function Pretendiente({
  // eslint-disable-next-line react/prop-types
  image, name, sex, size, email,
}) {
  return (
    <div className="pretendiente mx-auto">
      <div className="pretendiente__img" style={{ backgroundImage: `url(${image})` }} />
      {/* <img src={image} className="pretendiente__img card-img-top" alt="Pretendiente" /> */}
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
