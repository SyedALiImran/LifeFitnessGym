// -- React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// -- Components & PAGES
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AboutPage  from "./Pages/AboutPage"  

// -- Styling
import "./App.css";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
