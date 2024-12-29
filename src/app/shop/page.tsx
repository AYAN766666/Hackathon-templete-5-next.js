"use client";
import React from "react"; 
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
 import Navbar from "../compont/green";
 
import Image from "next/image";

   import cat1 from '../../../public/col.jpg' 
   import cat2 from '../../../public/col1.jpg' 
   import cat3 from '../../../public/col2.jpg' 
   import cat4 from '../../../public/col3.jpg' 
   import cat5 from '../../../public/col4.jpg'  
   import clients from '../../../public/client.jpg'
    import pic9 from '../../../public/arman.png' 
    import pic10 from '../../../public/ayan.png'
   
    import pic11 from '../../../public/pic.jpg' 
    import pic12 from '../../../public/last.jpg.png'
   import pic21 from '../../../public/last3.jpg'
    import pic13 from '../../../public/last2.jpg' 
    import pic14 from '../../../public/new.jpg'
    import pic15 from '../../../public/new1.jpg' 
    import pic16 from '../../../public/new2.jpg'

    
    
    import pic19 from '../../../public/pic3.jpg' 
    import pic20 from '../../../public/new3.jpg'
    import pic22 from '../../../public/pic7.jpg'

import Footer from "../compont/footer";


import {  ArrowBigDown, ChevronDown,  FacebookIcon,  InstagramIcon, LayoutGridIcon, ListChecksIcon,  TwitterIcon,  } from "lucide-react";

export default function Shop () { 
   const notify = () => toast(" Item added to cart! ✅");
  return ( 
    
    <div   id="shop"   >  

      <Navbar/>
    
      {/* Shop Section */}
      <div className="w-full h-[92px]  flex flex-col items-center mt-[10px]"           >
        <div className="w-full max-w-screen-xl flex gap-4 items-center py-[40px]">
          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              
              <ArrowBigDown/>
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Category Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-[90px] lg:ml-[70px]">
          <Image
            src={cat1}
            alt="1"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat2}
            alt="2"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat3}
            alt="3"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat4}
            alt="4"
            className="w-[60%] md:w-full lg:w-full"
          />
          <Image
            src={cat5}
            alt="5"
            className="w-[60%] md:w-full lg:w-full"
          />
        </div>
      </div>

      {/* Popularity Section */}
     
      <div className="w-full flex justify-center items-center mt-12 bg-white">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center py-6 px-4 gap-6">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 ">
          <p className="font-montserrat font-bold text-sm md:text-base text-[#737373]">
            Showing all 12 results
          </p>
          <div className="flex items-center gap-4   px-[300]      ">
            <p className="flex items-center gap-2 text-sm md:text-base font-medium">
              Views:
              <LayoutGridIcon className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-700 cursor-pointer" />
              <ListChecksIcon className="w-5 h-5 md:w-6 md:h-6 hover:text-gray-700 cursor-pointer" />
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center">
          {/* Popularity Button */}
          <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center relative hover:bg-gray-100">
            <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
              Popularity
            </p>
            <ChevronDown  className="absolute top-1/2    right-3 transform -translate-y-1/2" />
          </button>

          {/* Filter Button */}
          <button className="w-[94px] h-[50px] flex justify-center items-center bg-[#23A6F0] hover:bg-[#1A8AD8] transition-all">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
              Filter
            </h6>
          </button>
        </div>
      </div>
    </div>

      {/* Clients Section */}
      <div className="relative mt-12         ">
        <Image src={clients} alt="clients" className="w-full" /> 
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-12 py-4 bg-white">
      {/* Main Text */}
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
        Bandage
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-2 sm:mt-0 text-sky-500">
        <FacebookIcon className="w-6 h-6 hover:text-sky-700 cursor-pointer" />
        <InstagramIcon className="w-6 h-6 hover:text-sky-700 cursor-pointer" />
        <TwitterIcon className="w-6 h-6 hover:text-sky-700 cursor-pointer" />
      </div>
        </div>
      </div>
      {/* Product Cards */}
      
         
         
  


      
      
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12">
    {/* Product 1 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic9}
        alt="Product 1"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div>
      </div>
    </div>
    {/* Product 2 */}
    <div className="border rounded-lg  shadow-sm hover:shadow-lg transition">
      <Image
        src={pic10}
        alt="Product 2"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div>
      </div>
    </div>
    {/* Product 3 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic19}
        alt="Product 3"
        className="w-full h-55 object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div>
      </div>
    </div>
    {/* Product 4 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic12}
        alt="Product 4"
        className="w-full h-[700] object-cover"
      />  

<button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart 
        </button>
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div>
      </div>
    </div>
    {/* Product 5 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic13}
        alt="Product 5"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart 
        </button>
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div>
      </div>
    </div>
    {/* Product 6 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic14}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div> 

{/* Product 7 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic21}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div> 
  
      

{/* Product 8 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic22}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div>  

{/* Product 8 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic15}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div> 
  
{/* Product 10 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic16}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div> 
  
{/* Product 11 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic20}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div> 
  
{/* Product 12 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic11}
        
        alt="Product 6"
        className="w-full h-[700] object-cover"
      /> 
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
      <div className="p-4">
        <h3 className="font-bold text-lg">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-500 line-through mr-2">$16.48</span>
          <span className="text-green-500 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-1 mt-3">
          <span className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="w-4 h-4 bg-yellow-500 rounded-full" />
        </div> 
      </div> 
    </div> 
  

  
  </div> 
      

































































































      





      
      
      {/* Footer */}
      <Footer />
            
     </div>
  );
}