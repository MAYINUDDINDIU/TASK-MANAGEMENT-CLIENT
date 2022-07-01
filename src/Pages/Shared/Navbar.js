import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-[#303f9f] lg:px-24">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='bg-[#00227b] rounded px-6 mr-2'><Link to='/'>TASK</Link></li>
                        <li className='bg-[#00227b] rounded px-6 mr-2'><Link to='/Add-Task'>TO-DO</Link></li>
                        <li className='bg-[#00227b] rounded px-6 mr-2'><Link to='/calendar'>CALENDER</Link></li>
                        <li className='bg-[#00227b] rounded px-6 '><a>COMPLETED TASKS</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case lg:text-xl font-bold text-white">TASK <span className='text-success'> MANAGEMENT</span> </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-white ">
                    <li className='bg-[#00227b] rounded px-6 mr-2'><Link to='/'>TASK</Link></li>
                    <li className='bg-[#00227b] rounded px-6 mr-2'><Link to='/Add-Task'>TO-DO</Link></li>
                    <li className='bg-[#00227b] rounded px-6 mr-2'><Link to='/calendar'>CALENDER</Link></li>
                    <li className='bg-[#00227b] rounded px-6 '><a>COMPLETED TASKS</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;