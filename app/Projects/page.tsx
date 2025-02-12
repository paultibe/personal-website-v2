import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    id: 6,
    image: "/projects-roammates.png",
    title: "roammates 🥇 (Hack Western 2024)",
    description: "The easiest way to plan your travels.",
    link: "https://dorahacks.io/navi?to=/buidl/20357",
    date: "Nov 2024",
    imgWidth: 7680,
    imgHeight: 4320,
  },
  {
    id: 5,
    image: "/projects-cruz.jpg",
    title: "cruz 🥇🥇🥈 (Stormhacks 2024)",
    description: "Uber for campuses meets Tinder for friends.",
    link: "https://devpost.com/software/cruz-67ziu2",
    date: "Oct 2024",
    imgWidth: 806,
    imgHeight: 537,
  },
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
    image: "/projects-event-horizon2.png",
    title: "Event Horizon (nwHacks 2024)",
    description: "All university events, in one place.",
    link: "https://devpost.com/software/ubc-event-horizon",
    date: "Jan 2024",
    imgWidth: 751,
    imgHeight: 466,
  },
  {
    id: 3,
    image: "/projects-ootd-group.jpeg",
    title: "OOTD (HackCamp 2023) 🥇",
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
    description: "Save Where You've Been, Made Easy.",
    link: "https://github.com/paultibe/Travellog",
    date: "Dec 2022",
    imgWidth: 1577,
    imgHeight: 887,
  },
];

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-32 sm:mt-24">
        A Few Projects!
      </div>
      <div className="container mx-auto mt-16 2xl:max-w-7xl lg:max-w-4xl">
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
