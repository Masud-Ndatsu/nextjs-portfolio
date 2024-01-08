"use client";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
     const [name, setName] = useState<string>("");
     const [email, setEmail] = useState<string>("");
     const [message, setMessage] = useState<string>("");

     const handleSubmit = async (e: any) => {
          e.preventDefault();
          try {
               const data = {
                    name,
                    email,
                    message,
               };
               setName("");
               setEmail("");
               setMessage("");

               const req = await fetch("/api/contacts", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                         "Content-Type": "application/json",
                    },
               });
          } catch (error) {
               console.log({
                    error,
               });
          }
     };

     return (
          <div className="min-h-screen flex flex-col justify-between py-12 text-center">
               <Navbar />
               <main className="m-auto text-center py-4 px-3 border-y-2 border-gray-700 max-w-[640px] w-full">
                    <h1 className="text-3xl font-extrabond">Contact Me</h1>
                    <form
                         className="max-w-[400px] w-full m-auto py-4"
                         onSubmit={handleSubmit}
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
                                   name="name"
                                   id="name"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   required
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
                                   type="email"
                                   name="email"
                                   id="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
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
                                   name="message"
                                   id="message"
                                   cols={30}
                                   rows={5}
                                   value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                                   required
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
