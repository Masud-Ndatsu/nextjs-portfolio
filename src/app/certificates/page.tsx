import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Certificates = () => {
     return (
          <div className="flex flex-col justify-between py-12 text-center">
               <Navbar />
               <main className="m-auto text-center py-4 px-2 border-y-2 border-gray-700 max-w-[640px] w-full">
                    <div className="w-full border-2 border-gray-500 rounded">
                         <h1 className="border-b border-gray-600 py-2 font-bold text-xl">
                              The Complete Nodejs Developer Course
                         </h1>
                         <div className="sm:flex gap-2 p-2">
                              <div className="content h-48 flex-1">
                                   <Image
                                        src="/udemy.webp"
                                        className="w-full h-full"
                                        alt=""
                                   />
                              </div>
                              <div className="content h-full flex-[1.5] text-left text-lg">
                                   <h3 className="">Udemy</h3>
                                   <p className="">
                                        Issued on May 2022 - No Expiration Date
                                   </p>
                                   <p className="text-gray-500">
                                        Credential id:
                                        UC-07174eb3-5bce-4bdb-b420-a6356fd74819
                                   </p>

                                   <a
                                        href="https://www.udemy.com/certificate/UC-07174eb3-5bce-4bdb-b420-a6356fd74819/"
                                        className="underline text-gray-500"
                                        target="_blank"
                                        rel="noreferrer"
                                   >
                                        View Certificate
                                   </a>
                              </div>
                         </div>
                    </div>{" "}
               </main>
               <Footer />
          </div>
     );
};

export default Certificates;
