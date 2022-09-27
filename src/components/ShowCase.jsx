import myImage from '../images/christian.png';

const ShowCase = () => {
  return (
    <div
      name="my home"
      className="w-full h-max  bg-slate-200 py-10"
    >
      <div className="md:flex h-full w-full md:px-20 px-5 pt-[100px] justify-around max-w[1240px]">
        <div className="flex flex-col  gap-10 justify-center  items-center md:items-start w-full px-12">
          <h1 className="text-4xl lg:text-5xl sm:text-3xl font-bold text-indigo-900 ">
            Full-stack Software Engineer
          </h1>
          <p className="text-2xl sm:text-2xl lg:text-3xl my-6 md:text-start">
            My aim is to transform Africa through technology, by providing
            working systems using: JavaScript, React, Angular, NuxtJs, NextJs, Redux, NodeJs, GraphQL, MongoDB,
            PostgreSQL, Docker and AWS
          </p>

          <button className="md:w-[30%] h-[40px] w-full md:mb-0 mb-8">
            Get Started
          </button>

        </div>

        <div className="flex justify-center h-[10%]">
          <img
            src={myImage}
            alt=""
          // className="h-[80%]"
          />
        </div>
      </div>
    </div >
  );
};

export default ShowCase;
