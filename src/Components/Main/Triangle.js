import React from 'react';
import { Link } from 'react-router-dom'

export default function Triangle() {
  return (
    <>
      <Link to='/prompt' className='mainSubmit'>
        <div>
          <h1 className='title'>Night</h1>
          <h1 className='title'>&</h1>
          <h1 className='title'>Day</h1>
        </div>
      </Link>
      <div className='pinkTriangle'></div>
      <div className='triangle'></div>
    </>
  );
}