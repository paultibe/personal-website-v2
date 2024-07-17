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
          objectPosition="60% center"
        />
        {/* overlay for background image. positioned relative to here section div, which is full viewport */}
        <div className="absolute w-full h-full bg-black bg-opacity-50 z-2"></div>
        {/* title + subtitle text
        explicit positioning causes element to stretch across entire parent element*/}
        <div
          className="flex flex-col justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-3"
          style={{ color: "var(--main-background)" }}
        >
          <h1 className="text-3xl md:text-6xl xl:text-8xl" style={{ textShadow: "1px 1px 10px #0af" }}>
            Paul Tiberghien
          </h1>
          <p className="mt-3 text-lg md:text-2xl xl:text-3xl text-center mx-8">
            I’m a developer, visual storyteller, and seeker of discomfort.
          </p>
        </div>
      </div>
      <div className="relative pt-16">
        {/* container in tailwind used for setting max-width of elements dynamically based on nearest smallest breakpoint
        auto centers it. */}
        <div className="container mx-auto px-8">
          {/* flex container */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
            {/* md and lg breakpoint width adjustments*/}
            <div className="w-full px-4 mb-5 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center items-center">
                Hi and welcome!
              </h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 px-4 order-2 md:order-3">
              {/* image column */}
              <div className="max-w-80 sm:max-w-96 mx-auto">
                <Image
                  src="/profile-cropped.png"
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
                I’m a fourth year student at UBC studying Computer Science and
                Behavioural Neuroscience passionate about AI, robotics, and the
                brain.
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
      <div className="my-6 md:my-16">
        {/* Set a white background with vertical padding */}
        <div className="container mx-auto px-4 text-center">
          {/* Center content and add horizontal padding */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            // style={{ textShadow: "1px 1px 10px #0af" }}
          >
            {/* Large title with shadow */}
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
