import React from "react";
import { AiFillAppstore, AiOutlineGlobal } from "react-icons/ai"; // Keep only relevant icons
import { FaDatabase, FaCloud, FaProjectDiagram } from "react-icons/fa"; // Remove unused icons
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <Card
          title="Backend Development"
          des="With over three years of experience, I specialize in backend development using technologies like C#, ASP.NET, and SQL. My work focuses on building robust, scalable APIs and microservices to power modern applications."
          icon={<FaDatabase />}
        />
        <Card
          title="Web Application Development"
          des="I have developed responsive and scalable web applications using frameworks like AngularJS and ReactJS. My expertise lies in crafting intuitive user interfaces and seamless user experiences."
          icon={<AiOutlineGlobal />}
        />
        <Card
          title="Cloud Development"
          des="As a Microsoft Azure Certified Developer, I have hands-on experience designing cloud-based solutions, implementing microservices, and leveraging the power of cloud platforms for efficient application development."
          icon={<FaCloud />}
        />
        <Card
          title="Agile Development"
          des="With certifications in Agile methodologies, I have effectively contributed to Agile teams, ensuring smooth project execution and delivery while maintaining high-quality standards."
          icon={<FaProjectDiagram />}
        />
      </div>
    </section>
  );
};

export default Features;
