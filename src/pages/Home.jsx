import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-screen w-screen bg-[#1b1b1b]">
        <Header />
        
        {/*container for whole page*/}
        <div className="md:flex w-screen">
          <div className=" md:w-3/5 content-center">
          <div className=" mx-14 mt-32 md:mt-24 md:ml-20 md:pl-10 md:pb-4"><h2 className=" text-4xl md:text-6xl font-medium text-[#fffff0]">Hello, I&apos;m <br />a Full Stack Developer,</h2>
          <h3 className="font-medium pt-4 text-zinc-400" >a passionate Full Stack Developer dedicated to creating 
            efficient, scalable, and user-friendly web and mobile applications. With a keen eye for detail and a drive 
            for excellence, I turn complex problems into elegant solutions.
            </h3>
            <Link to="/contact"><button className="px-5 py-2 bg-[#0a5c36] font-medium mt-4 w-32 mb-2 shadow-xl shadow-[#000000] hover:border hover:bg-transparent hover:text-[#0a5c36] hover:font-medium hover:border-[#0a5c36]">Reach Out</button></Link>
          </div>
            
            
          </div>

        </div>
        
    </div>
  );
};

export default Home;
