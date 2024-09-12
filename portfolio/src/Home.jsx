import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import transition from "./transition";
import pfp from "./assets/pfp.jpg";

function ArrowLink({ endpoint, text }) {
  return (
    <Link
      to={endpoint}
      className="flex justify-between gap-8 border-b-2 border-zinc-200"
    >
      <h5 className="font-text">{text}</h5>
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="#e4e4e7"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        />
      </svg>
    </Link>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-16 bg-zinc-900 text-zinc-200">
      <div className="flex flex-col lg:flex-row justify-between gap-16 py-32">

        <div className="flex flex-col w-full lg:w-3/5 gap-16">
          <div className="flex flex-row justify-between items-top">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl lg:text-7xl font-bold font-title">
                Hey, I'm <br />
                <span className="text-indigo-500">Juan Gutierrez.</span>
                <br />
              </h1>
              <h2 className="text-2xl lg:text-3xl font-text">
                <span className="text-indigo-500">{"> "}</span>
                <Typewriter
                  words={[
                    "Web Developer",
                    "Computer Science Major",
                    "Bird Watcher",
                  ]}
                  loop={false}
                  cursor
                  typeSpeed={120}
                  deleteSpeed={100}
                />
              </h2>
            </div>
            <img className="h-44 w-44 rounded-xl hidden xl:block" src={pfp} alt="headshot" />
          </div>
          <h4 className="text-xl font-text">
            I'm a Computer Science major at the University of Toronto. I am a
            results-oriented developer whi about turns ideas into impactful,
            real-world solutions.
          </h4>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8 font-text">
            <h5 className="font-title text-lg text-zinc-300">Projects</h5>
            <ArrowLink text="Ornipedia" endpoint="/projects" />
            <ArrowLink text="Tracktion" endpoint="/projects" />
          </div>
          <div className="flex flex-col gap-8 font-text">
            <h5 className="font-title text-lg text-zinc-300">
              Work Experience
            </h5>
            <ArrowLink text="GoDaddy" endpoint="/experience" />
            <ArrowLink text="Environment and Climate Change Canada" endpoint="/experience" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-[64px] flex items-center bg-indigo-500">
        <Marquee
          className="font-text whitespace-pre"
          autoFill
          pauseOnHover
          gradient
          gradientColor="#6366f1"
        >
          {`  Full Stack Developer  •  2+ Years of Experience  •  Specializing in React, Flask, and AI Integration  •  Passionate About Building Impactful Solutions  •  University of Toronto Computer Science  •  Driven by Innovation & Results  •`}
        </Marquee>
      </div>
    </div>
  );
}

export default transition(Home);
