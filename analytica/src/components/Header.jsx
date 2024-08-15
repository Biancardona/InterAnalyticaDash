import React from 'react';

const Header = () => {
  return (
    <header className='py-14 bg-slate-400'>
      <div className='container text-4xl mx-auto flex flex-col lg:flex-row justify-center items-center'>
        <h1 className='text-center text-white'>Analytical Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
