// import React, { useState } from "react";
// import Button from "../../components/Button";
// import Logo from "../../assets/img/logo.svg";
// import Eye from "../../assets/img/eye.svg";
// import Google from "../../assets/img/google.svg";

// const Index = () => {
//   const [showPassword, setShowPasseword] = useState(true);
//   const [userEmail, setUserEmail] = useState();
//   const [userPassword, setUserPassword] = useState();
//   return (
//     <>
//       <section className="sm:flex">
//         <div className="login__banner hidden sm:block w-1/2  bg-slate-500"></div>
//         <section className="sm:w-1/2 py-10 px-24 h-screen overflow-y-scroll scroll__bar">
//           <div>
//             <img src={Logo} alt="" className="h-28 w-28 block mx-auto" />
//             <h1 className="text-3xl font-bold text-primary mt-8 text-center">
//               Welcome to ECD
//             </h1>
//             <form className="mt-12">
//               <div className="mb-5">
//                 <label className="block text-base text-primary">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   onChange={(e) => setUserEmail(e.target.value)}
//                   className="h-12 w-full border mt-1 pl-4 focus:border-primary rounded-md"
//                 />
//               </div>
//               <div className="mb-5 relative">
//                 <img
//                   src={Eye}
//                   onClick={() => setShowPasseword(!showPassword)}
//                   className="absolute bottom-4 right-2 cursor-pointer"
//                 />
//                 <label className="block text-base text-primary">Password</label>
//                 <input
//                   type={showPassword ? "password" : "text"}
//                   placeholder="Enter your password"
//                   onChange={(e) => setUserPassword(e.target.value)}
//                   className="h-12 w-full border mt-1 pl-4 focus:border-primary rounded-md"
//                 />
//               </div>
//               <div className="flex justify-between mt-30px">
//                 <label className="check__box flex items-center">
//                   <input type="checkbox" />
//                   <i></i>
//                   <span className="text-primary text-sm ml-3">
//                     Keep me logged in
//                   </span>
//                 </label>
//                 <p className="text-sm text-primary underline">
//                   Forgot password
//                 </p>
//               </div>
//               <Button
//                 // onClick={(e) => loginUser(e)}
//                 text="Login"
//                 className="w-full h-[50px] bg-primary text-secondry mt-11 rounded-md"
//               />
//               <button className="flex justify-center items-center h-[50px] w-full border-2 mt-6 rounded-md">
//                 <img src={Google} alt="" />
//                 <span className="text-sm text-primary ml-4 ">
//                   Log in with google
//                 </span>
//               </button>
//             </form>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default Index;

import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Logo from "../../assets/img/logo.svg";
import Eye from "../../assets/img/eye.svg";
import Google from "../../assets/img/google.svg";
import { Formik } from "formik";
import authService from "../../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUser,
  loginUserChecking,
  userLogout,
} from "../../store/action/auth.action";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPasseword] = useState(true);
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const dispatch = useDispatch();
  const { isAuthenticated, isloading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loginUserChecking());
  }, []);
  useEffect(() => {
    isAuthenticated && navigation("/");
  }, [isAuthenticated]);

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
            {isloading && (
              <>
                <div role="status">
                  <svg
                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            )}

            <Formik
              initialValues={{
              
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                return errors;
              }}
              onSubmit={async (values) => {
                dispatch(
                  loginUser({
                    email: values.email.trim(),
                    password: values.password.trim(),
                  })
                );
                // const rest = await authService.userLogin({
                //   email: values.email.trim(),
                //   password: values.password.trim(),
                // });
                // console.log(rest);
                // localStorage.setItem("userToken", rest.data.token);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <form className="mt-12">
                  <div className="mb-5">
                    <label className="block text-base text-primary">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
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
                      name="password"
                      className="h-12 w-full border mt-1 pl-4 focus:border-primary rounded-md"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
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
                    onClick={handleSubmit}
                    text="Login"
                    className="w-full bg-primary h-[50px] text-secondry mt-11 rounded-md"
                  />
                </form>
              )}
            </Formik>
            {/* <button className="flex justify-center items-center h-[50px] w-full border-2 mt-6 rounded-md">
              <img src={Google} alt="" />
              <span className="text-sm text-primary ml-4 ">
                Log in with google
              </span>
            </button> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Index;
