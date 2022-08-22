import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
   <div> 
    <NavBar/>
    {/* routing of different pages */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </div>
  );
}

export default App;
