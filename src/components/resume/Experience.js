import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-[50%] flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer (.NET)"
            subTitle="Synoptek India Pvt. Ltd., Pune - (Jun 2025 - Present)"
            result="Pune"
            des="I work on a US-based healthcare digital platform using .NET 6, C#, ASP.NET Core, SQL Server and Azure. I build and enhance features and Web APIs, resolve production issues through root-cause analysis, maintain background schedulers for data processing, and ship releases through Azure DevOps CI/CD pipelines to Azure App Services."
          />
          <ResumeCard
            title="Senior Software Engineer"
            subTitle="Aress Software, Nashik - (Jul 2024 - Jun 2025)"
            result="Nashik"
            des="At Aress Software, I worked on KinsmenAI, a UK-based SaaS product, building backend APIs and React frontend features with .NET 8, CQRS and the Repository Pattern. I integrated external AI APIs to extract data from engineering documents and designed serverless workflows with Azure Functions, Service Bus, Cosmos DB and Blob Storage."
          />
          <ResumeCard
            title="Senior Systems Engineer"
            subTitle="Infosys Limited, Pune - (Dec 2021 - Jul 2024)"
            result="Pune"
            des="At Infosys, I worked on a US telecom client's CRM (Charter Communications). I migrated a legacy application from .NET Framework 4.8 to .NET 6, refactored the backend with the Repository Pattern, built Angular 14 single-page interfaces, optimized C# and SQL Server queries, and contributed to a .NET MAUI and Blazor mobile web application."
          />
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Samvit Infotech, Nashik - (Jul 2021 - Dec 2021)"
            result="Nashik"
            des="At Samvit Infotech, I built modular, responsive UI components and client-side logic in JavaScript for a banking web application (Arthdisha), and supported the team with SQL data requirements and application pages."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
