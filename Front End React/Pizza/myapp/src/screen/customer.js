// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import "./Navbar.css";
import image  from "../images/pizza9.jpg"
import image1  from "../images/pizza4.jpg"
import image2  from "../images/pizza8.jpg"

const CustomerScreen = (props) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    console.log("Signout");
    dispatch(logout());
  };
  return (
   
     <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid " id="navbarSupportedContent">
          <span className="navbar-brand"><h2>Customer</h2></span>
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
                <Link to="/home">
                  <span className="nav-link"><h2>Dashboard</h2>  </span>
                </Link>
              </li>
              {/* {
                <NavDropdown title=" Pizza Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/get-pendingappt">
                    Paneer pizaa
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/get-allappt">
                    Golden Corn pizza
                  </NavDropdown.Item>
                </NavDropdown>
              }
            */}
              {/* <li className="nav-item">
                <Link to="/">
                  <span className="nav-link">Add Cart</span>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/displayhotel">
                  <span className="nav-link"><h2>Pizza Outlets</h2>  </span>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/">
                  <span className="nav-link">Order Details</span>
                </Link>
              </li> */}
              
              {/* <li className="nav-item">
                <Link to="/">
                  <span className="nav-link">Show Cart</span>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/updateprofile">
                  <span className="nav-link"><h2>UpdateProfile  </h2> </span>
                </Link>
                
               
              </li>
              <li className="nav-item">
                <Link to="/changepassword">
                  <span className="nav-link"><h2>ChangePassword  </h2></span>
                </Link>
              </li>
            </ul> 

            <div className="d-flex">
              <button onClick={onLogout} className="btn btn-outline-success">
                <h2>Logout</h2>
              </button>
            </div>
          </div>
        </div>
      </nav>
   
      <div className="first">
            <img
          
              src={image}
              id="icon"
              alt="User Icon"
              style={{ maxWidth:400,height:300}}
              
            />
            <h1>Chizzpizza</h1>
            
            <img
              src={image1}
              id="icon"
              alt="User Icon"
              style={{ maxWidth:400,height:300}}
            />
            <h1>Margherita Pizza</h1>
             </div>
         
            

          
         
    </div>
  );
};

export default CustomerScreen;
