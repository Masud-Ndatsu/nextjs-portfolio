import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
     return (
          <div className="min-h-screen flex flex-col justify-between py-12 text-center">
               <Navbar />
               <main className="m-auto text-center py-4 border-y-2 border-gray-700 max-w-[580px] w-full">
                    <div className="p-6 text-center">
                         I am a result-oriented and innovative software engineer
                         who is interested in developing highly-scalable and
                         performant web applications and softwares. I also enjoy
                         communicating technical concepts to non-technical
                         stakeholders. I enjoy working in a team as well as
                         being independent. I look up to each day as an
                         opportunity to learn something new and improve on it.
                    </div>
                    <a
                         href=""
                         className="p-2 bg-gray-500 text-gray-200 text-center flex items-center justify-center gap-2 rounded m-auto w-[200px]"
                         download
                    >
                         <FaFileDownload />
                         Download My CV
                    </a>
               </main>
               <Footer />
          </div>
     );
};

export default About;
