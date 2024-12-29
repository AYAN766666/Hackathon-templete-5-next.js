'use client'
import Image from "next/image";

import {  ChevronRight, Eye, Heart, ShoppingCart } from "lucide-react";


import Navbar from "../compont/green";
import mainImage from "../../../public/carousel-inner (1).png";
import image1 from "../../../public/laptop3.jpg"; 
import image2 from "../../../public/laptop4.png";
import p1 from "../../../public/laptop2.png";
import p2 from "../../../public/fa-brands-2.png";
import p3 from "../../../public/fa-brands-3.png";
import p4 from "../../../public/fa-brands-4.png";
import p5 from "../../../public/fa-brands-5.png";
import p6 from "../../../public/fa-brands-6.png"; 
import pic1 from "../../../public/product-cover-5 (10).png";
import pic2 from "../../../public/product-cover-5 (11).png";
import pic3 from "../../../public/product-cover-5 (12).png";
import pic4 from "../../../public/product-cover-5 (13).png";
import pic5 from "../../../public/product-cover-5 (14).png";
import pic6 from "../../../public/product-cover-5 (15).png"; 
import pic7 from "../../../public/product-cover-5 (16).png";
import pic8 from "../../../public/product-cover-5 (17).png";

import React from "react";
import { toast, ToastContainer } from "react-toastify";
//import Bestseller from "../components/bestseller"; 


import Footer from "../compont/footer";


export default function Pages() { 
   const notify = () => toast(" Item added to cart! ✅");
  return (
     
    <div         id="page"     > 
      <Navbar/>
    <div className="relative          "> 
    
      <div className="w-full h-auto py-[24px] bg-[#FAFAFA] relative    ">
        <div className="container mx-auto px-10 flex flex-col sm:flex-row items-center sm:justify-start gap-[15px]">
          <div className="flex items-center gap-[15px]">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
          
          
            <ChevronRight />
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container relative mx-auto py-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat bg-gray-100      ">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative">
           <Image
              src={mainImage}
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            /> 
            {/* Arrows */} 
            
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700" 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7" 

                />
              </svg>
            </button>
          </div> 
          
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4">
            <Image
              src={image1}
              alt="Thumbnail 1"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            /> 
            <Image
              src={image2}
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            /> 
          </div>
        </div>
           
        {/* Right Section - Product Details */}
        <div className="flex-1 pt-7  "           >
          {/* Product Title and Rating */}
          <h1 className="text-2xl font-semibold text-gray-800">
            Floating Phone
          </h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              ))} 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            </span>
            <p className="ml-2 text-sm text-gray-500 font-semibold text-black mt-4   ">(10 Reviews)</p>
          </div>

          {/* Price and Availability */}
          <p className="text-xl font-Montserrat font-semibold text-black mt-4">
            $1,139.33
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Availability:{" "}
            <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
              Select Options
            </button>
            <div className="flex items-center gap-4">
              <Heart 
               
               
                className="w-6 h-6 cursor-pointer"
              />
              
               < ShoppingCart  className="w-6 h-6 cursor-pointer" />
           
             <  Eye  className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div> 
    

      {/* ProductsCrads */} 
      
     <div className="w-[1051px] h-[72px] flex absolute justify-around top-[900px] left-[193px] bottom-[70px] pb-14    ">
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373] pb-9  ">  
          Description
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Additional Information
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Reviews
          <h1 className="text-sm leading-[24px] text-[#23856D]">(0)</h1>
        </span>
        <span className="w-[1049px] absolute top-[980px] border border-[#ECECEC]"></span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-8 md:py-12 items-center justify-center"> 
        {/*Image Section */ }
        <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={p1}
            alt="Interior Design"
            width={323}
            height={400}
            className="object-cover"
          /> 
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[65%] space-y-8 lg:space-y-0 gap-8  pt-[180] py-32 pb-32 ">
          {/* Text Block */}
          <div className="w-full md:w-[332px] space-y-4 flex flex-col">
            <h2 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          {/* List Section */}
          <div className="space-y-6 flex flex-col gap-6">
            {/* First List */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold font-Montserrat text-gray-800 mb-[10px] md:mb-[20px]">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
            
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                 
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
      
            {/* Second List */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-800">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
            
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
            
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
              
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
          </div> 
        
       </div> 
       </div>
    
       
    
    
      
      

    
      {/* */}
  
    
       <div  className="font-semibold text-4xl  px-20     bg-gray-100 pt-11   ">
       BESTSELLER PRODUCTS
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-9">
    {/* Product 1 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic6}
        alt="Product 1"
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
    {/* Product 2 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic4}
        alt="Product 2"
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
    {/* Product 3 */}
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={pic1}
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
        src={pic8}
        alt="Product 4"
        className="w-full h-55 object-cover"
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
        src={pic5}
        alt="Product 5"
        className="w-full h-55 object-cover"
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
      <Image src={pic7}
        
        alt="Product 6"
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

{/* Product 7 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic2}
        
        alt="Product 6"
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
  
      

{/* Product 8 */}
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image src={pic3}
        
        alt="Product 6"
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
    
    
  </div>   
  
  <div className="flex flex-wrap justify-center gap-5 md:gap-16 lg:gap-36 py-32 bg-gray-100">
  <Image src={p2} alt="No" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
  <Image src={p3} alt="No" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
  <Image src={p4} alt="No" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
  <Image src={p5} alt="No" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
  <Image src={p6} alt="No" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
  <Image src={p4} alt="No" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
</div>

    </div>
    

 
 
















     {/* <Bestseller /> */} 
     
     














    



      {/* footer */} 
     <Footer/>
    </div> 
    </div>
  );
}
