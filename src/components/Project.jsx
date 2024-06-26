const Project = (project) => {
  return (
    <div className="border border-black rounded-xl w-80 mx-5 ">
      
      <div className="w-full">
        <img className="h-48 rounded-t-xl" src={project.picid} alt="Page UI" />
      </div>
      <div className="px-5 ">
        <p className="font-bold pt-3">{project.title}</p>

        <p>{project.description}</p>

        <h6 className="font-semibold text-sm mt-2">STACK</h6>
        <p className="flex mt-2">
            
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="border border-gray-300 text-sm rounded-2xl text-center px-3 mx-1"
            >
            {tech}
            </div>
          ))}
        </p>

        <br />
        <a href={project.link}><button className="border px-10 py-2 rounded-2xl w-full border-black mb-5">
          See Project
        </button></a>
      </div>
    </div>
  );
};

export default Project;
