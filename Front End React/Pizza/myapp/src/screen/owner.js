import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import "./Navbar.css";
import image  from "../images/pizza8.jpg"

const Owner= (props) => {
    const dispatch = useDispatch();
  
    const onLogout = () => {
      console.log("Signout");
      dispatch(logout());
    };
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Owner</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Customer Details</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Admin Details</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>        
        <li className=" d-grid gap-2 d-md-flex justify-content-md-end">

              <button onClick={onLogout} className="btn btn-success btn-lg float-right">
                Logout
              </button>

            </li>
      </ul>

     
    </div>
  </div>
</nav>
   <div className="first">
            <img
              src={image}
              id="icon"
              alt="User Icon"
              style={{ maxWidth:500,height:500 }}
            />
          </div>

   </div>


    )

}


export default Owner;
