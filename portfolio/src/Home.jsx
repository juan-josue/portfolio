import React from "react";

import transition from "./transition";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    </div>
  );
}

export default transition(Home);
