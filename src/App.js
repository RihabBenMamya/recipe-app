import './App.css';
import Navbar from "./Layouts/Navbar"
import Footer from './Layouts/Footer';
import Home from './Home';
import RecipeDetails from './Components/RecipeDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

const App=()=> {
 
  
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <header className="App-header">
    
      
    </header>
    <div>
    <Router>
    <Switch>
    
    <Route path="/" exact component={Home}/>
    
    <Route path={`/:id`} component={RecipeDetails}/>
    
    </Switch>
    </Router>  
    </div>
     <div className="footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
