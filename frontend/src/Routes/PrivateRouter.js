import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Store } from "../hook/Store";

const PrivateRouter = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo ? (
    <Routes>
      <Route path="/gido" element />
      <Route path="/gido" element />
      <Route path="/gido" element />
    </Routes>
  ) : (
    <Navigate to="login" />
  );
};

export default PrivateRouter;
