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
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior .NET Developer"
            subTitle="Aress Software - (Jul 2024 - Present)"
            result="India"
            des="I currently work as a Senior .NET Developer at Aress Software, where I specialize in backend development using C# and .NET. My work involves developing responsive web applications with ReactJS and AngularJS, managing databases with SQL and Cosmos DB, and implementing serverless solutions with Azure Functions."
          />
          <ResumeCard
            title="Senior Systems Engineer"
            subTitle="Infosys Limited - (Dec 2021 - Jul 2024)"
            result="India"
            des="At Infosys Limited, I worked as a Senior Systems Engineer, focusing on backend development with ASP.NET Core 6 and .NET MAUI. I contributed to unit testing with xUnit, followed Agile methodologies, and developed modern web applications using Blazor. I also worked on IIS server configurations and database management with SQL."
          />
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Samvit Infotech, Nashik - (Jul 2021 - Dec 2021)"
            result="Nashik"
            des="I worked as a Frontend Developer Intern at Samvit Infotech, where I gained hands-on experience with HTML, CSS, and JavaScript for building web pages. Additionally, I worked with SQL Server Management Studio (SSMS) for basic database management tasks and web application development."
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
