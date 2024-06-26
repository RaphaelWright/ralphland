import Header from "../components/Header";
import Project from "../components/Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      picid: "",
      title: "RTMS",
      description: "A tenant management system developed by me..",
      technologies: ["Python ", "Flask ", "CSS ", "JS "],
      link: "github.com",
    },
    {
      id: 2,
      picid: "/src/images/todo.jpg",
      title: "XeroTodo",
      description: "TodoList app developed by me",
      technologies: ["React", "Tailwind", "Vite"],
      link: "github.com",
    },
    {
      id: 3,
      picid: "/src/images/drugbooking.jpg",
      title: "DrugBooking",
      description:
        "A drug booking app for wholesalers patronizing Kinarpharma Pharmaceuticals",
      technologies: ["PHP", "CSS", "JS", " HTML"],
      link: "github.com",
    },
  ];

  return (
    <div>
      <Header />
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
