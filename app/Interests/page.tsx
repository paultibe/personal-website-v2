import React from "react";
import ProjectCard from "../Components/ProjectCard";

const interests = [
  {
    id: 1,
    image: "/marathon.jpeg",
    title: "Juggling",
    description: "the delicate art of circus juggling",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
];

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-32 sm:mt-24">
        A Few Interests 🤹‍♂️
      </div>
      <div className="container mx-auto mt-16 2xl:max-w-7xl lg:max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4">
          {interests.map((interest) => (
            <ProjectCard
              key={interest.id}
              image={interest.image}
              title={interest.title}
              description={interest.description}
              link={interest.link}
              date={interest.date}
              imgWidth={interest.imgHeight}
              imgHeight={interest.imgWidth}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
