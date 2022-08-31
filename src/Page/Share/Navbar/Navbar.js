import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItem = <>
        <li className='text-lg text-white'><Link as={Link} to="/">Home</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/services">Our Services</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/add">Add Item</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/myItem">My Item</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/manage">Manage Item</Link></li>


    </>



    return (
        <div>
            <div class="navbar bg-primary">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl text-white">Supply Depot</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div class="navbar-end">
                    <Link className='text-lg text-white' as={Link} to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;