import { Route, Routes } from "react-router-dom";
import React from "react";
import { Form } from "../Pages/Form";
import { Home } from "../Pages/Home";
import { UploadCSV } from "../Pages/UploadCSV";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/home" element={<Home />} />
      <Route path="/uploadcsv" element={<UploadCSV />} />
    </Routes>
  );
};
