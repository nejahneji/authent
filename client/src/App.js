import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingnIn from './components/SingnIn';
// import PizzaList from './components/adminDashbord/pizzaList/PizzaList'
import UserDashbord from './components/userDashbord/UserDashbord';
import AdminDashbord from './components/adminDashbord/AdminDashbord';






function App() {
  return (
    <div className="App">
     
      <Router>
      <Switch>
        
        <Route path='/' exact component={SingnIn}/>
        <Route path='/login' exact component={SignUp}/>
        <Route path='/UserDashbord' component={UserDashbord}/>
        <Route path='/AdminDashbord' component={AdminDashbord} />
      </Switch>
      </Router>
      {/* <PizzaList/> */}
    </div>
  );
}

export default App;
