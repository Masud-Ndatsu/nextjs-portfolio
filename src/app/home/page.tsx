"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Typewriter from "typewriter-effect";
import profile from "../../assets/biggysmall.jpg";
import Image from "next/image";

const TypewriterComponent: React.FC = () => {
     const [text, setText] = useState<string>("");

     useEffect(() => {
          const words: string[] = ["Fullstack", "Developer"];
          let index: number = 0;

          const interval = setInterval(() => {
               setText(words[index]);
               index = (index + 1) % words.length;
          }, 2000);

          return () => clearInterval(interval);
     }, []);

     return (
          <div>
               <Typewriter
                    options={{
                         delay: 100,
                         strings: text,
                         autoStart: true,
                    }}
               />
          </div>
     );
};

const Home = () => {
     return (
          <div className="min-h-screen flex flex-col justify-between py-12 text-center">
               <Navbar />
               <main className="m-auto text-center py-4 border-y-2 border-gray-700 max-w-[640px] w-full">
                    <h1 className="h-32 w-32 rounded-[50%] my-4 mx-auto">
                         <Image
                              className="block w-full h-full rounded-[50%] object-cover"
                              src={profile}
                              loading="lazy"
                              alt="Mas'ud Image"
                         />
                    </h1>
                    <h2 className="font-bold text-3xl">Ndatsu Masud</h2>
                    <h1 className="font-bold text-4xl text-gray-600 py-1">
                         <TypewriterComponent />
                    </h1>
                    <h1 className="font-bold text-2xl mt-6">SKILLS</h1>
                    <div className="justify-center flex-wrap flex gap-2 mt-3 p-3">
                         <p className="py-2 px-3 border">Reactjs</p>
                         <p className="py-2 px-3 border">Expressjs</p>
                         <p className="py-2 px-3 border">Node.js</p>
                         <p className="py-2 px-3 border">MongoDB</p>
                         <p className="py-2 px-3 border">MySQL</p>
                    </div>
               </main>
               <Footer />
          </div>
     );
};

export default Home;
