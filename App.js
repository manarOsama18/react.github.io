import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import{BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
    <>

<Router><Navbar/><Route exact path="/">
<Home/>
</Route>
<Route  path="/About">
<About/>
</Route><Footer/>
</Router>

</>
 
 );
}

export default App;
