import React from "react";
import Link from "next/link";

// card for each project!
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  date: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  link,
  date,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      passHref
      className="block overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 bg-white">
        <p>📅 {date}</p>
        <h5 className="font-bold text-xl">{title}</h5>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
