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
    <div className="bg-[#121212] h-screen">
      <Header />
      <h1 className="text-3xl font-bold text-white pl-20 ml-20">My Projects</h1>
      {/*Entire Page*/}
      <div className="flex ml-32 mt-10">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            picid={project.picid}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
