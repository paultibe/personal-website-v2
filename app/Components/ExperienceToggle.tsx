import React, { useState } from "react";
import Image from "next/image";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"; // ensure you have heroicons installed

interface ExperienceToggleProps {
  logo: string;
  title: React.ReactNode;
  date: string;
  location: string;
  children: React.ReactNode;
}

const ExperienceToggle = ({
  logo,
  title,
  date,
  location,
  children,
}: ExperienceToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <div
        className="flex items-center justify-between px-4 md:px-48 cursor-pointer rounded-lg shadow-md shadow-gray-300/50 hover:shadow-lg transition-shadow duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={251}
            height={251}
            className="h-10 w-10 mr-4"
          />
          <span className="font-semibold">{title}</span>
        </div>
        <Image
          src="/chevron-icon.png"
          alt="chevron icon"
          width="48"
          height="48"
          className="h-3 w-3"
        ></Image>

        {/* {isOpen ? (
          <ChevronUpIcon className="h-6 w-6" />
        ) : (
          <ChevronDownIcon className="h-6 w-6" />
        )} */}
      </div>
      {isOpen && (
        <div className="mt-2 pl-14 text-black">
          <div className="mb-2 text-black flex items-center">
            <Image
              src="/google-maps-logo.png"
              alt="Google Maps"
              width={512}
              height={512}
              className="h-6 w-6 mr-2"
            />
            <div className="font-semibold">
              {location}, {date}
            </div>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExperienceToggle;
