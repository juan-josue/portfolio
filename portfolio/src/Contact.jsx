import React from "react";

import transition from "./transition";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Contact Me</h1>
    </div>
  );
}

export default transition(Contact);
