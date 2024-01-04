import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
     return (
          <div className="flex flex-col justify-between py-12 text-center">
               <Navbar />
               <main className="m-auto text-center py-4 px-3 border-y-2 border-gray-700 max-w-[640px] w-full">
                    <h1 className="text-3xl font-extrabond">Contact Me</h1>
                    <form
                         className="max-w-[400px] w-full m-auto py-4"
                         action=""
                    >
                         <div>
                              <label
                                   className="block text-left text-xl mb-2"
                                   htmlFor="name"
                              >
                                   Name
                              </label>
                              <input
                                   className="border border-gray-600 focus:outline-blue-300 w-full p-1 rounded"
                                   type="text"
                                   name=""
                                   id=""
                              />
                         </div>
                         <div>
                              <label
                                   className="block text-left text-xl mb-2"
                                   htmlFor="email"
                              >
                                   Email
                              </label>
                              <input
                                   className="border border-gray-600 focus:outline-blue-300 w-full p-1 rounded"
                                   type="text"
                                   name=""
                                   id=""
                              />
                         </div>
                         <div>
                              <label
                                   className="block text-left text-xl mb-2"
                                   htmlFor="email"
                              >
                                   Message
                              </label>
                              <textarea
                                   className="resize-none border border-gray-600 focus:outline-blue-300 w-full p-1 rounded"
                                   name=""
                                   id=""
                                   cols={30}
                                   rows={5}
                              ></textarea>
                         </div>
                         <button
                              className="inline-block w-full border border-gray-500 p-2 active:scale-[0.98] rounded bg-gray-800 text-white uppercase tracking-tight"
                              type="submit"
                         >
                              submit
                         </button>
                    </form>
               </main>
               <Footer />
          </div>
     );
};

export default Contact;
