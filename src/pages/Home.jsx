import React from 'react';
import Categories from '../components/category/Categories';

const Home = () => {
          return (
                    <section className="w-11/12 mx-auto my-20 grid grid-cols-3">
                              <Categories />
                              <div>
                                        <h1>news</h1>
                              </div>
                              <div>
                                        <h1>something</h1>
                              </div>
                    </section>
          );
};

export default Home;