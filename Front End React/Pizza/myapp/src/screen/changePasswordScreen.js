

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../actions/userActions"
import store from "../store";

const ChangeUserPasswordScreen = (props)=>{

    // const [email, setEmail] = useState("");
    // const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const userId = store.getState().userSignin.response.data.userId;

    const dispatch = useDispatch();
    
    const updateUserPassword = useSelector( (store) => store.updatepassword);
  
    const { loading, response, error } = updateUserPassword;
  
    

    // listen on change of the [loading, response, error] values
    useEffect(() => {
      console.log("use effect called: ");
      console.log("loading: ", loading);
      console.log("response: ", response);
      console.log("error: ", error);
  
      if (response && response.status == "success") {
        // user successfully got registered
        props.history.push("/customer");
      } else if (error) {
        // there is an error while making the API call
        console.log(error);
        alert("error while making API call");
      }
    }, [loading, response, error]);
  
    const onUpdatePassword = () => {
       dispatch(
        updatePassword(
            userId,
        //   email,
        //   oldPassword,
          password
        )
      );
    };
return(
    <div className="wrapper">
    <div id="formContent">
      <h2 className="title"> Change Password</h2>
      <div className="form">
        <input
          onChange={(e) => {
           // setEmail(e.target.value);
          }}
          type="text"
          id="email"
          className="username"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
          //setOldPassword(e.target.value);
          }}
          type="text"
          id="oldpassword"
          className="username"
          placeholder="OldPassword"
        />
        <input
          onChange={(e) => {
             setPassword(e.target.value);
          }}
          type="text"
          id="newPassword"
          className="username"
          placeholder="NewPassword"
        />
        <input
          type="submit"
          className="customBtn"
          value="Update"
          onClick={onUpdatePassword}
        />
      </div>
      <div id="form-footer"></div>
      <div id="formFooter">
        <a className="underlineHover forgot-pswd" href="/customer">
          Cancle
        </a>
      </div>
    </div>
  </div>
)
}
export default  ChangeUserPasswordScreen;