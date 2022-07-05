import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>
            Developer Connector
            <p className='lead'>
              Create developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>

              <Link to='/login' className='btn btn-light'>
                Log In
              </Link>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};
