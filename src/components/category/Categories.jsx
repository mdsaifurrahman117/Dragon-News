import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

          const [ categories, set_categories ] = useState([]);

          useEffect( () => {
                    fetch("categories.json")
                    .then(response => response.json())
                    .then(data => set_categories(data))
          }, [] )

          return (
                    <div className="card-body p-0">
                              {
                                        categories.map( category => 
                                                  <Category
                                                  key={category.id}
                                                            category={category}
                                                  ></Category>
                                        )
                              }
                    </div>
          );
};

export default Categories;