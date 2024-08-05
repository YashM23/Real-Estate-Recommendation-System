"use client";

import { useState } from "react";
import PropertyModal from "./PropertyModal";
// import building1 from "C:/building_1.jpg";
// import Image from "next/image";
// import { motion } from "framer-motion";

const PropertyPageCard = ({}) => {
  const [propertyModal, setPropertyModal] = useState(false);
  const [propertyItem, setPropertyItem] = useState({});

  const properties = [
    {
      name: "Oberoi Skycity",
      address: "Borivali(East)",
      price: "₹41240206",
      images: ["/public/building_1.jpg"],
      description:
        "Sky City is an integrated development project spread over 25 acres with picturesque views, beautifully designed spacious homes, and an array of world-class amenities. Sky City brings elegance and plenty more to the Mumbai skyline, bringing its residents closer to nature like never before. The development is thoughtfully planned with a 5 star luxury hotel, Sky City Mall and a seamless connectivity to the Metro Station.",
      bhk: 2,
      linkedcps: [
        {
          name: "Viren Mehta",
          area: "Kandivali (West)",
        },
      ],
      inventory_count: 1,
    },
    {
      name: "Oberoi Skycity",
      address: "Borivali(East)",
      price: "₹41240206",
      images: ["/public/building_1.jpg"],
      description:
        "Sky City is an integrated development project spread over 25 acres with picturesque views, beautifully designed spacious homes, and an array of world-class amenities. Sky City brings elegance and plenty more to the Mumbai skyline, bringing its residents closer to nature like never before. The development is thoughtfully planned with a 5 star luxury hotel, Sky City Mall and a seamless connectivity to the Metro Station.",
      bhk: 2,
      linkedcps: [
        {
          name: "Viren Mehta",
          area: "Kandivali (West)",
        },
      ],
      inventory_count: 1,
    },
    {
      name: "Oberoi Skycity",
      address: "Borivali(East)",
      price: "₹41240206",
      images: ["/public/building_1.jpg"],
      description:
        "Sky City is an integrated development project spread over 25 acres with picturesque views, beautifully designed spacious homes, and an array of world-class amenities. Sky City brings elegance and plenty more to the Mumbai skyline, bringing its residents closer to nature like never before. The development is thoughtfully planned with a 5 star luxury hotel, Sky City Mall and a seamless connectivity to the Metro Station.",
      bhk: 2,
      linkedcps: [
        {
          name: "Viren Mehta",
          area: "Kandivali (West)",
        },
      ],
      inventory_count: 1,
    },
    {
      name: "Vora Skyline",
      address: "Kandivali (West)",
      price: "₹3,31,31,140",
      description:
        "Imagine a home that ticks all the boxes on your wish list. From the ease of commuting to the choicest of amenities; from the finest in luxury to the friendliest neighborhood; and from A-grade social infrastructure to the coolest social circle, have them all. Located in the most exclusive residential pocket of Kandivali West – Mahavir Nagar, the project is well-connected to the city’s key destinations and business districts by rail, road and the upcoming metro. And with A-grade social infrastructure in the vicinity, you can be assured of conveniences literally at your doorstep.",
      bhk: 3,

      images: [
        {
          img1: "/public/building_1.jpg",
          img2: "/public/building_2.jpg",
        },
      ],
      linkedcps: [
        {
          name: "Viren Mehta",
          area: "Kandivali (West)",
        },
      ],
      inventory_count: 4,
    },
    {
      name: "Dem Phoenix",
      address: "Kandivali (West)",
      price: "₹77,71,680",
      description:
        "Presenting DEM Phoenix- a beautiful project, a well-planned living space which is the hallmark of thoughtfully laid out flats at reasonable prices. DEM Phoenix brings a lifestyle that befits royalty with its beautiful apartments at Malad. Your home will now serve as a perfect get-away after a tiring day at work, as DEM Phoenix will make you forget that you are living in the heart of the city. These residential apartments in Malad offer luxurious homes that amazingly escape the noise of the city center. In addition to that, there are a number of benefits of living in apartments with good locality. DEM Phoenix is conveniently located at Malad to provide unmatched connectivity from all the important landmarks and places of everyday utility such as various well-known hospitals, educational institutions, super-marts, parks, entertainment spots, recreational centres and so on.",
      bhk: 1,
      images: {
        img1: "/public/building_1.jpg",
        img2: "/public/building_2.jpg",
      },
      linkedcps: [
        {
          name: "Viren Mehta",
          area: "Kandivali (West)",
        },
      ],
      inventory_count: 2,
    },
    {
      name: "Dem Phoenix",
      address: "Kandivali (West)",
      price: "₹77,71,680",
      description:
        "Presenting DEM Phoenix- a beautiful project, a well-planned living space which is the hallmark of thoughtfully laid out flats at reasonable prices. DEM Phoenix brings a lifestyle that befits royalty with its beautiful apartments at Malad. Your home will now serve as a perfect get-away after a tiring day at work, as DEM Phoenix will make you forget that you are living in the heart of the city. These residential apartments in Malad offer luxurious homes that amazingly escape the noise of the city center. In addition to that, there are a number of benefits of living in apartments with good locality. DEM Phoenix is conveniently located at Malad to provide unmatched connectivity from all the important landmarks and places of everyday utility such as various well-known hospitals, educational institutions, super-marts, parks, entertainment spots, recreational centres and so on.",
      bhk: 3,
      images: {
        img1: "/public/building_1.jpg",
        img2: "/public/building_2.jpg",
      },
      linkedcps: [
        {
          name: "Viren Mehta",
          area: "Kandivali (West)",
        },
      ],
      inventory_count: 2,
    },
  ];

  return (
    <>
      {/* <Image src={"/building_1.jpg"} alt="" height={100} width={100} /> */}

      {properties.map((item, index) => (
        <>
          <div
            key={index}
            className="bg-blue-700 bg-opacity-20 shadow-xl text-black relative flex flex-col rounded-2xl py-16 hover:scale-105 duration-300 m-4 cursor-pointer"
            onClick={() => {
              setPropertyModal(true);
              setPropertyItem(item);
            }}
            // initial={{ opacity: 0, y: "1080px" }}
            // whileHover={{ scale: 1.01 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.15 }}
          >
            <h2 className="font-extrabold text-2xl ml-8">{item.name}</h2>
            <p className="font-light text-xl mt-2 ml-8">{item.address}</p>
            {/* <p className="font-light text-xl ml-8">Builder</p> */}
            <p className="font-bold text-xl mt-3 ml-8">{item.price}</p>
            <p className="absolute top-0 right-4 p-6 font-normal text-lg">
              <b>{item.bhk} BHK</b>
            </p>
            {/* <p className="absolute bottom-0 right-4 p-6 font-normal text-lg">
              Inventory Remaining : {item.inventory_count}
            </p> */}
            {/* <button className="bg-black absolute bottom-0 right-0 px-3 py-3 rounded-2xl hover:bg-green-600 text-white font-bold m-6">
            {" "}
            Call CP
          </button>
          <button className="bg-black absolute bottom-0 right-24 px-3 py-3 rounded-2xl hover:bg-green-600 text-white font-bold m-6">
            {" "}
            Call Builder
          </button> */}
          </div>

          <PropertyModal
            isVisible={propertyModal}
            _onClose={() => {
              setPropertyModal(false);
            }}
            propertyData={propertyItem}
          />
        </>
      ))}
    </>
  );
};

export default PropertyPageCard;
