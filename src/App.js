import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route exact path='/home'>
           <Home></Home>
         </Route>
         <Route exact path='/appoinment'>
           <Appointment></Appointment>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
