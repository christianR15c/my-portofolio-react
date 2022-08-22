const About = () => {
  return (
    <div name='about' className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Trusted Developer</h2>
          <p className="text-2xl md:text-4xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            mollitia dolor ex deserunt dolores voluptatibus consequuntur id
            fugit odit dolore, expedita doloribus molestias iste voluptas,
            sapiente illo qui tempore est?
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
