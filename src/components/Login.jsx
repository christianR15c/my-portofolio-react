import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import SpinnerButton from './SpinnerButton';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPaswordValidation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();



    const loginButtonStyle =
        'bg-[#2130BC] h-[35px] mx-auto rounded-xl mt-6 text-white w-[140px]';

    const errorNotify = (error) => toast.error(error);

    return (
        <div className="h-screen flex">
            <div className="w-[65%] md:flex items-center hidden h-screen bg-gradient-to-b from-[#4621BC] to-[#8291C9] rounded-br-[35%]">
                <div className="w-[60%] ml-[12%]">
                    <div>
                        <p className="text-white font-semibold text-6xl">
                            Please kindly login to access more features
                        </p>
                    </div>

                </div>
            </div>
            <div className="md:w-[35%] md:min-w-[380px] w-full md:bg-white bg-gradient-to-b from-[#4621BC] to-[#8291C9] md:bg-gradient-to-b md:from-white md:to-white rounded-br-[120%] md:rounded-br-[0%]  flex items-center">
                <div className="md:w-[80%] sm:w-[55%] w-[85%] bg-white  shadow-2xl h-[70%] mx-auto  rounded-xl md:-ml-[37%]">
                    <div className="h-full w-full flex items-center">
                        <div className="flex w-full flex-col items-center mx-auto">
                            <h1 className="text-[#2130BC] text-3xl mb-10 font-bold italic">
                                Login
                            </h1>
                            <input
                                type="email"
                                placeholder="email"
                                className="border-2 border-blue-500 pl-3 my-2 rounded-xl h-[38px] "
                                onChange={(e) => {
                                    setEmailValidation(false);
                                    setEmail(e.target.value);
                                }}
                            />
                            <p className={emailValidation ? 'text-red-500' : 'hidden'}>
                                please enter your email
                            </p>
                            <input
                                type="password"
                                placeholder="password"
                                className="border-2 border-blue-500 pl-3 my-2 rounded-xl h-[38px] "
                                onChange={(e) => {
                                    setPaswordValidation(false);
                                    setPassword(e.target.value);
                                }}
                            />
                            <p className={passwordValidation ? 'text-red-500' : 'hidden'}>
                                please enter your password
                            </p>

                            <p className="cursor-pointer">forgot password?</p>

                            <Link to={'/'}>
                                {isLoading ? (
                                    <SpinnerButton styles={loginButtonStyle} />
                                ) : (
                                    <button className='h-[32px] w-full px-[35px] mt-4' >
                                        Login
                                    </button>
                                )}
                                <Toaster />
                            </Link>
                            <p className="pt-3">
                                Don't have account?
                                <Link to="/signup" className="text-blue-500 font-semibold ml-3">
                                    Sing Up
                                </Link>
                            </p>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
