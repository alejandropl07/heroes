import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRouter from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
