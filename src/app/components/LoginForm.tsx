'use client';
import { useState } from 'react';

function LoginForm() {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <div className='bg-stone-200 h-full flex items-center justify-center'>
      <form className='bg-white px-16 py-12 rounded-2xl shadow-lg text-black text-center w-100 '>
        <h1 className='text-6xl mb-10'>Sign in</h1>
        <fieldset className='mb-6'>
          <input
            className='w-full block bg-black rounded p-2 text-white'
            type='text'
            placeholder='Login'
          />
        </fieldset>
        <fieldset className='text-left mb-4 relative'>
          <input
            className='w-full block bg-black rounded p-2 text-white'
            type={showpassword ? 'text' : 'password'}
            placeholder='Password'
          />

          <input
            type='checkbox'
            name='showpassword'
            id='showpassword'
            onChange={() => setShowpassword(!showpassword)}
            className='accent-black absolute top-3 right-3'
          />
        </fieldset>
        <fieldset className='flex justify-between items-center'>
          <label
            className='flex items-center  text-gray-600 text-xs'
            htmlFor='remenber'
          >
            <input
              className='mr-1 accent-black'
              type='checkbox'
              name='remenber'
              id='remenber'
            />
            Remenber me{' '}
          </label>
          <a href='#' className='text-green-400 text-xs'>
            Forgot password?
          </a>
        </fieldset>
        <button
          className='bg-green-400 p-3 w-full mt-4 rounded-lg shadow hover:bg-green-600 hover:text-white'
          type='button'
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
