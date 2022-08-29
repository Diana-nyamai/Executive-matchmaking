import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Membership from './pages/Membership';
import Process from './pages/Process';

function App() {
  return (
   <div> 
    <NavBar/>
    {/* routing of different pages */}
     <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Membership" exact element={<Membership />} />
        <Route path="/Process" exact element={<Process />} />
        <Route path="/contact" exact element={<Contact />} />
    </Routes>
   </div>
  );
}

export default App;
