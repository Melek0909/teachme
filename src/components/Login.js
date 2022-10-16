import { useState } from "react";
import Logoofgomycode from "../images/Logogomycode.png";
import "../css/Firstpage.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");
  const handleLogin = () => {
    axios
      .post("http://localhost:3002/api/users/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", response.data.status);
        localStorage.setItem("username", response.data.user.username);

        navigate("/dashboard");
      })
      .catch(function (error) {});
  };
  return (
    <div className="Firstpage">
      <div className="col-6 Logopart">
        <div className="logogmc">
          <img
            src={Logoofgomycode}
            alt="logogomycode"
            width="466px"
            height="137px"
          />
        </div>
      </div>
      <div className="col-6 SingInpart1">
        <div>
          <h1
            style={{
              color: "white",
              fontFamily: "Georgia, serif",
              fontSize: "80px",
              paddingTop: "25%",
            }}
          >
            TeachMe...
          </h1>
        </div>
        <form>
          <div className="Loginbutton" style={{ marginTop: "10%" }}>
            <div>
              <label>
                <input
                  type="text"
                  placeholder="Type your Username"
                  style={{ color: "black", boxChadow: "0px" }}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                <input
                  type="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => {
                    setPassord(e.target.value);
                  }}
                />
              </label>
            </div>
            <br />
            <Button
              onClick={() => {
                handleLogin();
              }}
              variant="danger"
              style={{
                backgroundColor: "white",
                color: "black",
                width: "80px",
                boxChadow: "1px",
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
