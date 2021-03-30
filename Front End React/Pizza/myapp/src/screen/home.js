import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
 import img1 from '../images/pizza11.jpg';
 import img2 from '../images/pizza3.jpg';
 import img3 from '../images/pizza9.jpg';
 import { signup } from "../actions/userActions";
import Footer from "./Footer";

const Home = () =>
{
    return (<div>
        <div class="container-fluid">
  <nav class="navbar navbar-dark bg-secondary">
  <div class="container-md">
    <a class="navbar-brand" href="#"><h2>Pizza</h2></a>
    <a class="navbar-brand" href="#"><h2>Home</h2></a>
    <a class="navbar-brand" href="./about"><h2>About</h2></a>
    <a class="navbar-brand" href="./signin"><h2>Signin</h2></a>
   
  </div>
  </nav>
</div>
        <Carousel interval={500}>
             <Carousel.Item>
                 <img src= {img1} height="400px" width="100%" alt="Img1" />

             </Carousel.Item>
             <Carousel.Item>
                 <img src= {img2} height="400px" width="100%" alt="Img2" />

             </Carousel.Item>
             <Carousel.Item>
                 <img src={img3} height="400px" width="100%" alt="Img3" />

             </Carousel.Item>
        </Carousel>
         
<Footer/>

         </div>) ;

   
}

export default Home