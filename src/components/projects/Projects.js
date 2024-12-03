import React from "react";
import Title from "../layouts/Title";
//import { projectOne, projectTwo, projectThree } from "../../assets/index";
import { FaBuilding, FaCogs, FaTasks } from "react-icons/fa";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 ">
        <ProjectsCard
          title="ENGINEERING DOCS PROCESSING"
          des="Currently, I'm working on an engineering project for a US client. The project involves ASP.NET Core, React, Azure Cosmos DB, Azure Functions, and Azure Boards, delivering a scalable solution with cloud integration."
          //src={engineeringProject} // Replace 'engineeringProject' with the actual reference to the image or project file
        />
        <ProjectsCard
          title="CRM SYSTEM"
          des="While at Infosys, I worked on developing a CRM for a US client. I used ASP.NET Core 6 and SSMS for the backend, and .NET MAUI and Blazor for the frontend to create a seamless user experience."
          //src={crmProject} // Replace 'crmProject' with the actual reference to the image or project file
        />
        <ProjectsCard
          title="BANKING SYSTEM"
          des="During my internship at Samvit Infotech, I worked on a banking project, focusing on building key features using HTML, CSS, JS, and managing backend processes with SSMS."
          //src={bankingProject} // Replace 'bankingProject' with the actual reference to the image or project file
          icon={<FaBuilding />}
        />
      </div>
    </section>
  );
};

export default Projects;
