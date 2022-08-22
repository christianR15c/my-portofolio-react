import React from 'react';
import { Link } from 'react-scroll';

const Pagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
      <ul className="flex">
        {blogsPerPage >= totalBlogs
          ? null
          : pageNumbers.map((number, index) => (
              <Link key={index} className="m-1 py-6 px-2 ">
                <a
                  onClick={() => paginate(number)}
                  href="#"
                  className="cursor-pointer border-2 border-white p-2  "
                >
                  {number}
                </a>
              </Link>
            ))}
      </ul>
    </div>
  );
};

export default Pagination;
