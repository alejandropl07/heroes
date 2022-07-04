import React from "react";
import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/hero/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import NavBar from "../components/ui/NavBar";

const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />

        <Route path="/search" element={<SearchScreen />} />
        <Route path="/hero" element={<HeroScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};

export default DashboardRouter;
