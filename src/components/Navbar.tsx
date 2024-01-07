"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
     const pathname = usePathname();
     useEffect(() => {}, [pathname]);
     return (
          <nav className="py-6 flex flex-wrap justify-center">
               <Link
                    className={`py-2 px-4 m-2 border-2 border-gray-700 rounded-lg ${
                         pathname === "/projects" && "bg-gray-700 text-white"
                    }`}
                    href="/projects"
               >
                    Projects
               </Link>
               <Link
                    className={`py-2 px-4 m-2 border-2 border-gray-700 rounded-lg ${
                         pathname === "/about" && "bg-gray-700 text-white"
                    }`}
                    href="/about"
               >
                    About
               </Link>
               <Link
                    className={`py-2 px-4 m-2 border-2 border-gray-700 rounded-lg ${
                         (pathname === "/home" || pathname === "/") &&
                         "bg-gray-700 text-white"
                    }`}
                    href="/home"
               >
                    Home
               </Link>
               <Link
                    className={`py-2 px-4 m-2 border-2 border-gray-700 rounded-lg ${
                         pathname === "/contact" && "bg-gray-700 text-white"
                    }`}
                    href="/contact"
               >
                    Contact
               </Link>
               <Link
                    className={`py-2 px-4 m-2 border-2 border-gray-700 rounded-lg ${
                         pathname === "/certificates" &&
                         "bg-gray-700 text-white"
                    }`}
                    href="/certificates"
               >
                    Certificates
               </Link>
          </nav>
     );
};

export default Navbar;
