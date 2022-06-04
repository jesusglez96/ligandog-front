import React from 'react';

function Pretendiente({
  // eslint-disable-next-line react/prop-types
  image, name, sex, size, email,
}) {
  return (
    <div className="card mx-auto w-75">
      <img src={image} className="img-fluid card-img-top" alt="Pretendiente" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">Sex: {sex}</p>
        <p className="card-text">Size: {size}</p>
      </div>
    </div>
  );
}

export default Pretendiente;
