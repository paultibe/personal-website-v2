import React, { useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"; // ensure you have heroicons installed

interface ExperienceToggleProps {
  logo: string;
  title: string;
  children: React.ReactNode;
}

const ExperienceToggle = ({ logo, title, children }: ExperienceToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 mr-4" />
          <span className="font-semibold">{title}</span>
        </div>
        {/* {isOpen ? (
          <ChevronUpIcon className="h-6 w-6" />
        ) : (
          <ChevronDownIcon className="h-6 w-6" />
        )} */}
      </div>
      {isOpen && <div className="mt-2 pl-14 text-gray-700">{children}</div>}
    </div>
  );
};

export default ExperienceToggle;
