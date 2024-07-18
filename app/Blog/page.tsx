import React from "react";
import ProjectCard from "../Components/ProjectCard";

const writings = [
  {
    id: 1,
    image: "/personality.webp",
    title: "Why Every Student Should Take a Personality Course ",
    description: "coming soon:)",
    link: "",
    date: "",
    imgWidth: 1962,
    imgHeight: 1160,
  },
];

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-32 sm:mt-24">
        A Few Writings ✍️
      </div>
      <div className="container mx-auto mt-16 2xl:max-w-7xl lg:max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4">
          {writings.map((writing) => (
            <ProjectCard
              key={writing.id}
              image={writing.image}
              title={writing.title}
              description={writing.description}
              link={writing.link}
              date={writing.date}
              imgWidth={writing.imgHeight}
              imgHeight={writing.imgWidth}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
