import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SingnIn from "./components/SingnIn";
// import PizzaList from './components/adminDashbord/pizzaList/PizzaList'
import UserDashbord from "./components/userDashbord/UserDashbord";
import AdminDashbord from "./components/adminDashbord/AdminDashbord";
import Test from "./components/Test";
import { useSelector } from "react-redux";
import Commands from "./components/userDashbord/commands/Commands";
import AboutUs from "./components/userDashbord/aboutUs/AboutUs";

function App() {
  const { isAuth } = useSelector((state) => state.userReducer);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SingnIn} />
          <Route path="/login" exact component={SignUp} />
          <Route path="/UserDashbord" exact component={UserDashbord} />
          <Route path="/AdminDashbord" exact component={AdminDashbord} />
          <Route path="/Test" exact component={Test} />
          <Route path='/Command' exact component={Commands} />
          <Route path='/about' exact component={AboutUs}/>
        </Switch>
      </Router>
      {/* <PizzaList/> */}
    </div>
  );
}

export default App;
