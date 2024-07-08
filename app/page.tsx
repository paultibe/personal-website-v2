import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* hero section. h-screen is full viewport height */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Homepage Background Updated.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />

        {/* overlay for background image. positioned relative to here section div, which is full viewport */}
        <div className="absolute w-full h-full bg-black bg-opacity-50 z-2"></div>
        {/* title + subtitle text
        explicit positioning causes element to stretch across entire parent element*/}
        <div
          className="flex flex-col justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-3"
          style={{ color: "var(--main-background)" }}
        >
          <h1 className="text-3xl" style={{ textShadow: "1px 1px 10px #0af" }}>
            Paul Tiberghien
          </h1>
          <p className="mt-3 text-lg text-center">
            I’m a developer, visual storyteller, and seeker of discomfort.
          </p>
        </div>
      </div>
      <div className="relative py-16">
        {/* container in tailwind used for setting max-width of elements dynamically based on nearest smallest breakpoint
        auto centers it. */}
        <div className="container mx-auto ">
          {/* flex container */}
          <div className="flex flex-wrap items-center justify-center">
            {/* md and lg breakpoint width adjustments*/}
            <div className="w-full md:w-1/2 lg:w-5/12 px-4">
              {/* Text column */}
              <h2 className="text-4xl font-semibold mb-5">Hi and welcome!</h2>
              <p className="mb-5">
                I’m a fourth year student at UBC studying Computer Science and
                Behavioural Neuroscience passionate about AI, robotics, and the
                brain.
              </p>
              <p className="mb-5">
                In my free time, you can find me embarking on long backpacking
                trips, learning new juggling tricks, running a few too many
                kilometres, snapping shots on my cameras, spending time with
                friends and family, or trying something completely new!
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 px-4">
              {/* image column */}
              <div className="max-w-sm mx-auto">
                <Image
                  src="/profile-cropped.png"
                  alt="Hiking on the Camino de Santiago"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        {/* Set a white background with vertical padding */}
        <div className="container mx-auto px-4 text-center">
          {/* Center content and add horizontal padding */}
          <h2
            className="text-4xl font-bold mb-4"
            // style={{ textShadow: "1px 1px 10px #0af" }}
          >
            {/* Large title with shadow */}
            My Favourite Moment of Discomfort
          </h2>
          <p className="text-lg mb-6">
            I ran a marathon with no training. <br></br>
            Things don't always go according to plan.
          </p>
          <Image
            src="/marathon.jpeg"
            alt="Running a Marathon With No Training"
            className="mx-auto rounded-lg shadow-lg"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
    </main>
  );
}
