'use client';
import Link from 'next/link';
import React from 'react';
import { Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';

function Header2() {
  return (
    <Popover className='container mx-auto flex items-center border-b-2 px-6 py-2 h-24 text-black '>
      <h1 className='font-bold'>Ronan</h1>
      <div className='grow'>
        <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
          <Link href='/'>item 1</Link>
          <Link href='/'>item 2</Link>
          <Link href='/'>item 3</Link>
          <Link href='/'>item 4</Link>
          <Link href='/'>item 5</Link>
        </div>
      </div>
      <div className='flex grow items-center justify-end sm:hidden'>
        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 '>
          <span className='sr-only'>Open Menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden='true' />
        </Popover.Button>
      </div>
      <Popover.Panel
        focus
        className='absolute inset-x-0 origin-top-right transform p-2 transition md:hidden'
      >
        <div className='rounded-lg bg=white, shadow-lg rind-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
          <h1 className='font-bold'>Ronan</h1>
        </div>
      </Popover.Panel>
      <div className='hidden sm:block'>
        <Link className='mr-2 font-bold' href='/'>
          Sign up
        </Link>
        <Link className='font-bold' href='/'>
          Login
        </Link>
      </div>
    </Popover>
  );
}

export default Header2;
