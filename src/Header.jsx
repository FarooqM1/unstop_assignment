import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header({ OpenSidebar }) {
  return (
    <>
      <header className='header'>
        <div className='menu-icon'>
          <BiMenuAltLeft className='icon' onClick={OpenSidebar} />
        </div>
        
        <div className='header_title'>
          <p className='header_title_one'>Assesment</p>
          < p className='header_title_line'>|</p>
          <p className='header_title_two'>My Assesments</p>
        </div>
      </header>
    </>

  )
}

export default Header