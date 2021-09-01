
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

import Developerspage from './components/Developerspage/Developerspage';

const dotenv=require('dotenv');
dotenv.config();
function App() {
  return (
    <div className='App'>
    <Router  >
    <Switch basename={process.env.REACT_APP_BASENAME}>
     <Route exact path='/:github_id'>
           <Developerspage />
        </Route>
    <Route exact path='/'>
          <Homepage />
    </Route>
      </Switch>
      </Router>
      </div> 
     );
 

}

export default App;
