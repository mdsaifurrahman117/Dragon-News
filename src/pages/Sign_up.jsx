import React from 'react';
import { Link } from 'react-router';

const Sign_up = () => {

          const handle_sign_up = ( event ) => {
                    event.preventDefault();
          }

          return (
                    <section className="w-11/12 mx-auto">
                              <div className="hero bg-base-200">
                                        <div className="hero-content flex-col lg:flex-row py-10">
                                                  <div className="card bg-base-100 w-full shrink-0 shadow">
                                                            <h1 className="text-4xl desc-font text-center py-12 border-b border-gray-300">Register your account</h1>
                                                            <form 
                                                                      onSubmit={handle_sign_up}
                                                                      className="card-body md:w-[500px] md:px-10"
                                                            >
                                                                      <fieldset className="fieldset space-y-2">
                                                                                <label className="label font-semibold desc-font">Your Name</label>
                                                                                <input type="text" className="input w-full" placeholder="Enter your name" />
                                                                                <label className="label font-semibold desc-font">Photo URL</label>
                                                                                <input type="text" className="input w-full" placeholder="Enter your photo URL" />
                                                                                <label className="label font-semibold desc-font">Email address</label>
                                                                                <input type="email" className="input w-full" placeholder="Email" />
                                                                                <label className="label font-semibold desc-font">Password</label>
                                                                                <input type="password" className="input w-full" placeholder="Password" />
                                                                                <div className="flex flex-row items-center gap-2">
                                                                                          <input type="checkbox" className="checkbox" />
                                                                                          <span className="desc-font">Accept Term & Conditions</span>
                                                                                </div>
                                                                                <button className="btn btn-neutral mt-4">Sign Up</button>
                                                                      </fieldset>
                                                            </form>
                                                            <span className="text-center pb-5">Already have an account?
                                                                      <Link
                                                                                to={"/sign-in"}
                                                                                className="text-red-600 ml-1"
                                                                      >Sign in</Link>
                                                            </span>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default Sign_up;