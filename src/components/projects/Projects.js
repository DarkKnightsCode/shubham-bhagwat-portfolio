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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14 ">
        <ProjectsCard
          title="HEALTHCARE DIGITAL PLATFORM"
          des="Currently at Synoptek, I'm building and enhancing features and Web APIs for a US healthcare web platform using .NET 6, C#, ASP.NET Core, SQL Server and Azure. I handle production issue resolution, background schedulers, and Azure DevOps CI/CD releases to Azure App Services."
        />
        <ProjectsCard
          title="KINSMENAI - ENGINEERING DOCS PROCESSING"
          des="At Aress Software, I worked on a UK-based SaaS product that automates work on engineering documents. I built .NET 8 backend APIs and React features, integrated external AI APIs to extract data from CAD and engineering documents, and designed serverless workflows with Azure Functions, Service Bus, Cosmos DB and Blob Storage."
        />
        <ProjectsCard
          title="TELECOM CRM MIGRATION"
          des="At Infosys, I worked on a CRM for Charter Communications (US). I migrated the legacy application from .NET Framework 4.8 to .NET 6, refactored the backend with the Repository Pattern, built Angular 14 interfaces, and contributed to a .NET MAUI and Blazor mobile web application."
        />
        <ProjectsCard
          title="BANKING SYSTEM (ARTHDISHA)"
          des="During my internship at Samvit Infotech, I built modular, responsive UI components and client-side logic for a banking web application using HTML, CSS and JavaScript, and supported SQL data requirements."
          icon={<FaBuilding />}
        />
      </div>
    </section>
  );
};

export default Projects;
