import React, { Fragment, useState } from 'react';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Password do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create your account
      </p>
      <form
        action='dashboard.html'
        className='form'
        onSubmit={(e) => onSubmit(e)}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            required
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            This site uses Gravatar, so if you want a profile iamge, use a
            Gravatar email
          </small>
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

        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm password'
            minLength='6'
            name='confirmPassword'
            value={confirmPassword}
            required
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already have an account?
        <a href='login.html'>Sign in</a>
      </p>
    </Fragment>
  );
};
