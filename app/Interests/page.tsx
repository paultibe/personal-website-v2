import React from "react";
import ProjectCard from "../Components/ProjectCard";

const interests = [
  {
    id: 1,
    image: "/marathon.jpeg",
    title: "Juggling",
    description: "Throwing things around in the air.",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 2,
    image: "/marathon.jpeg",
    title: "Traveling",
    description: "Exploring the world!",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 3,
    image: "/marathon.jpeg",
    title: "Running",
    description: "Callousing my mind...",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 4,
    image: "/marathon.jpeg",
    title: "Guitar",
    description: "Making a few sounds.",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 5,
    image: "/marathon.jpeg",
    title: "Backpacking",
    description: "Trying to be the best sponge I can.",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 6,
    image: "/marathon.jpeg",
    title: "Choir",
    description: "Finding harmony with others.",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 7,
    image: "/marathon.jpeg",
    title: "Reading",
    description: "Trying to be the best sponge I can.",
    link: "",
    date: "",
    imgWidth: 1920,
    imgHeight: 1280,
  },
  {
    id: 8,
    image: "/marathon.jpeg",
    title: "Miscellaneous",
    description: "A collection of random things I've dabbled in.",
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
