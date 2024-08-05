"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import LoginFormModal from "./LoginFormModal";
import { useSession } from "next-auth/react";
import { signIn,signOut } from "next-auth/react";


const Footer = () => {
  const [searchProperties, setSearchProperties] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const search_Properties = (e: any) => {
    setSearchProperties(e);
  };
  const { status } = useSession();

  return (
    <>
      <motion.div
        className="w-full p-4 fixed top-0 z-10 "
        initial={{ y: "", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: easeIn }}
      >
        <nav className="flex justify-between items-center px-4">
          <h2 className="text-black font-extrabold font-sans text-lg md:text-xl">
            <Link href="/">WhiteBricks</Link>
          </h2>

          <div>
            {/* <input
            onChange={(t) => search_Properties(t)}
            type="text"
            // placeholder="Search For Properties..."
            className="outline-none text-black text-center px-52 py-2 rounded-xl font-semibold font-sans bg-transparent text-white text-xl"
          /> */}
          </div>

          <AnimatePresence>
            <motion.div className="text-black flex justify-between px-6">
              {/* <Link
                href="/properties"
                className="text-xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
              >
                Properties
              </Link>
              <Link
                href="/contact"
                className="text-xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
              >
                About
              </Link> */}
              {status ==='authenticated' ? (
                <button
                  className="text-xl font-sans mx-2 transition transform ease-in-out duration-500"
                  onClick={()=>{signOut()}}
                >
                  Sign-Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="text-base font-semibold bg-blue-500 text-white text-center p-2 rounded-lg font-sans duration-500 hover:bg-transparent hover:text-black "
                  // onClick={() => setShowLoginModal(!showLoginModal)}
                >
                  Sign-In
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </nav>
      </motion.div>

      {showLoginModal && <LoginFormModal />}
    </>
  );
};

export default Footer;
