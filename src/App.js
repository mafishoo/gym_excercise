import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home.js";
import ExcerciseDetails from "./pages/ExcerciseDetails";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

export const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/excercise/:id" element={<ExcerciseDetails/>} />
      </Routes>
      <Footer />
    </Box>
  );
};
