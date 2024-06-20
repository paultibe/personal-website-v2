"use client";

import ExperienceToggle from "../Components/ExperienceToggle";

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold my-8">Experience</div>
      <ExperienceToggle
        logo="/next.svg"
        title="Fullstack Developer @ TheCreativeSolution"
      >
        Detailed description about your role as a Fullstack Developer...
      </ExperienceToggle>
      <ExperienceToggle
        logo="/next.svg"
        title="Software Developer Intern @ PayByPhone"
      >
        Detailed description about your role as an Intern...
      </ExperienceToggle>
      <ExperienceToggle
        logo="/next.svg"
        title="Software Developer Intern @ Apryse"
      >
        Detailed description about your role as an Intern...
      </ExperienceToggle>
    </>
  );
};

export default page;
