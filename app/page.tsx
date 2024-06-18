import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Homepage Background Updated.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-2"></div>
      <div
        className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-3"
        style={{ color: "var(--main-background)" }}
      >
        <h1 className="text-3xl" style={{ textShadow: "1px 1px 10px #0af" }}>
          Paul Tiberghien
        </h1>
        <p className="mt-3 text-lg text-center">
          I’m a developer, visual storyteller, and seeker of discomfort.
        </p>
      </div>
      {/* main about section here */}
      <div className="mt-4 text-center">
        <h1>My favourite moment of discomfort</h1>
        {/* either marathon or k2 picture here */}
      </div>
    </main>
  );
}
