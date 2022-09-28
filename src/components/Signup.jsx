import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import SpinnerButton from './SpinnerButton';
const signupButtoStyles = "bg-[#2130BC] h-[35px] w-[140px] rounded-xl mt-8 text-white"
const url = 'https://res.cloudinary.com/dmgfxu4fg/image/upload/v1654073043/profile-icon_prev_ui_d7vthy.png'


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uploadingImage, setUploadingImage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // const { image, setImage, url, setUrl } = useContext(AppContext);


    // const [signUp] = useSignupUserMutation();

    const errorNotify = (error) => toast.error(error);
    const successNotify = (success) => toast.success(success);

    // const navTextColor = 'text-[#2130BC] cursor-pointer font-semibold';

    useEffect(() => {
        setName('');
        setEmail('');
        setPassword('');
    }, []);

    const image1 =
        'https://res.cloudinary.com/dmgfxu4fg/image/upload/v1654039959/sign_up_byspls.svg';

    return (
        <div className="flex w-full h-screen">
            <div className="md:w-[55%] w-full h-full flex flex-col">
                <div className="md:w-[45%] w-[90%] my-auto mx-auto">
                    <div className=" bg-white h-[500px] shadow-2xl rounded-xl">
                        <div className="h-[30%] flex flex-col items-center">
                            <h1 className="text-[#2130BC] text-3xl  font-bold italic mx-auto pt-6">
                                Create account
                            </h1>
                            <div className="pt-2 ">
                                <div className="shrink-0 flex justify-center">
                                    <img
                                        className="h-16 w-16 object-cover rounded-full"
                                        src={url}
                                        alt="Current profile photo"
                                    />
                                </div>
                                <label className="block pl-[10%]">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        type="file"
                                        // onChange={(e) => setImage(e.target.files[0])}
                                        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                                    />
                                </label>
                                <div className="flex justify-center">
                                    <p
                                        className="bg-slate-100 rounded-md hover:bg-slate-300 cursor-pointer w-[50%] text-center"
                                    >
                                        upload image
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70%] w-full flex items-center">
                            <div className="flex flex-col items-center mx-auto">
                                <input
                                    type="text"
                                    placeholder="username"
                                    className="border-2 border-blue-500 pl-3 my-2 rounded-xl h-[38px]"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="border-2 border-blue-500 pl-3 my-2 rounded-xl h-[38px]"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <input
                                    type="password"
                                    placeholder="password"
                                    className="border-2 border-blue-500 pl-3 my-2 rounded-xl h-[38px]"
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <p className="cursor-pointer">
                                    have account?{' '}
                                    <Link to={'/login'} className="text-blue-500 font-semibold ml-3">
                                        login
                                    </Link>
                                </p>

                                <Link
                                    // onClick={(e) =>
                                    //   !name || !room ? e.preventDefault() : null
                                    // }
                                    to={'/chat'}
                                >
                                    {uploadingImage || isLoading ? (
                                        <SpinnerButton styles={signupButtoStyles} />
                                    ) : (
                                        <button
                                            className='h-[32px] w-full px-[35px] mt-4'

                                        >
                                            sign up
                                        </button>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[45%] w-0 bg-[#2130BC] flex justify-center items-center">
                <img src={image1} alt="" />
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;
