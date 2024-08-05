// import Image from "next/image";
// import house from "../public/house.svg";

const PropertyIndexCard = () => {
  const properties = [];

  return (
    <>
      {properties.map((item, index) => (
        <div
          className="bg-gray-400 bg-opacity-60 rounded-3xl mx-3 shadow-lg h-min py-36 px-14 relative text-left hover:scale-105 transition-transform duration-100r"
          key={index}
        >
          {/* <Image src={item.imageURL} width={100} height={100} alt="" /> */}
          <h2 className="text-black text-left font-sans font-bold text-2xl underline underline-offset-4">
            {item.name}
          </h2>
          <p className="text-black text-left font-sans text-xl mt-3">
            {item.address}
          </p>
          <p className="text-black text-left font-sans text-xl mt-1">
            {item.price}
          </p>
          <button className="bg-black bottom-0 right-0 absolute m-6 text-base mt-3 px-4 py-2 rounded-full text-white hover:bg-green-600">
            Call CP
          </button>
        </div>
      ))}
    </>
  );
};

export default PropertyIndexCard;
