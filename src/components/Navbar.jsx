import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
          return (
                    <nav className="w-11/12 mx-auto flex justify-end bg-base-100 shadow py-2">
                              <div className="navbar-start hidden lg:flex gap-5 pl-2 desc-font">
                                        <NavLink to={"/"}>Home</NavLink>
                                        <NavLink to={"/"}>About</NavLink>
                                        <NavLink to={"/"}>Career</NavLink>
                              </div>
                              <div className="navbar-end gap-2">
                                        <div className="avatar">
                                                  <div className="w-10 rounded-full">
                                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                                  </div>
                                        </div>
                                        <Link 
                                                  to={"/sign-in"}
                                                  className="btn px-6 bg-black text-white"
                                        >Login</Link>
                                        <div className="dropdown">
                                                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                                  </div>
                                                  <ul
                                                            tabIndex={0}
                                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                                            <NavLink to={"/"}>Home</NavLink>
                                                            <NavLink to={"/"}>About</NavLink>
                                                            <NavLink to={"/"}>Career</NavLink>
                                                  </ul>
                                        </div>
                              </div>
                    </nav>
          );
};

export default Navbar;