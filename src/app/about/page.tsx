 import Navbar from "../compont/green";
import Image from "next/image";
 import girl from '../../../public/bg43.png' 
 import card from '../../../public/bgvideo.png' 
 import user from '../../../public/user.png' 
 import user1 from '../../../public/user1.png' 
 
 import ki from '../../../public/row.png' 
 import blue from '../../../public/blue.jpg.png' 
 import Footer from "../compont/footer";
export default function AboutUs() {
  return (
    <div  id="about"    >
       <Navbar/>
      <div className="relative flex flex-col gap-8">
       {/* First Section */}
<div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
  <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px] lg:h-[321px]">
    {/* Column 1 */}
    <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
      <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
        ABOUT COMPANY
      </h5>
      <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
        ABOUT US
      </h1>
      <h4 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
        We know how large objects will act, but things on a small scale
      </h4>
      <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
        <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
          <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
            Get Quote Now
          </span>
        </div>
      </div>
    </div>
    
      {/* Column 2 */}
      
      <Image src={girl} alt="girl" className="absolute lg:block hidden lg:left-[-1px] top-[300px] lg:top-[0px]" />
          
  </div>
</div>

        {/* Description Section */}
        <div className="relative w-full">
  <div
    className="relative flex flex-col items-center px-4 py-6 w-full max-w-screen-xl h-auto left-1/2 -translate-x-1/2 bg-white"
  >
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-15 w-full max-w-full h-auto"
    >
      {/* Frame 1 */}
      <div
        className="flex flex-col items-start gap-4 w-full lg:w-[394px] h-auto"
      >
        <div
          className="flex flex-col items-start gap-3 w-full h-auto"
        >
          {/* Paragraph */}
          <p
            className="text-[14px] leading-[20px] font-normal tracking-[0.2px] text-[#E74040]"
          >
            Problems trying
          </p>

          {/* Section Title */}
          <h2
            className="w-full text-[24px] leading-[32px] font-bold tracking-[0.1px] text-[#252B42]"
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
      </div>

      {/* Column */}
      <div
        className="flex flex-col items-start gap-3 w-full lg:w-[529px] h-auto"
      >
        {/* Paragraph */}
        <p
          className="text-[14px] leading-[20px] font-normal tracking-[0.2px] text-[#737373]"
        >
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  </div>
</div>


      {/* short about us */}
       {/* Stats Section */}
       <div className="relative flex flex-col items-center bg-white py-10 lg:py-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1050px]">
          {/* Metric 1 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Happy Customers</h5>
          </div>
          {/* Metric 2 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Monthly Visitors</h5>
          </div>
          {/* Metric 3 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Countries  Worldwide</h5>
          </div>
          {/* Metric 4 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Top Partners</h5>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="relative w-full bg-white h-[764px] max-w-[1440px] mx-auto flex justify-center items-center">
  {/* Video Card */}
  <div className="relative bg-white rounded-[20px] w-[90%] max-w-[989px] h-[540px] flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 rounded-[20px] overflow-hidden">
      <Image
        src={card}
        alt="Video Background"
        layout="fill"
        objectFit="cover"
        className="rounded-[20px]"
      />
      {/* Gradient Filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-80"></div>
    </div>

    {/* Play Button */}
    <div className="relative z-10">
      <button
        className="w-[92.6px] h-[92.6px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[19px] h-[23px] text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </button>
    </div>
  </div>
</div>


        {/* Team Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user1}
                    alt="Team Member 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">Emily Rose</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Software Engineer
                  </h6>
                  {/* Social Media */}
                  
                  
                  
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user}
                    alt="Team Member 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Jane Smith
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Marketing Head
                  </h6>
                  
                  
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user1}
                    alt="Team Member 3"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    John Doe
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    UI/UX Designer
                  </h6>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>


{/* Companies Section */}
<section className="bg-gray-50 py-16 flex justify-center">
  <div className="w-full max-w-6xl flex flex-col items-center px-4">
    {/* Heading Section */}
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        Big Companies Are Here
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
    </div>

    {/* Logo Grid */}
    <div className="flex justify-center items-center gap-8 flex-wrap">
      <div className="flex justify-center">
        <Image src={ ki} alt="Hooli Logo" className="w-24 md:w-28 object-contain" />
      </div>
      <div className="flex justify-center">
        <Image src={ki} alt="Lyft Logo" className="w-24 md:w-28 object-contain" />
      </div>
      <div className="flex justify-center">
        <Image src={ki} alt="Stripe Logo" className="w-24 md:w-28 object-contain" />
      </div>
      <div className="flex justify-center">
        <Image src={ki} alt="AWS Logo" className="w-24 md:w-28 object-contain" />
      </div>
      <div className="flex justify-center">
        <Image src={ki} alt="Reddit Logo" className="w-24 md:w-28 object-contain" />
      </div>
    </div>
  </div>
</section>










{/* groW */}
<section className="relative w-full h-auto flex flex-col lg:flex-row bg-[#2A7CC7] justify-center items-center lg:mt-[-30px]">
  {/* Right Side Blue Section */}
  <div className="w-full lg:w-1/2 h-full bg-[#2A7CC7] px-6 md:px-12 lg:px-24 py-8 lg:py-16 flex flex-col justify-center">
    <div className="max-w-lg flex flex-col gap-6 text-center lg:text-left">
      <h5 className="text-white text-sm md:text-base font-bold leading-6 tracking-wide">
        WORK WITH US
      </h5>
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
        Now Let’s grow Yours
      </h2>
      <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed tracking-wide">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
      </p>
      <button className="w-full lg:w-auto h-12 border border-white rounded-md flex items-center justify-center py-2 px-8 gap-2 mt-4">
        <span className="text-white text-sm font-bold">Button</span>
      </button>
    </div>
  </div>

  {/* Left Side Image */}
  <div className="w-full lg:w-1/2 h-full relative flex justify-center lg:justify-end items-center">
    <Image
      src={blue}
      alt="Testimonial Background"
      className="w-[300px] md:w-[450px] lg:w-[570px] h-auto object-cover"
    />
  </div>
</section>

        
        
    
      </div> 
      <Footer/>
    </div>
  );
}