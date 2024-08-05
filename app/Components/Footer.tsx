// import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white text-center font-bold flex justify-between items-center">
      <div className="flex flex-col justify-center items-center text-left p-9 md:p-10">

        <p className="text-md md:text-xl font-normal text-gray-400">
        <h2 className="text-xl md:text-2xl mb-6 underline underline-offset-4 text-gray-200">Contact Us : </h2>
          <span className="font-bold text-gray-200">Email Id </span>: contact@whitebricks.in
          <br />
          <span className="font-bold text-gray-200">Phone no</span>.: +91 99999 99999
          <br />
          <span className="font-bold text-gray-200">Address</span>: ABC Street, Mahavir Nagar, Kandivali, Mumbai 400067.
        </p>
      </div>

      {/* <div className="flex justify-center items-center">
        <Link
          href="/properties"
          className="text-2xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
        >
          Properties
        </Link>
        <Link
          href="/contact"
          className="text-2xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
        >
          Contact
        </Link>
        <Link
          href="/about"
          className="text-2xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
        >
          About
        </Link>
        <Link
          href="/login"
          className="text-2xl font-sans mx-2 transition-transform ease-out 0.25s hover:scale-105 "
        >
          Login
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
