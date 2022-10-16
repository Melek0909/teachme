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
  const [errorHandle, setErrorHandle] = useState(null);

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

        navigate("/dashboard", { replace: true });
      })
      .catch(function (error) {
        setErrorHandle("Wrong Login and Password");
      });
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
                  className={`${errorHandle ? "error" : null}`}
                  type="text"
                  placeholder="Type your Username"
                  style={{
                    boxChadow: "0px",
                  }}
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
                  className={`${errorHandle ? "error" : null}`}
                  type="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => {
                    setPassord(e.target.value);
                  }}
                />
              </label>
            </div>
            {errorHandle ? (
              <p style={{ margin: 20 }}>Your Credentials are wrong</p>
            ) : null}
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
