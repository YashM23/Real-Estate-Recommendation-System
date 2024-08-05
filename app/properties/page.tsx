"use client";

import Navbar from "@/app/Components/Navbar";
import { easeOut, easeInOut, motion } from "framer-motion";
import PropertyPageCard from "../Components/PropertyPageCard";
// import Link from "next/link";
import { useState } from "react";
import AddPropertyForm from "../Components/AddPropertyForm";
import Link from "next/link";
// import PropertyModal from "../Components/PropertyModal";

const Properties = () => {
  // const [price, setPrice] = useState("Price Range");
  const [addProperty, setAddProperty] = useState<boolean>(false);
  const [propertyModal, setPropertyModal] = useState<boolean>(false);
  const [buttonContent, setButtonContent] = useState("");
  const [search, setSearch] = useState(false);

  // const changePrice = (event: any) => {
  //   setPrice(event.target.value);
  // };

  const openModal = () => {
    setPropertyModal(!propertyModal);
  };

  const handleButtonClick = (content: any) => {
    setButtonContent(content);
  };

  const setInputContent = (e: any) => {
    setButtonContent(e.target.value);
  };

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        className="min-h-screen top-0 bg-gray-300 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <div className="w-1/5 flex flex-col justify-start items-center">
          <p className="text-3xl font-bold text-white text-center">
            Apply Filters
          </p>

          <motion.div
            initial={{ opacity: 0, x: "-1080px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <select
                  name="BHK"
                  id="bhk"
                  className="w-full px-8 py-2 rounded-2xl bg-transparent border-none text-white font-semibold cursor-pointer"
                >
                  <option value="1bhk" className="text-black">
                    No of BHKs
                  </option>
                  <option value="1bhk" className="text-black">
                    1 BHK
                  </option>
                  <option value="1bhk" className="text-black">
                    2 BHK
                  </option>
                  <option value="1bhk" className="text-black">
                    2.5 BHK
                  </option>
                  <option value="1bhk" className="text-black">
                    3 BHK
                  </option>
                  <option value="1bhk" className="text-black">
                    3.5 BHK
                  </option>
                </select>
          </motion.div>

          <div className="mt-10">
            <p className="text-white text-2xl text-left underline underline-offset-8 mb-4">
              Price
            </p>

            <div className="flex flex-col justify-start items-center p-4">
              <p className="text-xl font-bold text-white">{price}</p>
              <input
                type="range"
                className="w-48 mt-4"
                min={1000000}
                max={100000000}
                step={100000}
                // onChange={changePrice}
              />
            </div>
          </div>
        </div> */}

        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            {!search ? (
              <>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="font-sans font-extrabold text-lg md:text-3xl text-center">
                    Write Prompts to get Your Personalised Recommendations.
                  </h2>
                  <span className="font-medium font-serif text-lg md:text-xl mt-4">
                    (Here are some Examples)
                  </span>
                </div>

                <div className="rounded-xl flex flex-col justify-center items-center ">
                  <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-10 rounded-2xl no-scrollbar overflow-auto h-[300px] scroll-smooth">
                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>

                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>
                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>
                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>
                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>
                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>
                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>

                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-4 m-2 font-medium text-sm md:text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>


                    {/* <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-6 m-2 font-medium text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white transition ease-in-out duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>

                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-6 m-2 font-medium text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white transition ease-in-out duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>

                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-6 m-2 font-medium text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white transition ease-in-out duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>

                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-6 m-2 font-medium text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white transition ease-in-out duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button>

                    <button
                      onClick={() =>
                        handleButtonClick(
                          "Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen"
                        )
                      }
                      className="p-6 m-2 font-medium text-base text-black bg-gray-400 bg-opacity-60 rounded-lg hover:bg-blue-500 hover:text-white transition ease-in-out duration-300"
                    >
                      Find me a home in Kandivali with 1 Bedroom,Hall,Kitchen
                    </button> */}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            {/* {!addProperty ? (
            ) : (
              <h2 className="font-sans font-extrabold text-5xl text-center">
                Add Property
              </h2>
            )} */}

            {/* {!addProperty ? (
              <Link
                href="/add-properties"
                // onClick={() => {
                //   setAddProperty(!addProperty);
                // }}
                className="absolute right-14 text-black px-4 py-1 text-md bg-amber-400 rounded-full object-center cursor-pointer hover:scale-105 transition-transform ease-in duration-300"
              >
                <span className="font-bold mr-2">+</span>Add Property
              </Link>
            ) : (
              <button
                onClick={() => {
                  setAddProperty(!addProperty);
                }}
                className="absolute right-14 text-white px-4 py-2 text-xl bg-red-600 rounded-full object-center cursor-pointer"
              >
                X
              </button>
            )} */}

            <div className="flex justify-center items-center p-3 bg-black bg-opacity-40 fixed bottom-8 rounded-lg w-[450px] md:w-[800px] backdrop-blur-sm z-10 shadow-xl">
              <input
                type="text"
                className="w-full ml-4 bg-transparent outline-none text-gray-200 text-base placeholder:text-lg placeholder:font-sans placeholder:font-semibold placeholder:text-white/55"
                placeholder="Enter Your Prompt"
                onChange={setInputContent}
                value={buttonContent}
              />
              <button
                onClick={() => {
                  setSearch(!search);
                }}
                className="bg-blue-600 text-white hover:bg-blue-800 duration-300 px-4 py-2 mr-2 rounded-xl font-bold "
              >
                Find
              </button>
            </div>
          </div>

          {search && (
            <>
              {/* <div className="flex justify-center items-center">
                <h2 className="font-sans font-extrabold text-4xl underline underline-offset-4 mt-10">
                  These are some Listed Properties
                </h2>
              </div> */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 lg:px-40 mt-10">
                <PropertyPageCard />
              </div>
            </>
          )}
        </div>
        {/* <motion.div
          className="bg-yellow-600 shadow-2xl text-4xl text-white z-20 font-bold bottom-0 right-0 rounded-full fixed px-4 py-6 m-14 hover:scale-105 transition-transform ease-in-out 1.5s"
          initial={{ opacity: 0, x: "100px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: easeInOut }}
        >
          <Link href="/chatbot">👨‍💻</Link>
        </motion.div> */}
      </motion.div>
    </>
  );
};

export default Properties;
