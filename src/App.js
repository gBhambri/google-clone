import './App.css';
import Home from './Components/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
             <SearchPage></SearchPage>
          </Route>
          <Route path='/'>
             <Home></Home>
          </Route>  
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
