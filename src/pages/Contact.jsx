import { Twitter } from "lucide-react";
import Header from "../components/Header";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="h-screen bg-[#121212]">
      <Header />
      {/* <h1 className="text-4xl font-bold text-white pl-20">Contact</h1> */}
      <div className="flex space-x-1 justify-center">
        <div className="justify-center mt-14 space-y-5 px-10 ">
          <h2 className="text-4xl font-medium pt-20 text-[#0a5c36]">
            Let&apos;s chat.
            <br />
            Tell me about your project.
          </h2>
          <h3 className="text-white">
            Let&apos;s create something together&#129311;
          </h3>
          <div className="flex space-x-5">
            <a
              href="https://x.com/_r4ph4ell"
              target="_blank"
              className="text-[#0a5c36]"
            >
              <Twitter size={24} stroke-width={1.5} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/raphael-wright-8278b022a/"
              target="_blank"
              className="text-[#0a5c36]"
            >
              <Linkedin size={24} stroke-width={1.5} color="white" />
            </a>
            <a
              href="https://github.com/RaphaelWright"
              target="_blank"
              className="text-[#0a5c36]"
            >
              <Github size={24} stroke-width={1.5} color="white" />
            </a>

            <a
              href="https://www.instagram.com/w.ralphh/"
              target="_blank"
              className="text-[#0a5c36]"
            >
              <Instagram size={24} stroke-width={1.5} color="white" />
            </a>
          </div>
        </div>

        <div className="shadow-lg shadow-[#000000] w-2/6 h-auto mt-14">
          <p className="text-center text-[#0a5c36] font-medium text-2xl pt-5">
            Hit me Up!
          </p>
          <form className="flex flex-col w-full mt-5">
            <input
              type="text"
              placeholder="Name"
              className="border-0 bg-[#121212] outline-none border-[#0a5c36] border-b text-[#fffff0] mb-4 px-2 py-2 mx-10"
            />
            <input
              type="telephone"
              placeholder="Number"
              className="border-0 mb-4 bg-[#121212] outline-none border-b border-[#0a5c36] text-[#fffff0] px-2 py-2 mx-10"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-0 mb-4 bg-[#121212] outline-none border-b border-[#0a5c36] text-[#fffff0] px-2 py-2 mx-10"
            />
            <input
              type="text"
              placeholder="Type your message"
              className="border-0 mb-4 bg-[#121212] outline-none border-b border-[#0a5c36] text-[#fffff0] px-2 py-2 mx-10"
            />
            <button className="mx-auto bg-[#0a5c36] mt-5 mb-10 py-2 font-medium w-32 border-[#0a5c36] text-lg shadow-xl shadow-[#000000]">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
