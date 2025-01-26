'use client'
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <section
      className="flex-1 min-h-screen max-lg:max-w-screen-md bg-hero bg-cover bg-center opacity-70 lg:px-12 lg:py-4"
      id="Home"
    >
      {/* <Navbar /> */}
      <div className="flex flex-col items-center justify-center h-full text-black mx-auto">
        <h1 className="lg:text-5xl text-xl font-marcellus font-bold md:w-3/5 lg:w-4/5 p-6 lg:mt-[220px] mt-[150px] md:mt-[200px]">
          Creating a safe and nurturing environment where boys can thrive,
          realize their potential, and contribute positively to society.
        </h1>
        <button
          className="p-2 rounded-lg outline-none text-lg shadow-xl border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out"
          onClick={() => router.push("#about")}
        >
          Find out how
        </button>
      </div>
    </section>
  );
};

export default Home;
