import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import LearnerDash from "./components/LearnerDash";
import TeacherDash from "./components/TeacherDash";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && window.location.pathname === "/") {
      navigate("/dashboard");
    }
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/learner-dashboard"
            element={
              <>
                <Header />
                <LearnerDash />
              </>
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              <>
                <Header />
                <TeacherDash />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
