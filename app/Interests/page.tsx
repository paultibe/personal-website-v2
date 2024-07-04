import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    id: 1,
    image: "/marathon.jpeg",
    title: "Juggling",
    description: "the delicate art of circus juggling",
    link: "",
    date: "",
  },
];

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-14">
        A Few Interests 🤹‍♂️
      </div>
      <div className="container mx-auto px-4 scale-75">
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
