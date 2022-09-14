// -- React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// -- Components & PAGES
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AboutPage  from "./Pages/AboutPage"  
import Footer from "./Components/Footer/footer";

// -- Styling
import "./App.css";
import Cards from "./Components/Cards/Cards";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/cards' element={<Cards/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
