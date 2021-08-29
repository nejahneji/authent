import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={SignUp}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
