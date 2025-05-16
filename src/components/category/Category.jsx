import React from 'react';
import { Link } from 'react-router';

const Category = ({ category }) => {

          const { name } = category

          return (
                    <Link
                              className="btn"
                    >{name}</Link>
          );
};

export default Category;