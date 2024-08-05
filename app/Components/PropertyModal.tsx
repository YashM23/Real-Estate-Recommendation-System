import Image from "next/image";

interface PropertyModalProps {
  isVisible: any;
  _onClose: any;
  propertyData: any;
}

const PropertyModal = ({
  isVisible,
  _onClose,
  propertyData,
}: PropertyModalProps) => {
  if (!isVisible) return null;

  const imgs = propertyData.images;
  console.log(imgs);

  return (
    <>
      <div className="fixed inset-0 bg-black/10 overflow-x-auto flex items-center justify-center z-20">
        <div className="w-[450px] md:w-[900px] flex flex-col relative ">
          <button
            className="text-red-600 place-self-end text-2xl font-extrabold absolute right-4 top-2"
            onClick={() => {
              _onClose();
            }}
          >
            X
          </button>
          {/* <p className="text-white">{imgs}</p> */}
          <div className="bg-white/40 p-12 md:p-16 rounded-lg flex md:flex-row flex-col shadow-sm">
            {/* <Image src={imgs} alt="" width={150} height={150}/> */}
            <div className="bg-gray-400 hidden md:block md:w-1/3">
              <div className="h-full flex items-center justify-center">
                Image
                {/* <Image src={"/building1.jpg"} alt="" height={100} width={100} /> */}
              </div>
            </div>

            <div className=" md:w-2/3 flex flex-col md:px-4">
              <p className="font-bold text-xl md:text-3xl">{propertyData.name}</p>
              <p className="font-normal text-sm md:text-lg text-left mt-1">
                {propertyData.address}
              </p>
              <p className="font-normal text-base md:text-xl text-left mt-2">

                <span className="font-bold">Base Price : </span>
                {propertyData.price}
              </p>
              <p className="text-xs md:text-sm mt-2">{propertyData.description}</p>

              <h2 className="underline underline-offset-4 mt-4 mb-2 text-lg font-bold">
                Listed Channel Partners :
              </h2>

              {propertyData.linkedcps.map((item: any, index: any) => (
                <p className="text-base font-normal" key={index}>
                  {item.name} - {item.phonenumber}
                </p>
              ))}
              {/* <p className="absolute bottom-0 right-0 p-8 font-normal text-base">
                Inventory Remaining : {propertyData.inventory_count}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyModal;
