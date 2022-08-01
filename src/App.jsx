import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/Card";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="sakura-card-captor-api" exact element={<Content />} />
          <Route path="/Card/:id" element={<Card />} />
          <Route path="*" element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
