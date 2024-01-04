import React from "react";
import Link from "next/link";
const Navbar = () => {
     return (
          <nav className="py-6 flex flex-wrap justify-center">
               <Link
                    className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
                    href="/projects"
               >
                    Projects
               </Link>
               <Link
                    className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
                    href="/about"
               >
                    About
               </Link>
               <Link
                    className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
                    href="/"
               >
                    Home
               </Link>
               <Link
                    className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
                    href="/contact"
               >
                    Contact
               </Link>
               <Link
                    className="py-2 px-4 m-2 border-2 border-gray-700 rounded-lg"
                    href="/certificates"
               >
                    Certificates
               </Link>
          </nav>
     );
};

export default Navbar;
