import React from "react";
import Link from "next/link";
import Image from "next/image";

// card for each project!
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  date: string;
  imgWidth: number;
  imgHeight: number;
}

const ProjectCard = ({
  image,
  title,
  description,
  link,
  date,
  imgHeight,
  imgWidth,
}: ProjectCardProps) => {
  return (
    <div className="container mx-auto md:max-w-lg max-w-xs">
      <Link
        href={link}
        passHref
        className="block overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative 2xl:h-48 lg:h-32 md:h-64 h-32 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={imgWidth}
            height={imgHeight}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 bg-white">
          <p className="2xl:text-sm lg:text-xs text-sm">📅 {date}</p>
          <h5 className="font-bold 2xl:text-xl lg:text-lg md:text-xl">{title}</h5>
          <p className="2xl:text-base lg:text-sm text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
