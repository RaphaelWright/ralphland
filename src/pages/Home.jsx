import Header from "../components/Header";

const Home = () => {
  return (
    <div className="h-screen">
        <Header />
        
        {/*container for whole page*/}
        <div className="flex w-screen h-auto">
          <div className=" w-2/4 content-center">
            <h2 className="text-8xl font-bold pt-24 pl-20">RAPHAEL WRIGHT AGBEDANU</h2>
            {/* <h3 className="font-medium pt-5 pl-20" >I&apos;m a Software Developer, Graphic Designer, Web Developer, UI/UX Designer, Student. 
              Crafting Beautiful and functional websites. Building digital experiences with code. Designing with passion.
              Visual Storyteller. And a PROBLEM SOLVER!
            </h3> */}
          </div>

          <div>
          </div>

        </div>
        
    </div>
  );
};

export default Home;
