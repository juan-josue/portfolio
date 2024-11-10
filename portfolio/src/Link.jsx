import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

function Link({ url, text, platform }) {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex gap-4">
        <p className="text-gray-400 min-w-16">{platform}</p>

        <div className="flex gap-2 items-center">
          <p>{text}</p>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" >
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Link;
