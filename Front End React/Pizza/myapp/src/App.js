import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupScreen from "./screen/SignupScreen";
import customerScreen from './screen/customer';
import SigninScreen from "./screen/SigninScreen";
//import admin from "./screen/admin";
import adminScreen from "./screen/admin";
import owner from "./screen/owner";
import home from "./screen/home";
import footer from "./screen/Footer";
import AboutScreen from "./screen/about";
import DisplayHotelScreen from './screen/DisplayHotelScreen'
import ADDScreen from "./screen/ADDSceen";
import updateProfileScreen from "./screen/updateProfileScreen";
import ChangeUserPasswordScreen from "./screen/changePasswordScreen"
/***********************************Screens******************************** */

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={home} /> 
          <Route exact path="/about" component={AboutScreen} /> 
          <Route exact path="/signin" component={SigninScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/customer" component={customerScreen} />
          <Route path="/admin" component={adminScreen} />
          <Route path="/owner" component={owner} />
          <Route path="/displayhotel" component={DisplayHotelScreen} />
          <Route path="/cart" component={ADDScreen} />
          <Route path="/updateprofile" component={updateProfileScreen} />
          <Route path="/changepassword" component={ChangeUserPasswordScreen} />

{/* ********************ADMIN*********************************************** */}
         

{/* ***********************Receptionist************************************ */}
         
 
        </Switch>
      </Router>
    </div>
  );
}

export default App;


