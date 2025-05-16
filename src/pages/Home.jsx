import React from 'react';
import Categories from '../components/category/Categories';
import All_news from '../components/news/All_news';

const Home = () => {
          return (
                    <section className="w-11/12 mx-auto my-20 grid grid-cols-4 gap-5">
                              <div>
                                        <h3 className="text-2xl desc-font">All Categories</h3>
                                        <Categories />
                              </div>
                              <div className="col-span-2">
                                        <h3 className="text-2xl desc-font">All News</h3>
                                        <All_news />
                              </div>
                              <div>
                                        <h1>something</h1>
                              </div>
                    </section>
          );
};

export default Home;