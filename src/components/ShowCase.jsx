import myImage from '../images/christian.png';
import ServicesFooter from './ServicesFotter';

const ShowCase = () => {
  return (
    <div
      name="my home"
      className="w-full h-max bg-slate-200 flex flex-col justify-between "
    >
      <div className="grid md:grid-cols-2 justify-around max-w[1240px] m-auto md:px-20">
        <div className="flex flex-col  justify-center  items-center md:items-start w-full px-12  pt-[120px] md:pt-[0px]">
          <h1 className="text-4xl lg:text-5xl sm:text-3xl font-bold text-indigo-900 ">
            Full-stack Software Engineer
          </h1>
          <p className="text-2xl sm:text-2xl lg:text-3xl my-6 md:text-start">
            My aim is to transform Africa through technology, by providing
            working systems using: JavaScript, React, Angular, NuxtJs, NextJs, Redux, NodeJs, GraphQL, MongoDB,
            PostgreSQL, Docker and AWS
          </p>
          <button className="w-[80%] h-[40px] my-5 sm:w-[60%]">
            Get Started
          </button>
        </div>

        <div className="flex justify-center mt-7 md:pt-[90px]">
          <img
            src={myImage}
            alt=""
            className="h-[55%] md:h-[80%] w-auto sm:h-[85%]"
          />
        </div>
        <ServicesFooter />
      </div>
    </div>
  );
};

export default ShowCase;
