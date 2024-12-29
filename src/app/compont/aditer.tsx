

import Image from "next/image";
import Men from "../../../public/abbas.png";
import women from "../../../public/arman.png";
import div1 from "../../../public/ayan.png";
import div2 from "../../../public/waqas.png";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]             "   id="home">
      <div className="max-w-[1200px] w-full h-auto flex flex-col gap-8 bg-[#FAFAFA] p-6 md:p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-Montserrat font-semibold text-lg md:text-xl lg:text-2xl">
            EDITOR’S PICK
          </h3>
          <p className="font-Montserrat text-sm md:text-base text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full flex flex-wrap justify-center md:justify-between gap-6">
          {/* Men Image */}
          <div className="relative w-full md:w-[48%] lg:w-[45%] h-64 md:h-[500px]">
            <Image
              src={women}
              alt="men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-base hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-[48%] md:w-[20%] lg:w-[20%] h-64 md:h-[500px]">
            <Image
              src={div1}
              alt="women"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-base hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids Section */}
          <div className="w-[48%] md:w-[28%] lg:w-[28%] flex flex-col gap-4">
            {/* Accessories */}
            <div className="relative w-full h-32 md:h-[240px]">
              <Image
                src={Men}
                alt="div1"
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-base hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>
            {/* Kids */}
            <div className="relative w-full  h-32 md:h-[240px]">
              <Image
                src={div2}
                alt="div2"
                className="w-full h-full  object-cover rounded-md"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-base hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

