"use client";

import ExperienceToggle from "../Components/ExperienceToggle";

const page = () => {
  return (
    <>
      <div className="mt-24 sm:mt-16 text-center text-3xl font-bold">Experience</div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto my-6 p-4 border border-black rounded-lg shadow">
          <ExperienceToggle
            logo="/copperleaf-logo.png"
            title={
              <>
                <span>Incoming Software Engineer Intern @ </span>
                <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -rotate-1 -skew-x-12">
                  Copperleaf
                </span>
              </>
            }
            location="Vancouver, British Columbia"
            date="Sept 2024 - Apr 2025"
          >
            ☻ Value Frameworks team!
          </ExperienceToggle>
          <ExperienceToggle
            logo="/ubc-logo.png"
            title={
              <>
                <span>Software Engineer Intern @ </span>
                <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -skew-x-12 rotate-1">
                  UBC Digital Solutions
                </span>
              </>
            }
            location="Vancouver, British Columbia"
            date="May 2023 - Dec 2023"
          >
            ☻ Developed a full-stack ECG examination application for
            undergraduate medical students by designing and implementing a
            robust database schema using SQL and Oracle Apex, programming an
            interactive confusion matrix to offer real-time insights into
            student performance via D3.js, and customizing the user interface
            using HTML & CSS <br></br> ☻ Created two 100% dynamic Microsoft
            PowerBI dashboards by meticulously cleaning 300,000+ rows of JSON
            data using Rstudio and writing custom DAX expressions <br></br> ☻
            Implemented custom xAPI statements into online learning modules to
            optimize data collection of learning experiences
          </ExperienceToggle>
          <ExperienceToggle
            logo="/robotics-logo.png"
            title={
              <>
                <span>Software Engineer @ </span>
                <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -skew-x-12 -rotate-1">
                  UBC Open Robotics
                </span>
              </>
            }
            location="Vancouver, British Columbia"
            date="March 2024 - Present"
          >
            ☻ Working within the software subteam to create a general purpose
            home robot for the 2026 Robocup@Home competition
            <br></br>☻ Utilizing Linux, ROS, and Python to develop an
            interrupt-based NLP service for real-time verbal command recognition
            and conversion into ROS messages to be sent to active processes
          </ExperienceToggle>
          <ExperienceToggle
            logo="/ubc-logo.png"
            title={
              <>
                <span>Data Analyst @ </span>
                <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -skew-x-12 rotate-1">
                  UBC Campus Security
                </span>
              </>
            }
            location="Vancouver, British Columbia"
            date="Oct 2022 - Apr 2023"
          >
            ☻ Cleaned, analyzed, and visualized data trends in 5+ years of
            security data by using pivot tables and diverse visualizations to
            quantify the impact of crime prevention programs <br></br>☻
            Professionally communicated data trends to key stakeholders, such as
            ICBC, RCMP, and UBC Health & Wellness <br></br>☻ Led the
            redevelopment of Campus Security’s outreach program using a
            data-driven approach to guide strategic reorientation towards more
            effective crime prevention and community engagement
          </ExperienceToggle>
        </div>
      </div>
    </>
  );
};

export default page;
