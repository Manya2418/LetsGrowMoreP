import React from 'react';
import {NavLink} from 'react-router-dom';
import './GetUser.css';

const Navbar = () => {
  return (
    <>
    <div className='navar'>
      <NavLink exact activeClassName='active' to='./getuser' ><span className='nav'>Get User</span></NavLink>
     </div>
     

    </>
  )
}

export default Navbar;
