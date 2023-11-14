import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import Temp from './pages/Temp';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route Component={Home} path="/"/>
          <Route Component={Temp} path="/temp" />
          <Route Component={Map} path="/map" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
