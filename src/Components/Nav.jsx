"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
      const currentPath=usePathname() 

     const navLink= <div className='flex gap-6'>
          <Link href='/' className={currentPath === "/" ? "text-red-500 font-semibold" : "text-slate-600"}>Home</Link>
          <Link href='/about' className={currentPath === "/about" ? "text-red-500 font-semibold" : "text-slate-600"}>About</Link>
          <Link href='/blog' className={currentPath === "/blog" ? "text-red-500 font-semibold" : "text-slate-600"}>Blog</Link>
          <Link href='/contact' className={currentPath === "/contact" ? "text-red-500 font-semibold" : "text-slate-600"}>Contact</Link>
     </div>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;