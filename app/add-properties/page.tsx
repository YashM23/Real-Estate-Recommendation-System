const page = () => {
  return (
    <div className="bg-amber-300 flex flex-col justify-center">
      <div className=" flex items-center justify-center">
        <h2 className="font-sans font-extrabold text-5xl text-center mt-10">Add your Property</h2>
      </div>
      <form action="" className="px-60">
        <div className="bg-black mt-10 rounded-xl shadow-2xl bg-opacity-60 p-16 relative">
          <div className="flex flex-col">
            <h2 className="text-white font-semibold font-sans text-2xl">
              Building Name
            </h2>
            <input
              type="text"
              placeholder=""
              className="text-2xl text-white font-normal mt-2 py-2 bg-transparent outline-none border-b-2"
            />

            <h2 className="text-white font-semibold font-sans text-2xl mt-4">
              Description
            </h2>
            <input
              placeholder=""
              className="text-2xl mt-2 py-2 font-normal bg-transparent outline-none border-b-2 text-white"
            />
            <h2 className="text-white font-semibold font-sans text-2xl mt-4">
              Price (E.g. 1,00,000)
            </h2>
            <input
              type="text"
              placeholder=""
              className=" text-2xl mt-2 py-2 font-normal bg-transparent outline-none border-b-2 text-white"
            />

            <h2 className="text-white font-semibold font-sans text-2xl mt-4">
              Google Maps Link
            </h2>
            <input
              type="text"
              placeholder=""
              className=" text-2xl mt-2 py-2 font-normal bg-transparent outline-none border-b-2 text-white"
            />

            <h2 className="text-white font-semibold font-sans text-2xl mt-4">
              Address
            </h2>
            <input
              type="text"
              placeholder=""
              className=" text-2xl mt-2 py-2 font-normal bg-transparent outline-none border-b-2 text-white "
            />

            <h2 className="text-white font-semibold font-sans text-2xl mt-4">
              No. of BHKs (in Numbers)
            </h2>
            <input
              type="text"
              className=" text-2xl mt-2 py-2 font-normal bg-transparent outline-none border-b-2 text-white "
            />
          </div>
          <button
            type="submit"
            className="absolute right-5 top-5 rounded-2xl px-4 py-2 bg-amber-400 hover:bg-black hover:text-white transition-transform ease-in-out duration-300 text-black font-bold"
          >
            + Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
