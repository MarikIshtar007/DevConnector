import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
    // const newUser = {
    //   name,
    //   email,
    //   password,
    // };

    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };
    //   const body = JSON.stringify(newUser);
    //   const res = await axios.post('/api/users', body, config);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data);
    // }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign into your account
      </p>
      <form
        action='dashboard.html'
        className='form'
        onSubmit={(e) => onSubmit(e)}
      >
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            placeholder='Enter password'
            minLength='6'
            name='password'
            value={password}
            required
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Login' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Don't have an account?
        <Link to='/register'> Register</Link>
      </p>
    </Fragment>
  );
};
