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
        </Switch>
      </Router>
      {/* <PizzaList/> */}
    </div>
  );
}

export default App;
