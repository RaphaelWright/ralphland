import Header from "../components/Header";
import Project from "../components/Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      picid: "/images/ecowell.jpg",
      title: "EcoWell Africa",
      description: "A commercial wwebsite i made for an NGO..",
      technologies: ["HTML", "Tailwind ", "JS "],
      link: "github.com",
    },
    {
      id: 2,
      picid: "/images/xerotodo.jpg",
      title: "XeroTodo",
      description: "TodoList app developed by me to manage tasks.",
      technologies: ["React", "Tailwind", "Vite"],
      link: "github.com",
    },
    {
      id: 3,
      picid: "/images/drugs.jpg",
      title: "DrugBooking",
      description: "A drug booking app for wholesalers patronizing Kinarpharma Pharmaceuticals",
      technologies: ["PHP", "CSS", "JS", " HTML"],
      link: "github.com",
    },
  ];

  return (
    <div className="bg-[#121212] w-full h-full md:h-screen">
      <Header />
      <h1 className="text-2xl font-bold mt-5 pl-16 pr-auto text-white md:pt-5 md:pl-20 md:ml-20 justify-center">My Projects</h1>
      {/*Entire Page*/}
      <div className="space-y-10 mx-5 mt-5 md:flex md:ml-32 md:mt-10">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            picid={project.picid}

            // className="my-10"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
