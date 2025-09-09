"use client";
import Image from "next/image";
import React from "react";

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
            logo="/aws-logo.png"
            title={
              <>
                <span>Software Engineer Intern @ </span>
                <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -rotate-1 -skew-x-12">
                  Amazon Web Services
                </span>
              </>
            }
            location="Toronto, Ontario"
            date="May 2025 - Aug 2025"
          >
            ☻ Designed and implemented an extensible pre-validation framework
            for an internal AWS RDS infrastructure service to enable clients to
            synchronously validate customer API request inputs, setting a
            precedent for 37 adjacent services <br></br> ☻ Pre-validated 34
            common input errors across two APIs in Java/Kotlin in AWS ECS
            clusters running on AWS Fargate by leveraging the SDKs of AWS EC2,
            EBS, KMS, CloudWatch, and Service Quotas <br></br> ☻ Achieved a 99%
            speedup in the average notification time to both our clients (2min
            to 1.26s) and clients’ customers (5.18min to 3.26s) in worst case
            scenarios of invalid inputs <br></br> ☻ Added service-specific
            exception handling to 11 AWS Lambdas used in 12 asynchronous AWS
            Step Functions to prevent multiple on-call pages per week, provide
            more specific error codes to our clients, and better maintain our
            API contract <br></br> ☻ Implemented a factory pattern for common
            objects across codebase and utilized Guice just-in-time bindings to
            cleanup dependency injections, saving 1500+ lines of code
          </ExperienceToggle>
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
            ☻ Developed a custom statistical model used across 118k power
            delivery assets to quantify surplus capacity benefits using 100+
            years of historical and projected client data by implementing a
            Repository pattern in C#/.NET <br></br> ☻ Automated NUnit exception
            test generation across 281 client repositories by creating a Python
            CLI tool and writing backend parsing logic in a containerized
            Java/Kotlin Sprint Boot application to populate parameterized
            templates, saving approximately 100min/week of manual work <br></br>
            ☻ Revamped programmatic, department-wide spec sheet template by
            introducing time-varying output cells, versioning, and dynamic cell
            naming using Apache POI to reduce cross-functional bottlenecks
            across the organization <br></br> ☻ Achieved an 8x speedup on an
            internal tool by writing selective file filtering logic in Python to
            reduce S3 payload size by 81% and refactoring backend code to remove
            redundant network calls
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
            ☻ Developed a full-stack ECG examination application used by over
            90% of each UBC medical class <br></br> ☻ Architected and
            implemented a scalable database schema storing 80k+ ECGs using SQL
            and Oracle DB
            <br></br> ☻ Implemented a 34x34 interactive confusion matrix using
            D3.js to reveal key misconceptions in ECG diagnoses <br></br> ☻
            Integrated granular student engagement tracking by writing custom
            xAPI statements across 750+ online module slides <br></br> ☻ Created
            two 100% dynamic Microsoft PowerBI dashboards to visualize learning
            experiences across modules by writing a Python script to parse 300k+
            rows of JSON data and writing custom DAX expressions to enable
            cross-filtering
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
            <br></br> ☻ Leading the design and development of the new team
            website using Next.js, TailwindCSS, and Figma
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
            security data to quantify the impact of crime prevention programs
            and redevelop Campus Security’s outreach program using a data-driven
            approach
          </ExperienceToggle>
        </div>
      </div>
    </>
  );
};

export default page;
