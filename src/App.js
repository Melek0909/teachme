import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route path="/dashboard/teach" element={<></>} />
          <Route path="/dashboard/learn" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
