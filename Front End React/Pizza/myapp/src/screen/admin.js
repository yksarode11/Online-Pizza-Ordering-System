// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import "./Navbar.css";

const AdminScreen = (props) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    console.log("Signout");
    dispatch(logout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid " id="navbarSupportedContent">
          <span className="navbar-brand">Customer</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/admin">
                  <span className="nav-link">Dashboard</span>
                </Link>
              </li>
              {
                <NavDropdown title=" Pizza Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/get-pendingappt">
                    Paneer pizaa
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/get-allappt">
                    Golden Corn pizza
                  </NavDropdown.Item>
                </NavDropdown>
              }
              {/* <NavDropdown title="View Staff" id="basic-nav-dropdown">
                <NavDropdown.Item href="/get-doctor">
                  View Doctor
                </NavDropdown.Item>
                <NavDropdown.Item href="/get-recept">
                  View Receptionist
                </NavDropdown.Item>
              </NavDropdown> */}
              <li className="nav-item">
                <Link to="/book-appt">
                  <span className="nav-link">Product List</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/get-allInfo">
                  <span className="nav-link">Order List</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/update-patientprofile">
                  <span className="nav-link">User List</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cancel-appt">
                  <span className="nav-link">Delivery Boy </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/change-patientpass">
                  <span className="nav-link">Change Password</span>
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              <button onClick={onLogout} className="btn btn-outline-success">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminScreen;

