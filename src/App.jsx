import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, ContactUS } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUS />} />
      </Routes>
    </>
  );
};

export default App;
