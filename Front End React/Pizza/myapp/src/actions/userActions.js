import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,

  DISPLAY_HOTEL_REQUEST ,
  DISPLAY_HOTEL_SUCCESS,
  DISPLAY_HOTEL_FAIL ,

  DISPLAY_HOTEL_ID_REQUEST,
DISPLAY_HOTEL_ID_SUCCESS,
DISPLAY_HOTEL_ID_FAIL,

  UPDATE_PROFILE_REQUEST , 
UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,


  UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS ,
 UPDATE_PASSWORD_FAIL,
  
} from "../constants/userConstants";
import axios from "axios";

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem("token");
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/signin";
  };
};

export const signup = (
  userName,
      userEmail,
        userPassword,
        userMobile,
        userRole,
        userAddress
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      userName,
      userEmail,
        userPassword,
        userMobile,
        userRole,
        userAddress
    };
    const url = "http://localhost:7878/pizza/user/register";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const signin = (userEmail,       userPassword,
  ) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      userEmail,
      userPassword,
    };
    const url = "http://localhost:7878/pizza/user/login";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

//****************************************************************************************** */ 
  

export const displayHotels = () => {
  return (dispatch) => {
    dispatch({
      type: DISPLAY_HOTEL_REQUEST,
    });
    
    const header = {
      headers: {
        "Content-Type": "application/json",
        //token: sessionStorage['token'], ///IMP
      },
    };

    const url = 'http://localhost:7870/hotel/hotels';

    axios
      .get(url,header)
      .then((response) => {
        dispatch({
          type: DISPLAY_HOTEL_SUCCESS,
          payload: response,
        });
      })

      .catch((error) => {
        dispatch({
          type: DISPLAY_HOTEL_FAIL,
          payload: error,
        });
      });
  };
};

//****************************************************************************************** */ 
  
   
export const displayHotelsById = (hotel_id) => {
  return (dispatch) => {
    dispatch({
      type: DISPLAY_HOTEL_ID_REQUEST,
    });
    
    
    const url = 'http://localhost:7878/items/itemsbyhotel/'+hotel_id;
  

    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: DISPLAY_HOTEL_ID_SUCCESS,
          payload: response,
        });
      })

      .catch((error) => {
        dispatch({
          type: DISPLAY_HOTEL_ID_FAIL,
          payload: error,
        });
      });
  };
};




/**********************************************Update Profile*************************************************************/

/*********************************Update Profile*************************************** */

export const UpdateProfile = (userId,name,address,phoneNumber) => {

  return (dispatch) => {
    dispatch({

      type: UPDATE_PROFILE_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
       // token: sessionStorage["token"], ///IMP
      },
    };
    const body = {
      userId,name,address,phoneNumber
      
    };
    const url = "http://localhost:7870/users/edit/"+userId;
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({

          type:UPDATE_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({

          type: UPDATE_PROFILE_FAIL,
          payload: error,
        });
      });
  };
};


/*******************************************************Update Password********************************************************************/

/*******************************Update  Password******************************************/

export const updatePassword = (userId,password) => {
  return (dispatch) => {
    dispatch({
      type:UPDATE_PASSWORD_REQUEST,
    });
    const header = {
      headers: {
        "Content-Type": "application/json",
        //token: sessionStorage["token"], ///IMP
      },
    };
    const body = {
     
       password,
    };
    const url = "http://localhost:7878/users/updatepwd/"+userId;
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: UPDATE_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PASSWORD_FAIL,
          payload: error,
        });
      });
  };
};