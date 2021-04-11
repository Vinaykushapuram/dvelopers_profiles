import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/header';

import Developerspage from './components/developerspage';

const dotenv=require('dotenv');
dotenv.config();
function App() {
  return (
    <Router  >
    <switch basename={process.env.REACT_APP_BASENAME}>
     <Route exact path='/:github_id'>
           <Developerspage />
        </Route>
    <Route exact path='/'>
          <Header />
    </Route>
      </switch>
      </Router>
      
     );
 

}

export default App;
