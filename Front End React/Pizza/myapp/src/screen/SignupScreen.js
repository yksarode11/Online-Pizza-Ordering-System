import { useState, useEffect } from "react";
import { signup } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";

const SignupScreen = (props) => {
  // "name":"abc",
  // "email":"abc@gmail.com",
  // "password":"abc",
  // "confirmPassword":"abc",
  // "phoneNumber":"123456",
  // "address":"pune"




  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userMobile, setPhone] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userRole] =useState("CUSTOMER");
  const [userAddress, setAddress] = useState("");

  const dispatch = useDispatch();
  const userSignup = useSelector((store) => store.userSignup);
  const { loading, response, error } = userSignup;

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && response.status === 200 ) {
      // user successfully got registered
      props.history.push("/signin");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const onSignup = () => {
    console.log("name: ", userName);
    console.log("email: ", userEmail);
    console.log("password: ", userPassword);
    dispatch(
      signup(
        userName,
        userEmail,
          userPassword,
          userMobile,
          userRole,
          userAddress

      )
    );
  };

  return (
    <div className="wrapper">
      <div id="formContent">
        <h2 className="title"> Online Pizza Ordering System </h2>
        <div className="form">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="userName"
            className="username"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            id="userEmail"
            className="username"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
            id="userMobile"
            className="username"
            placeholder="Phone"
          />
          <input
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
            id="userAddress"
            className="username"
            placeholder="Address"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="userPassword"
            className="password"
            placeholder="Password"
          />
       {/* <input
            onChange={(e) => {
              setConfPass(e.target.value);
            }}
            type="password"
            id="con-password"
            className="password"
            placeholder="Confirm Password"
          />  */}
          <input
            type="submit"
            className="customBtn"
            value="Signup"
            onClick={onSignup}
          />
        </div>
        <div id="form-footer"></div>
        <div id="formFooter">
          <a className="underlineHover forgot-pswd" href="/home">
            Signin
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
