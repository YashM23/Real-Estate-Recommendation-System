import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Index_1_page from "./Components/Index_1_page";

// const pathVariants = {
//   initial: { pathLength: 0 },
//   animate: {
//     pathLength: 1,
//     transition: {
//       duration: 1,
//       ease: easeInOut,
//     },
//   },
// };

export default function Home() {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 5", "0 0"],
  // });

  return (
    <>
      <Navbar />
      <Index_1_page />

      {/* <motion.div
        className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: easeIn }}
        // ref={ref}
        // style={{ scale: scrollYProgress }}
      >
        <div className="w-1/3 flex flex-col justify-center items-center">
          <h2 className="font-bold text-5xl text-white underline underline-offset-4">
            Properties
          </h2>
        </div>

        <div className="w-2/3 min-h-screen bg-violet-50 bg-opacity-90 container flex justify-center items-center p-10 overflow-x-scroll no-scrollbar">
          <PropertyIndexCard />
        </div>
      </motion.div> */}

      <div className="w-full h-screen bg-blue-500 flex flex-col justify-start items-center">
        <div className="w-full py-6 text-center mt-16">
          <h2 className="font-bold text-3xl md:text-4xl text-white underline underline-offset-2">
            About Us
          </h2>
        </div>

        <div className="w-[420px] md:w-[900px] flex justify-center items-center rounded-2xl bg-black bg-opacity-10 hover:bg-opacity-60 duration-500 shadow-2xl">
          <p className="text-base md:text-xl font-sans text-left font-thin p-10 md:p-16 text-white">
            WhiteBricks is revolutionizing the real estate industry by offering
            innovative, tailored solutions for every client. <br />
            Our platform connects users with ideal real estate properties,
            streamlining transactions to be more efficient, transparent, and
            accessible. Catering to homebuyers, investors, and those seeking
            commercial properties, WhiteBricks features a user-friendly
            interface and advanced search tools for an effortless property
            discovery experience. <br /> We have partnered with reputable real
            estate firms to ensure our listings are diverse, high-quality, and
            current, aiming to be the prime link between buyers and sellers.
            <br /> Our goal is to be the leading digital real estate transaction
            platform, recognized for reliability, a user-centric approach, and
            boosting sales for partners. WhiteBricks: your trusted real estate
            ally.
          </p>
        </div>
      </div>

      <div className="bg-gray-300 w-full min-h-screen flex flex-col justify-start items-center ">
        <div className="mt-16">
          <h2 className="font-bold text-3xl md:text-4xl text-blue-500 underline underline-offset-4">
            Our Services
          </h2>
        </div>

        <div className="w-[450px] md:w-[900px] flex flex-col justify-center items-center rounded-3xl my-6 ">
          <p className="text-sm md:text-xl font-normal mb-4 text-center">
            Explore a comprehensive range of services tailored to enhance your
            real estate experience:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2">
            <li className="text-center p-4 m-4 rounded-xl bg-blue-500 hover:bg-blue-700 bg-opacity-90 shadow-2xl transition transform ease-in-out duration-500">
              <b className="text-base md:text-xl underline underline-offset-4 text-white">
                Property Listings
              </b>
              <p className="text-sm md:text-lg mt-2 text-white">
                Access a diverse range of properties for sale and rent with
                detailed information to aid decision-making.
              </p>
            </li>

            <li className="text-center p-4 m-4 rounded-xl bg-blue-500 hover:bg-blue-700 bg-opacity-90 shadow-2xl transition transform ease-in-out duration-500">
              <b className="text-base md:text-xl underline underline-offset-4 text-white">
                Search and Filter Tools
              </b>
              <p className="text-sm md:text-lg mt-2 text-white">
                Utilize advanced search functions to find properties matching
                your specific criteria effortlessly.
              </p>
            </li>

            <li className="text-center p-4 m-4 rounded-xl bg-blue-500 hover:bg-blue-700 bg-opacity-90 shadow-2xl transition transform ease-in-out duration-500 ">
              <b className="text-base md:text-xl underline underline-offset-4 text-white">
                Channel Partner Directory
              </b>
              <p className="text-sm md:text-lg mt-2 text-white">
                Connect with experienced real estate professionals to guide you
                through transactions.
              </p>
            </li>

            <li className="text-center p-4 m-4 rounded-xl bg-blue-500 hover:bg-blue-700 bg-opacity-90 shadow-2xl transition transform ease-in-out duration-500 ">
              <b className="text-base md:text-xl underline underline-offset-4 text-white">
                Virtual Tours and Galleries
              </b>
              <p className="text-sm md:text-lg mt-2 text-white">
                Experience properties remotely through high-quality photos and
                virtual tours.
              </p>
            </li>
          </ul>
          <div className="text-center p-10 m-4 rounded-xl bg-blue-500 hover:bg-blue-700 bg-opacity-90 shadow-2xl transition transform ease-in-out duration-500">
            <b className="text-base md:text-xl underline underline-offset-4 text-white">
              Customer Support and Consultation Services
            </b>
            <p className="text-sm md:text-lg mt-2 text-white">
              Expert advice and personalized support for all your real estate
              queries.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="w-full min-h-screen flex flex-col justify-start items-center ">
        <div className="mt-24">
          <h2 className="font-bold text-4xl text-black underline underline-offset-2">
            Contact Us
          </h2>
        </div>

        <div className="w-[1080px] bg-black bg-opacity-20 p-16 mt-24 flex justify-center items-center rounded-3xl">
          
        </div>
      </div> */}

      <Footer />
    </>
  );
}
