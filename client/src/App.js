import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingnIn from './components/SingnIn';
import PizzaList from './components/adminDashbord/pizzaList/PizzaList'






function App() {
  return (
    <div className="App">
     
      <Router>
      <Switch>
        <Route path='/' exact component={SingnIn}/>
        <Route path='/login' exact component={SignUp}/>
      </Switch>
      </Router>
      <PizzaList/>
    </div>
  );
}

export default App;
