const About = () => {
  return (
    <div name='about' className="w-full my-32 md:px-0 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Trusted Engineer</h2>
          <p className="text-xl md:text-4xl py-6 text-gray-500">
            I use various source debuggers and visual development environments to modify, write, and debug software for client applications. I document and test client software and write code to create applications that either stand alone or boost access to servers and services.
          </p>

        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center md:max-w-[1240px]">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-700">100%</p>
            <p className="mt-2 text-gray-400">completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-700">24/7</p>
            <p className="mt-2 text-gray-400">Deliver</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-700">27</p>
            <p className="mt-2 text-gray-400">products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
