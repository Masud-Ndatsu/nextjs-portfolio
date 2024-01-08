import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
const Footer = () => {
     return (
          <div className="m-auto flex gap-2">
               <a
                    href="https://github.com/Masud-Ndatsu"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-3 text-3xl"
               >
                    <AiFillGithub />
               </a>
               <a
                    href="https://twitter.com/MasudNdatsu"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-3 text-3xl"
               >
                    <AiOutlineTwitter />
               </a>
               <a
                    href="https://github.com/Masud-Ndatsu/nextjs-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-3 text-3xl"
               >
                    <FaCode />
               </a>
               <a
                    href="https://www.linkedin.com/in/mas-ud-ndatsu-2b29831aa/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-3 text-3xl"
               >
                    <AiFillLinkedin />
               </a>
          </div>
     );
};

export default Footer;
