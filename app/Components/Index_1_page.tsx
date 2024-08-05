"use client";

import Link from "next/link";
import { easeIn, easeInOut, motion, spring, useScroll } from "framer-motion";

const Index_1_page = () => {
  return (
    <motion.div
        className="w-full h-screen bg-gray-300 flex justify-start items-center"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        {/* <Image className="-z-20 object-contain min-h-screen w-full  blur-sm fixed" alt="" src={bgbuilding} height={1080} width={1920}/> */}

        <div className=" flex flex-col justify-center items-start ml-10">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-extrabold text-blue-500 text-left hover:text-blue-700 duration-500"
            initial={{ y: "-1000px" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            Real Estate <br />
            <span className="text-black text-3xl md:text-4xl font-sans">Recommendation System</span>
          </motion.h2>
          <motion.p
            className=" font-sans font-normal md:text-xl  mt-4 text-gray-800 text-left"
            initial={{ x: "-1000px" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            Your Ultimate Solution for Finding New Homes
          </motion.p>
          <motion.button
            className="text-white bg-blue-500 hover:bg-blue-700 text-sm md:text-lg p-3 mt-10 rounded-md text-center font-bold duration-500"
            initial={{ x: "-1000px" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.75, ease: easeInOut }}
          >
            <Link href="/properties">Get Started</Link>
          </motion.button>
          {/* <motion.div
            className="bg-violet-300 shadow-2xl text-xl text-black z-20 font-bold bottom-0 right-0 rounded-full fixed px-4 py-4 m-14"
            initial={{ opacity: 0, x: "1080px" }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.25, ease: easeInOut }}
          >
            <Link href="/chatbot">LinBot</Link>
          </motion.div> */}
        </div>

        {/* <div className="w-1/3 flex justify-center items-center">
          <div className="w-60 h-60">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              initial={{ x: "1000px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            >
              <g data-name="14-House">
                <motion.path d="m31.62 12.22-15-12a1 1 0 0 0-1.25 0l-15 12A1 1 0 0 0 1 14h2v17a1 1 0 0 0 1 1h20v-2h-4v-9a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v9H5V14h17v-2H3.85L16 2.28 28.15 12H28a1 1 0 0 0-1 1v6h2v-5h2a1 1 0 0 0 .62-1.78zM14 22h4v8h-4z" />
                <motion.path d="m25 26.59-1.29-1.29-1.41 1.41 2 2a1 1 0 0 0 1.41 0l6-6-1.41-1.41z" />
              </g>
            </motion.svg>
          </div>
        </div> */}
      </motion.div>
  )
}

export default Index_1_page