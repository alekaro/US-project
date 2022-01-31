import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import MainComponent from "./MainComponent";
import { useAppContext } from "../lib/contextLib";

export default function RoutesComponent() {
  const { isAuthenticated } = useAppContext();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {isAuthenticated && (
        <Route path="/main" element={<MainComponent />} />
      )}
      <Route element={<NotFound />} />
    </Routes>
  );
}