import Header from "../components/Header";
import { Download } from "lucide-react";

const myStack = ["FLASK", "JAVASCRIPT", "PHP", "REACT"];

const About = () => {
  return (
    <div className="h-screen bg-[#121212]">
      <Header />
      <h1 className="text-2xl font-bold text-white pl-20 ml-20">About Me</h1>
      <div className="flex justify-center mt-10">
        <img
          src="/images/me.jpg"
          alt="that's me!"
          className="h-96 w-96 justify-center border-l-4 border-[#0a5c36]"
        />

        <div className="shadow-xl shadow-[#000000] w-1/4 px-5 py-5">
          <h2 className="text-[#0a5c36] font-semibold text-2xl">
            Raphael Wright Agbedanu
          </h2>
          <h3 className="font-medium  text-white pt-5 mb-4">
            I&apos;m a Web Developer, UI/UX Designer, Student. I&apos;m
            interested in Crafting Beautiful and functional websites, Building
            digital experiences with code. DESIGNING WITH PASSION. Visual
            Storyteller. And a PROBLEM SOLVER!
          </h3>
          <h3 className="font-semibold text-sm text-[#0a5c36] mt-2 mb-4">
            MY STACK
          </h3>
          {myStack.map((tech, index) => (
            <span
              key={index}
              className="border border-[#0a5c36] rounded-xl text-sm text-[#fffff0] text-center mx-1 px-3 mt-4 mb-4"
            >
              {tech}
            </span>
          ))}

          <button className="px-5 py-1 bg-[#0a5c36] font-medium w-full shadow-xl mt-7 shadow-[#000000] hover:border hover:bg-transparent hover:text-[#0a5c36] hover:font-medium hover:border-[#0a5c36] flex items-center justify-center gap-2">
            <Download size={16} strokeWidth={2} />
            Résumé
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
