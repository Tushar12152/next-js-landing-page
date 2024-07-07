"use client"

import { BsHeadset, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"
import { LiaLinkedin } from "react-icons/lia"
import logo from '@/assest/NavLogo.webp'
import { BiSearch, BiShoppingBag, BiUser } from "react-icons/bi"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

  

const Nav = () => {
      const currentPath=usePathname()
     const navLink= <div className="flex items-center justify-start gap-4">
           <Link href="/" className={currentPath === "/" ? "bg-[#60E9CE] p-2 rounded-lg font-semibold" : "text-white"}> Home </Link>
           <Link href="about" className={currentPath === "/about" ? "bg-[#60E9CE] p-2 rounded-lg font-semibold" : "text-white"}> About US </Link>
           <Link href="/shop" className={currentPath === "/shop" ? "bg-[#60E9CE] p-2 rounded-lg font-semibold" : "text-white"}> Shop  </Link>
           <Link href="/blog" className={currentPath === "/blog" ? "bg-[#60E9CE] p-2 rounded-lg font-semibold" : "text-white"}> Blog </Link>
           <Link href="/contact" className={currentPath === "/contact" ? "bg-[#60E9CE] p-2 rounded-lg font-semibold" : "text-white"}> Contact </Link>
           

     </div>


  return (
   <div>
      {/* navHeader */}
     <div className="w-full bg-slate-600 p-2">
         <div className="w-[80%] mx-auto flex justify-between items-center">
                <div>
                    <h3 className="text-gray-400">Get Up to 30% OFF Store wide – Limited time only</h3>
                </div>
                <div className="flex items-center gap-8">
                     <div>
                          <Link className="border-r-2 text-gray-400 px-2"  href='#'>Newsletter</Link>
                          <Link className="border-r-2 text-gray-400 px-2"  href='#'>Trace order</Link>
                          <Link className="border-r-2 text-gray-400 px-2"  href='#'>Contact us</Link>
                          <Link className="border-r-2 text-gray-400 px-2"  href='#'>Sitemap</Link>
                     </div>
                     <div className="flex">
                          <span className="text-gray-400 px-2 font-sm"> <FaFacebookF/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <BsTwitter/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <BsYoutube/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <LiaLinkedin/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <ImInstagram/> </span>
                     </div>
                </div>
         </div>
    </div>

    {/* navBody */}

      <div className="w-[80%] mx-auto py-5 flex  items-center justify-between">
           <div className="flex gap-6">
               <Image className="text-md w-36 pr-5 border-r-2" src={logo} alt="logo" height={500} width={500} />
                <div className="flex gap-6 items-center">
                   <span className="text-5xl font-bold"><BsHeadset/> </span>
                    <div>
                         <h1 className="font-bold text-lg text-gray-700 border-b-2">Email us: support@storesupport.com</h1>
                         <h1 className="font-bold text-lg text-gray-700">Call us: +0123 456 789</h1>
                    </div>
                </div>
           </div>


           <div className="flex gap-6 items-center justify-center">
                <div className="flex items-center justify-center ">
                     <input className="p-2 border w-[300px] border-black " placeholder="search...." type="search" name="" id="" />
                     <button className="bg-slate-700 text-white p-[13px] "><BiSearch/></button>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <span className="px-4 btn hover:bg-slate-700 bg-gray-400">
                         <BiUser/>
                    </span>

                    <span className="px-4 btn hover:bg-slate-700 bg-gray-400">
                      <span> $00</span>    <BiShoppingBag/>
                    </span>

                </div>

           </div>
      </div>

   
      {/* navbarEnd */}
     
      <div className="bg-slate-600">
          <div className="text-white pl-0 p-5 w-[80%] mx-auto">
         { navLink}
          </div>
      </div>

   </div>
  )
}

export default Nav






// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';

// const Nav = () => {
//       const currentPath=usePathname() 

//      const navLink= <div className='flex gap-6'>
//           <Link href='/' className={currentPath === "/" ? "text-red-500 font-semibold" : "text-slate-600"}>Home</Link>
//           <Link href='/about' className={currentPath === "/about" ? "text-red-500 font-semibold" : "text-slate-600"}>About</Link>
//           <Link href='/blog' className={currentPath === "/blog" ? "text-red-500 font-semibold" : "text-slate-600"}>Blog</Link>
//           <Link href='/contact' className={currentPath === "/contact" ? "text-red-500 font-semibold" : "text-slate-600"}>Contact</Link>
//      </div>


//     return (
//         <div>
//             <div className="navbar bg-base-100">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                            {navLink}
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">daisyUI</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                        {navLink}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a className="btn">Button</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Nav;