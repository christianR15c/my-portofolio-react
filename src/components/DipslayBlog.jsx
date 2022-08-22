import React from 'react';
import { useStateContext } from '../context/AppContext';
import images from '../images/wallpaper1.jpg';
import passport from '../images/passport .jpg';

const DipslayBlog = () => {
  const { date } = useStateContext();

  return (
    <div className="bg-slate-200 w-full  min-h-screen p-6 flex justify-center">
      <div className="p-6 border shadow-2xl max-w-[1240px] rounded-xl">
        <p className="text-3xl py-3 font-semibold text-indigo-700">
          why javascript
        </p>
        <div className="flex justify-center">
          <img src={images} alt="" className="md:w-5/12 sm:w-8/12 w-10/12" />
        </div>
        <div className="flex gap-6 items-center py-2">
          <div className="flex gap-2 items-center">
            <img
              src={passport}
              alt=""
              className="rounded-full border-2 border-gray-400 w-8 h-8"
            />
            <p>Christian Habineza</p>
          </div>
          <p>{date}</p>
        </div>
        <div>
          <p>
            Why use JavaScript over other programming languages? Aside from the
            unlimited possibilities, there are many reasons for web developers
            to use JavaScript over other programming languages: JavaScript is
            the only programming language native to the web browser. JavaScript
            is the most popular language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DipslayBlog;
