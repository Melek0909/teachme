import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LightGMC from "../images/lightgmc.png";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };
  const handleSkills = () => {
    navigate("/skills");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <img style={{ width: "140px" }} src={LightGMC} alt="Logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            onClick={() => {
              navigate("/learner-dashboard");
            }}
          >
            Learner Dashbord
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/teacher-dashboard");
            }}
          >
            Teacher Dashboard
          </Nav.Link>
          <NavDropdown title="Setting" id="collasible-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                handleSkills();
              }}
            >
              Change Skills
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
