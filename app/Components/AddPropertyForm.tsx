const AddPropertyForm = () => {
  return (
    <form action="">
      <div className="bg-black mt-10 rounded-xl shadow-2xl bg-opacity-10 p-12 relative">
        <div className="flex flex-col">
          <h2 className="text-black font-semibold font-sans text-2xl">
            Building Name
          </h2>
          <input
            type="text"
            placeholder=""
            className="text-xl font-normal mt-2 px-10 py-2 rounded-2xl border-2 border-black  "
          />

          <h2 className="text-black font-semibold font-sans text-2xl mt-4">
            Description
          </h2>
          <textarea
            placeholder=""
            className="mt-2 text-xl font-normal px-20 py-20 rounded-2xl border-2 border-black "
          />
          <h2 className="text-black font-semibold font-sans text-2xl mt-4">
            Price (E.g. 1,00,000)
          </h2>
          <input
            type="text"
            placeholder=""
            className=" mt-2 text-xl font-normal px-10 py-2 rounded-2xl border-2 border-black "
          />

          <h2 className="text-black font-semibold font-sans text-2xl mt-4">
            Google Maps Link
          </h2>
          <input
            type="text"
            placeholder=""
            className=" mt-2 text-xl font-normal px-10 py-2 rounded-2xl border-2 border-black "
          />

          <h2 className="text-black font-semibold font-sans text-2xl mt-4">
            Address
          </h2>
          <input
            type="text"
            placeholder=""
            className=" mt-2 text-xl font-normal px-10 py-2 rounded-2xl border-2 border-black "
          />

          <h2 className="text-black font-semibold font-sans text-2xl mt-4">
            No. of BHKs (in Numbers)
          </h2>
          <input
            type="text"
            className=" mt-2 mb-10 text-xl font-normal px-10 py-2 rounded-2xl border-2 border-black "
          />
        </div>
        <button
          type="submit"
          className="absolute right-5 top-5 rounded-2xl px-4 py-2 bg-black hover:bg-gray-600 hover:transition-transform text-white"
        >
          + Add
        </button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
