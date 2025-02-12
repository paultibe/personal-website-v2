"use client";
import Image from "next/image";
import React from 'react';

import ExperienceToggle from "../Components/ExperienceToggle";
import styles from "./home.module.css";
import { useEffect, useState } from "react";

// TODO: create variable to store info about each experience. use map function to map to ExperienceToggle props

const page = () => {
  // const [showCircle, setShowCircle] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowCircle(true);
  //   }, 500); // Initial delay for title
  // }, []);

  // ${
  //   showCircle ? styles.fadeIn : styles.hidden
  // }`

  return (
    <>
      <div className="mt-32 sm:mt-24 text-center text-3xl font-bold">
        Experience
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mt-16 p-4 border border-black rounded-lg shadow">
          <ExperienceToggle
            logo="/copperleaf-logo.png"
            title={
              <>
                <span>Software Engineer Intern @ </span>
                <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -rotate-1 -skew-x-12">
                  Copperleaf
                </span>
              </>
            }
            location="Vancouver, British Columbia"
            date="Sept 2024 - Apr 2025"
          >
            ☻ Implemented a Repository and Data Transfer Object pattern and
            wrote custom exception handling in C#/.NET to handle 100+ years of
            time-varying client inputs to quantify the monetary value of surplus
            capacity in an electricity grid <br></br> ☻ Achieved 100% code
            coverage by writing XML-based and NUnit unit tests to validate new
            implementation logic <br></br> ☻ Created PL/SQL scripts to remove
            obsolete data in client databases and debugged Jenkins pipelines as
            part of CI/CD
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
            ☻ Implemented a finite state machine in Python to mitigate LLM
            hallucination on tasks for the Robocup@Home 2026 competition by
            generating subtasks using the OpenAI API and transitioning subtasks
            based on environment observations
            <br></br>
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
