import React from "react";
import LandingPage from "./pages/landingPages";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/navBars";

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
