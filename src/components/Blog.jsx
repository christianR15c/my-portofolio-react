import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/AppContext';

const Blog = ({ blogs, loading }) => {
  const { setTitle, setImage, setDate, setContent } = useStateContext();

  if (loading) return <h2>Loading ...</h2>;

  const handleClick = (blogTitle, blogDate, blogContent, blogImage, blog) => {
    setTitle(blogTitle);
    setDate(blogDate);
    setContent(blogContent);
    setImage(blogImage);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 pt-8">
        {blogs &&
          blogs.map((blog, index) => (
            <Link
              to={`/blog/${blog.id}`}
              className="border  p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  rounded-md border-l-2 border-l-white shadow-xl"
              onClick={() =>
                handleClick(
                  blog.title,
                  blog.date,
                  blog.content,
                  blog.image,
                  blog.id
                )
              }
              key={index}
            >
              <div className="flex md:justify-start justify-center">
                <img
                  src={blog.image}
                  alt="blog picture"
                  className="sm:w-full w-[70%] h-64"
                />
              </div>
              <p className="mt-2 text-gray-400">{blog.date}</p>
              <p className="text-xl pt-3">{blog.title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blog;
