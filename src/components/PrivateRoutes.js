import { Outlet } from "react-router-dom";
import Login from "./Firstpage";
const useAuth = () => {
  const user = true;
  return user;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
