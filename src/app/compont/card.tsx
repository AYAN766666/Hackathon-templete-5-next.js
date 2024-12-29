"use client";
import React from "react"; 
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import pic1 from "../../../public/pic7.jpg" 
import pic2 from "../../../public/pic2.jpg" 
import pic3 from "../../../public/pic1.jpg"  
import pic4 from "../../../public/pic4.jpg"  
import pic5 from "../../../public/pic5.jpg"  
import pic6 from "../../../public/pic6.jpg"  
import pic7 from "../../../public/pic3.jpg"  
import pic8 from "../../../public/pic.jpg"  
 import Image from "next/image"; 

export default function Card(){ 
   const notify = () => toast(" Item added to cart! ✅");
    return(
        <div >
        <div className="container mx-auto  px-4    pt-[20]        ">
  <h2 className="text-3xl font-bold text-center mb-2">BESTSELLER PRODUCTS</h2>
  <p className="text-center text-gray-500 mb-8">
    Problems trying to resolve the conflict between
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
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
      





</div> 


      </div> 
      
      
    )
}