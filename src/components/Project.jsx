const Project = (project) => {
  return (
    <div className="shadow-md w-auto  md:w-80 md:mx-5 shadow-[#000000] transition-transform duration-500 hover:scale-110">
      <div className="w-full">
        <img className="h-48 w-full " src={project.picid} alt="Page UI" />
      </div>
      <div className="md:px-5 ">
        <p className="font-bold md:pt-3 text-[#0a5c36]">{project.title}</p>

        <p className="text-[#fffff0]">{project.description}</p>

        <h6 className="font-semibold text-sm text-[#0a5c36] md:mt-2">STACK</h6>
        <p className="flex md:mt-2">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="border border-[#0a5c36] text-sm rounded-xl text-[#fffff0] text-center md:px-3 md:mx-1 "
            >
              {tech}
            </div>
          ))}
        </p>

        <br />
        <a href={project.link}>
          <button className=" mx-5 md:px-10 md:py-2 bg-[#0a5c36] font-medium md:w-full md:mb-5 hover:border hover:bg-transparent hover:text-[#0a5c36] hover:font-medium hover:border-[#0a5c36]">
            See Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
