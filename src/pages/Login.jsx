import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import URLS from '../utils/CONSTANTS';

import '../scss/login.scss';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

function Login() {
  const navigate = useNavigate();
  const [badUser, setBadUser] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (sessionStorage.getItem('_id')) {
      navigate('/index/principal', { replace: true });
    }
  }, []);
  const onSubmit = (formData) => {
    // console.log(formData);
    axios.post(URLS.login, formData)
      .then((response) => {
        // console.log(response);
        if (response.data.response.length === 0) {
          setBadUser(true);
        } else {
          // eslint-disable-next-line no-underscore-dangle
          sessionStorage.setItem('_id', response.data.response[0]._id);
          navigate('/index/principal', { replace: true });
        }
      });
  };

  return (
    <main className="login">
      <section className="login__img">
        <img className="img-fluid" src="images/logo.png" alt="Logo" />
      </section>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        { badUser === false ? null : (
          <div className="alert alert-danger" role="alert">
            User not found
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="user@gmail.com" aria-describedby="email" {...register('email')} />
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="*****" aria-describedby="password" {...register('password')} />
          <p className="text-danger">{errors.password?.message}</p>
        </div>
        <button type="submit" className="login__form-button btn">Log in</button>
        <section className="login__form-info">
          <p>Si no estás registrado pulsa <Link to="/register">aquí</Link></p>
          <p>¿Necesitas ayuda? Pulsa <Link to="/loginhelp">aquí</Link></p>
        </section>
      </form>
    </main>
  );
}

export default Login;
