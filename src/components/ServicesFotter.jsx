import {
  DatabaseIcon,
  CodeIcon,
  DeviceMobileIcon,
  TerminalIcon,
} from '@heroicons/react/outline';

const ServicesFooter = () => {
  return (
    <div
      className="absolute flex flex-col py-8 md:min-w-[900px] bottom-[-40%] md:bottom-[7%] sm:bottom-[-35%]
            mx-5 md:left-1/2 transform md:-translate-x-1/2 bg-slate-100
            border border-slate-300 rounded-xl text-center shadow-xl"
    >
      <p className="text-orange-500 font-bold text-3xl">Services</p>
      <div className="flex justify-between flex-wrap px-4">
        <p className="flex px-4 py-2 text-slate-500">
          <CodeIcon className="h-6 text-indigo-700 px-3" /> Web development
        </p>
        <p className="flex px-4 py-2 text-slate-500">
          <DeviceMobileIcon className="h-6 text-indigo-700 px-3" /> Mobile
          development
        </p>
        <p className="flex px-4 py-2 text-slate-500">
          <DatabaseIcon className="h-6 text-indigo-700 px-3" /> web Hosting
        </p>
        <p className="flex px-4 py-2 text-slate-500">
          <TerminalIcon className="h-6 text-indigo-700 px-3" /> web maintenance
        </p>
      </div>
    </div>
  );
};

export default ServicesFooter;
