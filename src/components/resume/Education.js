import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering in Information Technology"
            subTitle="Savitribai Phule Pune University (2017 - 2021)"
            des="During my studies, I developed a strong foundation in software development, algorithms, and database management. My coursework covered a range of topics including software engineering, web development, data structures, and cloud computing. I also worked on academic projects that enhanced my technical and teamwork skills."
          />

          <ResumeCard
            title="Diploma in Information Technology"
            subTitle="Guru Gobind Singh Polytechnic, Nashik(2014 - 2017)"
            des="I completed my diploma in Information Technology in 2017, which provided me with a strong foundation in programming, software development, and computer networks. This education served as a crucial step toward my career in software engineering and advanced studies."
          />
        </div>
      </div>

      {/* part Two */}
      {/* <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      </div> */}
    </motion.div>
  );
};

export default Education;
