import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  userSignupReducer,
  userSigninReducer,
  displayHotelReducer,
  displayHotelByIdReducer,
  updateProfileReducer,
  updatePasswordReducer,

} from "./reducers/userReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  displayhotel:displayHotelReducer,
   displayHotelByIDS: displayHotelByIdReducer,
   updateprofile:updateProfileReducer,
   updatepassword:updatePasswordReducer,
  
  
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
