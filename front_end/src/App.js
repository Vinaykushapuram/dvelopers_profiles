import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/frontpagefooter';
import Card from './components/Card';
import Search from './components/searchbar'
import Developers from './components/fecthdevelopers';
import Adddevloper from './components/adddeveloper'
function App() {
  return (
    <div className='front page'>
    <Header />
    <Search />
    <Developers />
    <Adddevloper />
    <Footer />
    </div>
  );
}

export default App;
