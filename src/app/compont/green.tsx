



"use client"; 
import Link from "next/link";
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
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#23866D] px-4 py-2 text-sm">
        {/* Phone */}
        <div className="flex items-center space-x-2 text-white font-bold">
          <Phone className="text-lg" />
          <Link href="#" className="hover:text-cyan-400">
          (225) 555-0118
          </Link>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2 text-white font-bold">
          < Mail className="text-lg" />
          <Link href="#" className="hover:text-cyan-400">
          michelle.rivera@example.com
          </Link>
        </div>

        {/* Social MediaIcons */}
        <div className="flex items-center space-x-3 text-white">
          <span className="hover:text-cyan-400">Follow Us:</span>
          <Link href="#"><Facebook className="text-lg hover:text-cyan-400" /></Link>
          <Link href="#"><Instagram className="text-lg hover:text-cyan-400" /></Link>
          <Link href="#">< Youtube className="text-lg hover:text-cyan-400" /></Link>
          <Link href="#"><Twitter className="text-lg hover:text-cyan-400" /></Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-black hover:text-cyan-400">
          Bandage
        </h1>

        
         {/* Navigation as */}
         <nav className="hidden md:flex space-x-6 items-center">
       <Link href="/"        className="text-slate-600 hover:text-cyan-400">Home</Link>
          <div className="flex items-center space-x-1">
            <Link   href="/shop"  className="text-slate-600 hover:text-cyan-400">
              Shop
            </Link>
            <ChevronDown className="text-black hover:text-cyan-400" />
          </div>
           <Link    href="/about" className="text-slate-600 hover:text-cyan-400">about </Link>
          <Link href='/blog'className="text-slate-600 hover:text-cyan-400">Blog</Link>
          <Link href="/contact" className="text-slate-600 hover:text-cyan-400">Contact</Link>
          <Link href="/page" className="text-slate-600 hover:text-cyan-400">Pages</Link>
        </nav>

        {/* Login / Register */}
        <div className="hidden md:flex items-center space-x-2 text-sky-400 font-bold">
          <Link href="#" className="hover:underline hover:text-cyan-400">
            Login
          </Link>
          <span>/</span>
          <Link href="#" className="hover:underline hover:text-cyan-400">
            Register
          </Link>
        </div>
        

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl text-sky-400">
          <Link href="#" className="hover:text-cyan-400">
            <Search />
          </Link>
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
          <Link href="#" className="hover:underline hover:text-cyan-400 px-1 ">
            Login
          </Link>
          <span >/</span>
          <Link href="#" className="hover:underline hover:text-cyan-400 px-1" >
            Register
          </Link>
        </div>
  
    
 {/* Navigation as */}
 <nav className="py-2 ">
          <Link href="/" className="text-black hover:text-cyan-400 ">Home</Link> <hr></hr> 
          <div className="flex items-center space-x-1 py-3"> 
            <Link href="/shop" className="text-slate-600 hover:text-cyan-400  "> 
              Shop
            </Link> 
            <ChevronDown className="text-black hover:text-cyan-400 " />
          </div>  <hr></hr>
          <div className="py-4">
          <Link href="/about" className="text-slate-600 hover:text-cyan-400 items-center space-x-1 py-4">about</Link> <hr></hr>
          </div>
          <div className="py-4">
          <Link href="/blog" className="text-slate-600 hover:text-cyan-400 py-3">Blog</Link> <hr></hr>
         </div > 
         <div className="py-4">
          <Link href="/contact" className="text-slate-600 hover:text-cyan-400 py-3">Contact</Link> <hr></hr>
          </div> 
          <div className="py-4">
          <Link href="/page" className="text-slate-600 hover:text-cyan-400 ">Pages</Link> <hr></hr>
          </div>
        </nav>
      
  </SheetContent>
</Sheet>
           

        </div> 
        
          

      </div> 
      
        

    </header>
  );
}
