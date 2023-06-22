import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='bg-black w-full h-20'>
      <ul className='flex h-full justify-evenly'>
        <li className='w-1/2 hover:bg-red-950'>
          <Link
            className='flex items-center justify-center h-full w-full'
            href='/'
          >
            Home
          </Link>
        </li>
        <li className='w-1/2 hover:bg-red-950'>
          <Link
            className='flex items-center justify-center h-full w-full'
            href='/'
          >
            Teste
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
