import './App.css';
import { BackTop } from 'antd';
// import 'antd/dist/antd.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Membership from './pages/membership/Membership';
// import FormPage from './pages/forrm/FormPage';
import Process from './components/process/Process';
import Footer from './components/footer/Footer';
import Createprofile from './pages/createprofile/Createprofile';


function App() {
  return (
   <div> 
    <BackTop />
    <NavBar/>
    {/* routing of different pages */}
     <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Membership" exact element={<Membership />} />
        {/* <Route path="/FormPage" exact element={<FormPage/>}/> */}
        <Route path="/Createprofile" exact element={<Createprofile/>}/>
        <Route path="/Process" exact element={<Process />} />
        <Route path="/contact" exact element={<Contact />} />
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
