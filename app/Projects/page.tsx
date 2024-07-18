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
    imgWidth: 1600,
    imgHeight: 800,
  },
  {
    id: 2,
    image: "/projects-event-horizon.png",
    title: "Event Horizon (nwHacks 2024)",
    description: "All university events, in one place.",
    link: "https://github.com/paultibe/ubc-event-horizon",
    date: "Jan 2024",
    imgWidth: 751,
    imgHeight: 466,
  },
  {
    id: 3,
    image: "/projects-ootd-group.jpeg",
    title: "🥇 OOTD (HackCamp 2023)",
    description: "An AI-powered digital closet.",
    link: "https://github.com/harrisonmacey/ootd-project",
    date: "Nov 2023",
    imgWidth: 2048,
    imgHeight: 1536,
  },
  {
    id: 4,
    image: "/projects-travellog.png",
    title: "Travellog (CPSC 210)",
    description: "Save Where You've Been, Made Easy",
    link: "https://github.com/paultibe/Travellog",
    date: "Dec 2022",
    imgWidth: 1577,
    imgHeight: 887,
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
      <div className="text-center text-3xl font-bold mt-24">
        A Few Projects!
      </div>
      <div className="container mx-auto my-16 2xl:max-w-7xl lg:max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              date={project.date}
              imgWidth={project.imgHeight}
              imgHeight={project.imgWidth}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
