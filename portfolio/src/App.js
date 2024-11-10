import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
}

export default App;
