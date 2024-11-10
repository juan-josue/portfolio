import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

function Project({ title, year, desc, tech, url, img }) {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex gap-4">
        <p className="text-gray-400 hidden md:block">{year}</p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <p>{title}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
            </a>
          </div>

          <p className="text-gray-400">{desc}</p>
          <p className="text-gray-400">{tech}</p>
        </div>

        <div
          className="bg-purple-300 w-20 h-20 rounded-xl flex-shrink-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    </div>
  );
}

export default Project;
