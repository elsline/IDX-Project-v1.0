/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import Libraries from "../components/Libraries";
import Welcome from "../components/Welcome";

export const RouterFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/libraries" element={<Libraries />} />
    </Routes>
  );
};
