"use client";
import { CarTaxiFront, ChevronDown,  Facebook, Heart, Instagram, Mail, Menu, Phone, Search,  Twitter, Youtube } from "lucide-react";
import React from "react";


import {
  Sheet,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"

  


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-black px-4 py-2 text-sm">
        {/* Phone */}
        <div className="flex items-center space-x-2 text-white font-bold">
          <Phone className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
          (225) 555-0118
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 text-white font-bold">
          < Mail className="text-lg" />
          <a href="#" className="hover:text-cyan-400">
          michelle.rivera@example.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 text-white">
          <span className="hover:text-cyan-400">Follow Us:</span>
          <a href="#"><Facebook className="text-lg hover:text-cyan-400" /></a>
          <a href="#"><Instagram className="text-lg hover:text-cyan-400" /></a>
          <a href="#">< Youtube className="text-lg hover:text-cyan-400" /></a>
          <a href="#"><Twitter className="text-lg hover:text-cyan-400" /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-black hover:text-cyan-400">
          Bandage
        </h1>

        
         {/* Navigation Links */}
         <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-slate-600 hover:text-cyan-400">Home</a>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-slate-600 hover:text-cyan-400">
              Shop
            </a>
            <ChevronDown className="text-black hover:text-cyan-400" />
          </div>
          <a href="#" className="text-slate-600 hover:text-cyan-400">About</a>
          <a href="#" className="text-slate-600 hover:text-cyan-400">Blog</a>
          <a href="#" className="text-slate-600 hover:text-cyan-400">Contact</a>
          <a href="#" className="text-slate-600 hover:text-cyan-400">Pages</a>
        </nav>

        {/* Login / Register */}
        <div className="hidden md:flex items-center space-x-2 text-sky-400 font-bold">
          <a href="#" className="hover:underline hover:text-cyan-400">
            Login
          </a>
          <span>/</span>
          <a href="#" className="hover:underline hover:text-cyan-400">
            Register
          </a>
        </div>
        

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl text-sky-400">
          <a href="#" className="hover:text-cyan-400">
            <Search />
          </a>
          <div className="relative hover:text-cyan-400">
            <Heart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative hover:text-cyan-400">
            <CarTaxiFront />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div> 
          
          <Sheet>
  <SheetTrigger>
  <Menu className="md:hidden " />  
  </SheetTrigger>
  <SheetContent className="">
   {/* Login / Register */}
   <div className="px-20 gap-1   text-sky-400 font-bold ">
          <a href="#" className="hover:underline hover:text-cyan-400 px-1 ">
            Login
          </a>
          <span >/</span>
          <a href="#" className="hover:underline hover:text-cyan-400 px-1" >
            Register
          </a>
        </div>
  
    
 {/* Navigation Links */}
 <nav className="py-2 ">
          <a href="#" className="text-black hover:text-cyan-400 ">Home</a> <hr></hr> 
          <div className="flex items-center space-x-1 py-3"> 
            <a href="#" className="text-slate-600 hover:text-cyan-400  "> 
              Shop
            </a> 
            <ChevronDown className="text-black hover:text-cyan-400 " />
          </div>  <hr></hr>
          <div className="py-4">
          <a href="#" className="text-slate-600 hover:text-cyan-400 items-center space-x-1 py-4">About</a> <hr></hr>
          </div> 
          <div className="py-4">
          <a href="#" className="text-slate-600 hover:text-cyan-400 py-3">Blog</a> <hr></hr>
         </div > 
         <div className="py-4">
          <a href="#" className="text-slate-600 hover:text-cyan-400 py-3">Contact</a> <hr></hr>
          </div> 
          <div className="py-4">
          <a href="#" className="text-slate-600 hover:text-cyan-400 ">Pages</a> <hr></hr>
          </div>
        </nav>
      
  </SheetContent>
</Sheet>
           

        </div> 
        
          

      </div> 
      
        

    </header>
  );
}

  