import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='absolute left-0 right-0 top-0 z-50 h-20 px-6 bg-transparent'>
      <nav
        className='container mx-auto flex h-full items-center justify-between py-4'
        aria-label='Global'
      >
        <a
          href='/'
          className='hover:opacity-75 transition-opacity duration-200'
        >
          <img
            alt='DevOptima logo'
            src='/images/logoDevOptima.svg'
            className='h-12'
          />
        </a>
        <ul className='flex space-x-12 items-center'>
          <li className='inline-block'>
            <a
              className='transition-transform duration-200 transform hover:scale-105 font-normal text-gray-200 hover:text-gray-100 text-lg'
              href='/about/'
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              About us
            </a>
          </li>
          <li className='inline-block'>
            <a
              className='transition-transform duration-200 transform hover:scale-105 font-normal text-gray-200 hover:text-gray-100 text-lg'
              href='/services/'
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              Services
            </a>
          </li>
          <li className='inline-block'>
            <a
              className='transition-transform duration-200 transform hover:scale-105 font-normal text-gray-200 hover:text-gray-100 text-lg'
              href='/why-dev-optima/'
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              Why DevOptima
            </a>
          </li>
        </ul>
        <button className='flex items-center rounded-full leading-4 text-base font-semibold px-9 h-12 bg-[#101333] border border-[#243BB9] text-white hover:bg-[#243BB980] hover:border-[#3F57DA]'>
          Get started
        </button>
      </nav>
    </header>
  );
};

export default Header;
