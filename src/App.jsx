import React from "react";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-full overflow-hidden"></div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
