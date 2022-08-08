import React, { useState } from 'react'
import Button from '../../components/Button'
import Logo from '../../assets/img/logo.svg'
import Eye from "../../assets/img/eye.svg"
import Google from "../../assets/img/google.svg"

const Index = () => {
    const [showPassword, setShowPasseword] = useState(true);
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState()
    return (
        <>
            <section className="sm:flex">
                <div className="login__banner hidden sm:block w-1/2  bg-slate-500"></div>
                <section className="sm:w-1/2 py-10 px-24 h-screen overflow-y-scroll scroll__bar">
                    <div>
                        <img src={Logo} alt="" className="h-28 w-28 block mx-auto" />
                        <h1 className="text-3xl font-bold text-primary mt-8 text-center">
                            Welcome to ECD
                        </h1>
                        <form className="mt-12">
                            <div className="mb-5">
                                <label className="block text-base text-primary">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="h-12 w-full border mt-1 pl-4 focus:border-primary rounded-md"
                                />
                            </div>
                            <div className="mb-5 relative">
                                <img
                                    src={Eye}
                                    onClick={() => setShowPasseword(!showPassword)}
                                    className="absolute bottom-4 right-2 cursor-pointer"
                                />
                                <label className="block text-base text-primary">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "password" : "text"}
                                    placeholder="Enter your password"
                                    onChange={(e) => setUserPassword(e.target.value)}
                                    className="h-12 w-full border mt-1 pl-4 focus:border-primary rounded-md"
                                />
                            </div>
                            <div className="flex justify-between mt-30px">
                                <label className="check__box flex items-center">
                                    <input type="checkbox" />
                                    <i></i>
                                    <span className="text-primary text-sm ml-3">
                                        Keep me logged in
                                    </span>
                                </label>
                                <p className="text-sm text-primary underline">
                                    Forgot password
                                </p>
                            </div>
                            <Button
                                // onClick={(e) => loginUser(e)}
                                text="Login"
                                className="w-full h-[50px] bg-primary text-secondry mt-11 rounded-md"
                            />
                            <button className="flex justify-center items-center h-[50px] w-full border-2 mt-6 rounded-md">
                                <img src={Google} alt="" />
                                <span className="text-sm text-primary ml-4 ">
                                    Log in with google
                                </span>
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Index