import React from 'react';
import { Link } from 'react-router';

const Sign_in = () => {

          const handle_sign_in = ( event ) => {
                    event.preventDefault();
          }

          return (
                    <section className="w-11/12 mx-auto">
                              <div className="hero bg-base-200">
                                        <div className="hero-content flex-col lg:flex-row py-10">
                                                  <div className="card bg-base-100 w-full shrink-0 shadow">
                                                            <h1 className="text-4xl desc-font text-center py-12 border-b border-gray-300">Login your account</h1>
                                                            <form
                                                                      onSubmit={handle_sign_in}
                                                                      className="card-body md:w-[500px] md:px-10"
                                                            >
                                                                      <fieldset className="fieldset space-y-2">
                                                                                <label className="label font-semibold desc-font">Email address</label>
                                                                                <input type="email" className="input w-full" placeholder="Email" />
                                                                                <label className="label font-semibold desc-font">Password</label>
                                                                                <input type="password" className="input w-full" placeholder="Password" />
                                                                                <a className="link link-hover">Forgot password?</a>
                                                                                <button className="btn btn-neutral mt-4">Sign In</button>
                                                                      </fieldset>
                                                            </form>
                                                            <span className="text-center pb-5">Don't have an account?
                                                                      <Link 
                                                                                to={"/sign-up"}
                                                                                className="text-red-600 ml-1"
                                                                      >Register</Link>
                                                            </span>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default Sign_in;