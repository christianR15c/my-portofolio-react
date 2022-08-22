import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';
import comp1 from '../images/comp1.jpg';

const ContactUs = () => {
  return (
    <div name='contact us' className="w-full mt-24">
      <div className="w-full h-[550px] sm:h-[650px] bg-gray-800/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={comp1}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="text-center py-12 px-5">
          <h1 className="py-8 text text-slate-300 uppercase">Support</h1>
          <h3 className="text-4xl pb-7 font-bold">
            Get Support From the right Software Engineer
          </h3>
          <p className="text-gray-300 text-xl py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            provident vitae facilis nam aspernatur, obcaecati dicta aliquam,
            odit perferendis quia eum ab amet. Sit.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-lg shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-700 rounded-lg text-white mt-[-4rem]" />
              <h3 className="my-4 font-bold text-2xl">Front-end</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                architecto recusandae animi odit quasi dolores cupiditate
                voluptas qui? Repudiandae nobis quisquam commodi.
              </p>
            </div>
            <div className="px-8 py-2 text-xl bg-slate-100 rounded-b-lg">
              <p className="flex text-indigo-700">
                Contact Us
                <ArrowRightIcon className="w-5 text-indigo-700 ml-3" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-700 rounded-lg text-white mt-[-4rem]" />
              <h3 className="my-4 font-bold text-2xl">Back-end</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                architecto recusandae animi odit quasi dolores cupiditate
                voluptas qui? Repudiandae nobis quisquam commodi.
              </p>
            </div>
            <div className="px-8 py-2 text-xl bg-slate-100 rounded-b-lg">
              <p className="flex text-indigo-700">
                Contact Us
                <ArrowRightIcon className="w-5 text-indigo-700 ml-3" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-700 rounded-lg text-white mt-[-4rem]" />
              <h3 className="my-4 font-bold text-2xl">Full-stack</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                architecto recusandae animi odit quasi dolores cupiditate
                voluptas qui? Repudiandae nobis quisquam commodi.
              </p>
            </div>
            <div className="px-8 py-2 text-xl bg-slate-100 rounded-b-lg">
              <p className="flex text-indigo-700">
                Contact Us
                <ArrowRightIcon className="w-5 text-indigo-700 ml-3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
