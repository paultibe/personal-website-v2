import React from "react";

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mt-14 mb-10">
        I love{" "}
        <span className="bg-yellow-300 px-2.5 py-0.5 font-bold rounded-sm inline-block transform -rotate-1 -skew-x-12">
          visual storytelling.
        </span>
        <br></br>
        <br></br>
        Here are some of my favourite stories so far.
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="425"
              src="https://www.youtube.com/embed/rbXImoZrrFQ?si=0rVsPg-AVpC1RYXE"
              title="I Won my University's Largest Competition || UBC Storm the Wall"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl text-center font-bold mb-2">
              I Won my University's Largest Competition || UBC Storm the Wall
            </h3>
            <p className="text-center">
              A 175m swim, a 500m sprint, a 3500m bike ride, 1500m run, and a 12
              foot wall.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-10 flex-row-reverse">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="425"
              src="https://www.youtube.com/embed/givioZzfNDA?si=X4TV_DXUVq7v0Ano"
              title="My First Month of Senior Year"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl text-center font-bold mb-2">
              My First Month of Senior Year
            </h3>
            <p className="text-center">
              An honest visual diary on my first month of senior year.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-10">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="425"
              src="https://www.youtube.com/embed/qpTPqxPe6W8?si=zRMVK5lGL0coF_r0"
              title="Claire & Tyler || Aug 2, 2023"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl text-center font-bold mb-2">
              Claire & Tyler || Aug 2, 2023
            </h3>
            <p className="text-center">
              Two of my favourite people got married!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-10 flex-row-reverse">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="425"
              src="https://www.youtube.com/embed/FTDZ1fYeNik?si=AIEvJQ-rlU9LRAeg"
              title="In Pursuit of Fulfillment"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl text-center font-bold mb-2">
              In Pursuit of Fulfillment
            </h3>
            <p className="text-center">
              A story about going against the grain to find fulfillment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
