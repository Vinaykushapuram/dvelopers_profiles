import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
const dotenv=require('dotenv');
dotenv.config();
import Header from './components/header';
import Footer from './components/frontpagefooter';
import Card from './components/Card';
import Search from './components/searchbar'
import Developers from './components/fecthdevelopers';
import Adddevloper from './components/adddeveloper';
import Developerspage from './components/developerspage';
import Adddev from './components/Adddevtodb';
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
