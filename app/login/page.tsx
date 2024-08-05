"use client";

import Image from "next/image";
import { easeInOut, easeOut, motion } from "framer-motion";
import { useState } from "react";
import Footer from "../Components/Footer";
import { signIn,signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Navbar from '../Components/Navbar'

const LoginPage = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
    {/* <Navbar /> */}
      <motion.div
        className="w-full bg-gray-300 min-h-screen flex justify-center items-center top-0"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        {!register && (
          <div className="w-full bg-opacity-95 min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl font-sans font-extrabold mb-6 text-black underline">
              Sign-In
            </h2>
            <div className="px-12 py-20 flex flex-col justify-center items-center bg-black bg-opacity-20 rounded-3xl shadow-2xl">
              <form action="">
                {/* <h2 className="text-lg text-center font-bold underline-offset-2">Enter Username</h2>
            <input type="text" className="  mt-2 w-full h-8 rounded-3xl" /> */}

                <h2 className="text-base text-left font-normal ">
                  Enter Email ID
                </h2>
                <input
                  type="text"
                  className=" bg-black bg-opacity-10 mt-2 w-full rounded-lg outline-none p-2  text-black font-normal text-lg"
                />

                <h2 className="text-base text-left font-normal mt-8">
                  Enter Password
                </h2>
                <input
                  type="password"
                  className=" bg-black bg-opacity-10 mt-2 w-full rounded-lg outline-none p-2  text-black font-normal text-lg"
                />

                <button className="w-full text-white bg-black p-3 mt-8 rounded-lg text-center font-medium text-base hover:bg-white hover:text-black transition transform ease-in-out duration-300">
                  Sign In
                </button>

                <div className="flex justify-center items-center mt-4 ">
                  <button onClick={()=>{signIn("google")}} className="w-full p-3 bg-blue-800 hover:bg-blue-600 text-white rounded-lg font-semibold transition transform ease-in-out duration-300">Sign In with Google</button>
                </div>

                <p className="mt-8 text-base">
                  New User?
                  <span
                    className="cursor-pointer font-bold underline pl-2"
                    onClick={() => {
                      setRegister(true);
                    }}
                  >
                    Register Here
                  </span>
                </p>
              </form>
            </div>
          </div>
        )}

        {register && (
          <div className="w-full flex flex-col justify-center items-center ">
            {/* <Image
            src={}
            width={200}
            height={200}
            alt=""
            className="animate-[bounce_4s_ease-in-out_infinite] "
          /> */}

            <h2 className="text-4xl font-sans font-extrabold mb-6 text-black">
              Register
            </h2>
            <div className="px-12 py-16 bg-black bg-opacity-20 rounded-3xl shadow-2xl">
              <form action="">
                <h2 className="text-base text-left font-normal ">
                  Enter Username
                </h2>
                <input
                  type="text"
                  className=" bg-black bg-opacity-10 mt-2 w-full rounded-lg outline-none p-2  text-black font-normal text-lg"
                />

                <h2 className="text-base text-left font-normal mt-4 ">
                  Enter Email ID
                </h2>
                <input
                  type="text"
                  className=" bg-black bg-opacity-10 mt-2 w-full rounded-lg outline-none p-2  text-black font-normal text-lg"
                />

                <h2 className="text-base text-left font-normal mt-4">
                  Enter Password
                </h2>
                <input
                  type="password"
                  className=" bg-black bg-opacity-10 mt-2 w-full rounded-lg outline-none p-2  text-black font-normal text-lg"
                />

                <button className="text-white bg-black p-4 mt-6 rounded-2xl text-center font-medium text-base hover:bg-gray-900 transition transform ease-in-out duration-300">
                  Register
                </button>

                <p
                  className="mt-6 text-base"
                  onClick={() => {
                    setRegister(false);
                  }}
                >
                  Already have an account. <span className="cursor-pointer underline font-bold" onClick={() => {
                    setRegister(false);
                  }}>Login</span>
                </p>
              </form>
            </div>
          </div>
        )}
      </motion.div>

      <Footer/>
    </>
  );
};

export default LoginPage;
