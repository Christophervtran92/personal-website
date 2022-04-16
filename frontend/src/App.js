import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/works/Works';
import GamesList from './components/gamesList/GamesList';
//import UnderConstruction from './components/underConstruction/UnderConstruction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/games" element={<GamesList />} />
      </Routes>
    </Router>
  );
}

export default App;
