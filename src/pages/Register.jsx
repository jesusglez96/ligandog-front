import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import URLS from '../utils/CONSTANTS';

import '../scss/register.scss';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  image: yup.mixed().required(),
  sex: yup.string().required(),
  size: yup.string().required(),
}).required();

function Register() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [badUser, setBadUser] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData) => {
    // console.log(formData);
    // console.log(formData.image[0]);
    const data = new FormData();
    data.append('file', formData.image[0]);
    data.append('upload_preset', 'ligandog');
    // console.log(data);
    axios.post(URLS.upload_image, data)
      .then((image) => {
        // console.log(image.data.secure_url);
        axios.post(URLS.register, {
          name: formData.name,
          password: formData.password,
          email: formData.email,
          sex: formData.sex,
          size: formData.size,
          image: image.data.secure_url,
        })
          .then((response) => {
            // console.log(response);
            if (response.status === 201) {
              // eslint-disable-next-line no-underscore-dangle
              sessionStorage.setItem('_id', response.data._id);
              navigate('/index/principal', { replace: true });
            } else {
              setBadUser(true);
            }
          }).catch(() => {
            setBadUser(true);
            // console.error(error);
          });
      });
  };
  return (
    <main className="register">
      <section className="register__img">
        <img className="img-fluid" src="images/logo.png" alt="Logo" />
      </section>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        { badUser === false ? null : (
          <div className="alert alert-danger" role="alert">
            User already exists
          </div>
        )}
        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Pepe" aria-describedby="name" {...register('name')} />
          <p className="text-danger">{errors.name?.message}</p>
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="pepe@user.com" aria-describedby="email" {...register('email')} />
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="*****" aria-describedby="password" {...register('password')} />
          <p className="text-danger">{errors.password?.message}</p>
        </div>
        {/* Image */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Name</label>
          <input type="file" multiple accept="image/*" className="form-control" id="image" aria-describedby="image" {...register('image')} />
          <p className="text-danger">{errors.image?.message}</p>
        </div>
        {/* Selections */}
        <div className="register__form-selection">
          {/* Sex */}
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sex" id="sexMale" value="male" checked {...register('sex')} />
              <label className="form-check-label" htmlFor="sexMale">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sex" id="sexFemale" value="female" {...register('sex')} />
              <label className="form-check-label" htmlFor="sexFemale">
                Female
              </label>
            </div>
            <p className="text-danger">{errors.sex?.message}</p>
          </div>
          {/* Size */}
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="size" id="sizeSmall" value="small" checked {...register('size')} />
              <label className="form-check-label" htmlFor="sizeSmall">
                Small
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="size" id="sizeMedium" value="medium" {...register('size')} />
              <label className="form-check-label" htmlFor="sizeMedium">
                Medium
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="size" id="sizeBig" value="big" {...register('size')} />
              <label className="form-check-label" htmlFor="sizeBig">
                Big
              </label>
            </div>
            <p className="text-danger">{errors.size?.message}</p>
          </div>
        </div>
        {/* Button */}
        <button type="submit" className="register__form-button btn">Register</button>
        <section className="register__form-info">
          <p>Si estas registrado pulsa <Link to="/login">Aqui</Link></p>
        </section>
      </form>
    </main>
  );
}

export default Register;
