import { Outlet } from "react-router-dom";
import Login from "./Login";
const useAuth = () => {
  const user = localStorage.getItem("token");
  return user;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
