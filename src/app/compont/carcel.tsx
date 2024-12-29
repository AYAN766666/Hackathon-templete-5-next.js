
import Image from "next/image";
import women from "../../../public/shop.jpg";

export default function Carausel() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black"   id="home"       >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={women}
          alt="Women"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-white px-4 sm:px-8 lg:px-16 flex flex-col items-start gap-4 max-w-screen-md">
        <h5 className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide">
          Summer 2020
        </h5>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          New Collection
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-[90%]">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-[#2DC071] px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg lg:text-xl font-semibold rounded-lg hover:bg-[#28a360] transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

      
      
    
    