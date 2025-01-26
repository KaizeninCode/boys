'use client'
import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <section
      className="flex-1 min-h-screen bg-hero bg-cover bg-center opacity-70 px-12 py-4"
      id="Home"
    >
      {/* <Navbar /> */}
      <div className="flex flex-col items-center justify-center h-full text-black mx-auto">
        <h1 className="text-5xl font-marcellus font-bold w-4/5 p-6 mt-[220px]">
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
