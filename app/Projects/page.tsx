import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    id: 1,
    image: "/projects-computers-galore.png",
    title: "Computers Galore (CPSC 304)",
    description: "Find, filter, compare computers!",
    link: "https://github.com/paultibe/computers-galore",
    date: "Apr 2024",
  },
  {
    id: 2,
    image: "/projects-event-horizon.png",
    title: "Event Horizon (nwHacks 2024)",
    description: "All university events, in one place.",
    link: "https://github.com/paultibe/ubc-event-horizon",
    date: "Jan 2024",
  },
  {
    id: 3,
    image: "/projects-ootd-group.jpeg",
    title: "OOTD (HackCamp 2023)",
    description: "An AI-powered digital closet.",
    link: "https://github.com/harrisonmacey/ootd-project",
    date: "Nov 2023",
  },
  {
    id: 4,
    image: "/projects-travellog.png",
    title: "Travellog (CPSC 210)",
    description: "Save Where You've Been, Made Easy",
    link: "https://github.com/paultibe/Travellog",
    date: "Dec 2022",
  },
  // {
  //   id: 5,
  //   image: "/path-to-image-1.jpg",
  //   title: "Project Title 1",
  //   description: "Description of Project 1...",
  //   link: "/project-1",
  //   date: "something",
  // },
  // {
  //   id: 6,
  //   image: "/path-to-image-1.jpg",
  //   title: "Project Title 1",
  //   description: "Description of Project 1...",
  //   link: "/project-1",
  //   date: "something",
  // },
];

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-14">A Few Projects!</div>
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
