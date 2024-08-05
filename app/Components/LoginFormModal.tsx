const LoginFormModal = () => {
  return (
    <div className="inset-0 bg-opacity-5 backdrop-blur-sm flex items-center justify-center">
      <div className="w-1/2 bg-opacity-90 bg-white min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-sans font-bold mb-6 text-indigo-600">
          Login
        </h2>

        <div className="px-16 py-28 flex flex-col justify-center items-center bg-black bg-opacity-20 rounded-3xl shadow-2xl">
          <form action="">
            {/* <h2 className="text-lg text-center font-bold underline-offset-2">Enter Username</h2>
            <input type="text" className="  mt-2 w-full h-8 rounded-3xl" /> */}

            <h2 className="text-lg text-center font-bold ">Enter Email ID</h2>
            <input
              type="text"
              className=" border-black mt-2 w-full h-10 rounded-xl"
            />

            <h2 className="text-lg text-center font-bold mt-8">
              Enter Password
            </h2>
            <input
              type="text"
              className=" border-black mt-2 w-full h-10 rounded-xl"
            />

            <button className="text-white bg-black p-4 mt-12 rounded-3xl text-center font-bold">
              Login
            </button>

            {/* <p className="">Do you have an Account</p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormModal;
