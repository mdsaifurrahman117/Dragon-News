import React from 'react';
import Logo from "../assets/logo.svg";
import moment from 'moment';

const Header = () => {
          return (
                    <header className="w-11/12 mx-auto py-10 flex flex-col justify-center items-center gap-2">
                              <img src={Logo} alt="logo" />
                              <p className="desc-font">Journalism Without Fear or Favour</p>
                              <span className="desc-font">
                                        {
                                                  moment().format('dddd, MMMM Do, YYYY')
                                        }
                              </span>
                              <div className="bg-base-200 p-2 flex flex-row items-center gap-2 w-full">
                                        <span className="desc-font bg-pink-600 px-5 py-2 text-white">Latest</span>
                                        <p className="desc-font">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                              </div>
                    </header>
          );
};

export default Header;