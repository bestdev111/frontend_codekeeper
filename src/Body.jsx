import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import SearchPage from "./pages/search";
import ShowPage from "./pages/show";

const Body = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/show/:nasaId" element={<ShowPage />} />
        <Route path="*" element={<Navigate to="/search" replace />} />
      </Routes>
    </Layout>
  );
};

export default Body;
