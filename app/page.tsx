"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
      setTimeout(() => {
        setShowCircle(true);
        setTimeout(() => {
          setShowSubtitle(true);
        }, 325);
      }, 325);
    }, 500);
  }, []);

  return (
    <main className="">
      {/* hero section. h-screen is full viewport height */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Homepage Background Updated.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="60% center" // this is the move the background image itself (so my face is centered)
        />
        {/* (dark) overlay for background image. positioned relative to here section div, which is full viewport */}
        <div className="absolute w-full h-full bg-black bg-opacity-50 z-2"></div>
        {/* title + subtitle text */}

        <div
          className="flex flex-col justify-center absolute items-center space-y-8 top-0 bottom-0 right-0 left-0 z-3"
          style={{ color: "var(--main-background)" }}
        >
          <h1
            className={`text-3xl md:text-6xl xl:text-8xl ${
              showTitle ? styles.fadeIn : styles.hidden
            }`}
            // style={{ textShadow: "1px 1px 10px #0af" }}
          >
            Paul Tiberghien
          </h1>
          <div className="relative max-w-xs md:max-w-5xl mt-3 text-lg md:text-2xl xl:text-3xl text-center mx-8">
            <p className={`${showSubtitle ? styles.fadeIn : styles.hidden}`}>
              I’m a <span className="relative">developer</span>, visual
              storyteller, and seeker of discomfort.
            </p>
            <Image
              src="/crayon-circle-paul.png"
              alt="crayon circle paul"
              className={`absolute mx-auto -left-4 md:left-8 xl:-left-10 -top-60 md:-top-58 xl:-top-90 z-10 md:w-64 xl:w-96 h-72 md:h-64 w-100 xl:h-96 ${
                showCircle ? styles.fadeIn : styles.hidden
              }`}
              width={1500}
              height={1000}
            />
            {/* {showUnderline && (
              <Image
                src="/chalk-underline-1.png"
                alt="Chalk Underline"
                className={`absolute left-0 right-0 mx-auto ${
                  showUnderline ? styles.revealAnimation : styles.hidden
                }`}
                style={{
                  bottom: "-10px",
                }}
                width={200}
                height={20}
              />
            )} */}
          </div>
        </div>
      </div>
      {/* welcome section */}
      <div className="relative mt-16">
        {/* container in tailwind used for setting max-width of elements dynamically based on nearest smallest breakpoint
        auto centers it. */}
        <div className="container mx-auto px-8">
          {/* flex container */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
            <div className="w-full px-4 mb-5 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center items-center">
                Hi and welcome!
              </h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 px-4 order-2 md:order-3">
              {/* image column */}
              <div className="max-w-80 sm:max-w-96 mx-auto">
                <Image
                  src="/profile-cropped2.png"
                  alt="Hiking on the Camino de Santiago"
                  className="rounded-lg shadow-lg"
                  width={429}
                  height={520}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="w-80 sm:w-96 md:w-1/2 lg:w-5/12 px-4 order-3 md:order-2 py-5">
              <p className="mb-5 lg:text-xl xl:text-2xl">
                Life is a series of experiments.
                <br></br>
                <br></br>
                Experiments are the best teachers.
                <br></br>
                <br></br>
                I'm not sure where exactly I'm headed, but I'm continuously
                experimenting.
                <br></br> <br></br>
                As the only Computer Science and Behavioural Neuroscience
                student at UBC, I've had the unique privilege of peeking under
                two beautiful, complex, enormously relevant, and
                rapidly-changing fields. I'm particularly interested in
                distributed systems, cloud computing, learning, personal
                knowledge management, and the intersection of AI, psychology,
                and neuroscience.
                <br></br> <br></br>
                For some of my work, check out my{" "}
                <Link
                  href="/Experience"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  experience
                </Link>{" "}
                and{" "}
                <Link
                  href="/Projects"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  projects
                </Link>
                .<br></br> <br></br>
                To get to know me better, including my core beliefs, values, and
                systems, checkout my{" "}
                <a
                  href="https://garden.paultiberghien.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  digital garden
                </a>
                .
              </p>
              <p className="mb-5 lg:text-xl xl:text-2xl">
                In my free time, you can find me embarking on long backpacking
                trips, learning new juggling tricks, running a few too many
                kilometres, snapping shots on my cameras, spending time with
                friends and family, or trying something completely new!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* discomfort section */}
      <div className="mt-6 md:mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            // style={{ textShadow: "1px 1px 10px #0af" }}
          >
            My Favourite Moment of Discomfort
          </h2>
          <p className="text-lg mb-6 lg:text-xl xl:text-2xl">
            I ran a marathon with no training. <br></br>
            Things don't always go according to plan.
          </p>
          <div className="max-w-96 sm:max-w-md md:max-w-lg xl:max-w-6xl mx-auto">
            <Image
              src="/marathon.jpeg"
              alt="Running a Marathon With No Training"
              className="mx-auto rounded-lg shadow-lg"
              width={1920}
              height={1280}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
