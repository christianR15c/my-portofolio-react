import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const ContactUs = () => {
    const form = useRef();

    // const [result, setResult] = useState()
    const successNotify = () => toast.success('Your message was successfully sent!');
    const notify = () => toast.error('Message not sent, please try again later.');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r8hfl4h', 'template_r3sw8lj', form.current, 'XmlYJbJCXXfUrcfUU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                notify()
                console.log(error.text);
            });
        successNotify()
        e.target.reset()
        // setResult(true)
    };



    return (
        <div className="container px-5 py-24 h-max rounded-lg bg-slate-50 mt-20 mx-auto shadow-2xl">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
                    Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-700">
                    Please don't hesitate to contact us on anything
                </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="relative">
                            <label for="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="relative">
                            <label
                                for="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label
                                for="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full flex flex-col">
                        <button type="submit" value="Send" className="md:w-[30%] h-[40px] bg-indigo-700 w-full mx-auto md:mb-0 mb-8">
                            Send
                        </button>

                    </div>
                </form>
            </div>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}

export default ContactUs
