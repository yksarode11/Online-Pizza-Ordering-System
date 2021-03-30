import { useState, useEffect } from "react";
import { signin } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import image  from "../images/pizza4.jpg"
import "./login.css";



const SigninScreen = (props) => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;
  

  const dispatch = useDispatch();
  const onSignin = () => {
    console.log("email:- ", userEmail);
    console.log("password:- ", userPassword);
    dispatch(signin(userEmail, userPassword));
  };

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

  
    if (response && response.status === 200) {
      console.log("role: ", response.data.userRole);
      sessionStorage.setItem("token", response.data.token);
    
      if (response && userSignin.response.data.userRole == "ADMIN") {
        props.history.push("/admin");
      } else if (response && userSignin.response.data.userRole == "CUSTOMER") {
        props.history.push("/customer");
       
       
      } else if (response && userSignin.response.data.userRole == "PIZZAOUTLET") {
        props.history.push("/owner");
      }
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);
  return (
    <div className="overflow-auto">
      <div className="wrapper">
        <div id="formContent">
          <h2 className="title"> Online Pizza Ordering System  </h2>

          <div className="first">
            <img
              src={image}
              id="icon"
              alt="User Icon"
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div className="form">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              id="signin"
              className="username"
              placeholder="Email Id"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              className="password"
              placeholder="Password"
            />
            <input
              type="submit"
              className="customBtn"
              value="Login"
              onClick={onSignin}
            />
            <label style={{ color: "red" }}>{props.message}</label>
          </div>
          <div id="formFooter">
            <a
              className="underlineHover forgot-pswd float-start"
              href="/forget-password"
            >
              Forgot Password
            </a>
            <a className="underlineHover forgot-pswd float-end" href="/signup">
              Signup Here
            </a>
            <p></p>
          </div>
        </div>
        {loading && <div>waiting for response</div>}
      </div>
    </div>
  );
};

export default SigninScreen;
