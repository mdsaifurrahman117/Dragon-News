import React from 'react';
import { useLoaderData } from 'react-router';
import News from './News';

const All_news = () => {

          const data = useLoaderData();

          return (
                    <div className="space-y-5">
                              {
                                        data.map( news => 
                                                  <News
                                                            key={news.id}
                                                            news={news}
                                                  ></News>
                                        )
                              }
                    </div>
          );
};

export default All_news;