import React from "react";

function Experience({ title, start, end, desc, tech }) {
  const wordPeriod = <p className="text-gray-400 min-w-40">{start + " - " + end}</p>;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="hidden md:block flex-shrink-0">{ wordPeriod }</div>

      <div className="flex flex-col gap-2">
        <p>{title}</p>
        <div className="block md:hidden flex-shrink-0">{ wordPeriod }</div>
        <p className="text-gray-400">{desc}</p>
        <p className="text-gray-400">{tech}</p>
      </div>
    </div>
  );
}

export default Experience;
