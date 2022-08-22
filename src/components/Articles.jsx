import image from '../images/wallpaper1.jpg';
import profile from '../images/profile-icon_prev_ui.png';
import profile1 from '../images/compSignUp.png';
import Blog from './Blog';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './Pagination';

const blogsData = [
  {
    id: 1,
    image: profile,
    date: 'date',
    title: 'Blog 1',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 2,
    image: profile1,
    date: 'date',
    title: 'Blog 2',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 3,
    image: image,
    date: 'date',
    title: 'Blog 3',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 4,
    image: image,
    date: 'date',
    title: 'Blog 4',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 5,
    image: image,
    date: 'date',
    title: 'Blog 5',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 6,
    image: image,
    date: 'date',
    title: 'Blog 6',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 7,
    image: image,
    date: 'date',
    title: 'Blog 7',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 8,
    image: image,
    date: 'date',
    title: 'Blog 8',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 9,
    image: image,
    date: 'date',
    title: 'Blog 9',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
  {
    id: 10,
    image: image,
    date: 'date',
    title: 'Blog 10',
    content:
      'libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ',
  },
];

const Articles = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  useEffect(() => {
    setIsLoading(true);
    setBlogs(blogsData);
    setIsLoading(false);
  });

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div name="articles" className="w-full bg-slate-200 my-20">
      <div className="max-w-[1240px] py-4 md:mx-auto mx-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Trusted Developer</h2>
          <p className="text-2xl md:text-4xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia dolor ex deserunt dolores voluptatibus consequuntur id
            fugit odit dolore, expedita doloribus molestias iste voluptas,
            sapiente illo qui tempore est?
          </p>
        </div>
        <Blog blogs={currentBlogs} loading={isLoading} />
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Articles;
