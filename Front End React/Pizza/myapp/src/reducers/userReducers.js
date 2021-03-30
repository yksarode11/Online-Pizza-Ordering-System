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



} from "../constants/userConstants.js";
export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

 

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const displayHotelReducer = (state = {}, action) => {
  switch (action.type) {
    case  DISPLAY_HOTEL_REQUEST :
      return { loading: true };
    case DISPLAY_HOTEL_SUCCESS:
      return { loading: false, response: action.payload };
    case DISPLAY_HOTEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};






export const displayHotelByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case  DISPLAY_HOTEL_ID_REQUEST :
      return { loading: true };
    case DISPLAY_HOTEL_ID_SUCCESS:
      return { loading: false, response: action.payload };
    case DISPLAY_HOTEL_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



/*************************************Update Profile************************************************** */


export const updateProfileReducer = (state = {}, action) => {

  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, response: action.payload };
    case UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


/*****************************************************************************************************************/




//**************************Update Password*************************************//


export const updatePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case UPDATE_PASSWORD_SUCCESS :
      return { loading: false, response: action.payload };
    case UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};