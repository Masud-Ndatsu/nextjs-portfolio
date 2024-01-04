import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { data } from "../../data";
import Image from "next/image";

const Projects = () => {
     return (
          <div className="flex flex-col justify-between py-12 text-center">
               <Navbar />
               <main className="m-auto text-center py-4 border-y-2 border-gray-700 max-w-[750px] w-full">
                    <div className="container py-6 px-2 flex flex-col gap-4">
                         {data.map((project) => (
                              <div className="w-full border-2 border-gray-500 rounded">
                                   <h1 className="border-b border-gray-600 py-2 text-xl font-bold">
                                        {project.title}
                                   </h1>
                                   <div className="sm:flex gap-2 p-2">
                                        <div className="content h-48 flex-[1.4]">
                                             <Image
                                                  src={project.image}
                                                  className="w-full h-full"
                                                  alt=""
                                             />
                                        </div>
                                        <div className="content h-full flex-[2]">
                                             <h4 className="sm:text-left text-lg">
                                                  {project.description}
                                             </h4>
                                        </div>
                                   </div>
                                   <div className="border-t border-gray-600 px-4 py-2 flex items-center justify-between">
                                        <a
                                             href="https://github.com/workshopapps/devopsnotepad.desktop"
                                             className="p-2 bg-gray-700 text-white text-2xl rounded"
                                        >
                                             <FaLaptopCode />
                                        </a>
                                        <div>
                                             <p>{project.tools}</p>
                                        </div>
                                        <a
                                             href={project.link}
                                             className="p-2 bg-gray-700 text-white text-2xl rounded"
                                        >
                                             <FiExternalLink />
                                        </a>
                                   </div>
                              </div>
                         ))}
                    </div>
               </main>
               <Footer />
          </div>
     );
};

export default Projects;
