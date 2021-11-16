import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="container">
              <Routes>
                  <Route path="/" exact element={<Home />}> </Route>
                  <Route path="/about" exact element={<About />}> </Route>
                  <Route path="/contact" exact element={<Contact />}> </Route>
              </Routes>
      </div>
      
      </Router>
    </div>
  );
}

export default App;
