import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Iphone from './pages/ipadpro';
import Ipadpro from './pages/ipadpro';
import Ipadmini from './pages/ipadmini';
import Flip from './pages/flip';
import Rog from './pages/rog';
import Poco from './pages/poco';
import Oneplus from './pages/oneplus';
import Oppo from './pages/oppo';
import S22 from './pages/s22';
import I13 from './pages/13';
import iphone from './pages/iphone';

function App() {
  return  (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/iphone.html" element={<Iphone/>}/>
        <Route path="/ipadpro.html" element={<Ipadpro/>}/>
        <Route path="/ipadmini.html" element={<Ipadmini/>}/>
        <Route path="/ipadmini.html" element={<Ipadmini/>}/>
        <Route path="/galaxyflip.html" element={<Flip/>}/>
        <Route path="/oppo.html" element={<Oppo/>}/>
        <Route path="/ROG.html" element={<Rog/>}/>
        <Route path="/Poco.html" element={<Poco/>}/>
        <Route path="/ONEplus.html" element={<Oneplus/>}/>
        <Route path="/S22.html" element={<S22/>}/>
        <Route path="/13.html" element={<I13/>}/>
      </Routes>
    </Router>
    )
}

export default App;
