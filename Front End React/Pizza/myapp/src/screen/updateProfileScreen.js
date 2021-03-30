import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {UpdateProfile} from "../actions/userActions";
import store from "../store";

const UpdateProfileScreen =(props)=>{
    
   
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
   const [address, setAddress] = useState("");
   //const [location, setLocation] = useState("");
  
// userId,name,address,location,phoneNumber

  const userId = store.getState().userSignin.response.data.userId;
  const dispatch = useDispatch();
  
  const updateUserProfile = useSelector((store) => store.updateprofile);

  const { loading, response, error } = updateUserProfile;

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

  const onUpdateProfile = () => {
     dispatch(
        UpdateProfile(
           userId,name,address,phoneNumber
      )
    );
  };
return(
<div className="wrapper">
      <div id="formContent">
        <h2 className="title"> Update Profile </h2>
        <div className="form">
        <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            className="username"
            placeholder="Name"
          />
         
          <input
            onChange={(e) => {
            setPhone(e.target.value);
            }}
            type="text"
            id="phone"
            className="username"
            placeholder="+91 "
          />
         
          <input
            onChange={(e) => {
            setAddress(e.target.value);
            }}
            type="text"
            id="address"
            className="username"
            placeholder="Address"
          />
          {/* <input
            onChange={(e) => {
            setLocation(e.target.value);
            }}
            type="text"
            id="staffId"
            className="username"
            placeholder="Location "
          /> */}
           
          
          <input
            type="submit"
            className="customBtn"
            value="Update"
            onClick={onUpdateProfile}
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

export default UpdateProfileScreen;