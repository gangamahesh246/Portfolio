import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Intro from './port/intro';
import Navbar from './port/navbar';
import Footer from './port/footer';
import About from './port/about';
import Projects from './port/projects';
import ContactMe from './port/contact';


function AppLayout() {

  const location = useLocation();
  return (  
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      {!["/projects", "/contact"].includes(location.pathname) && <Footer />}
      </>
  )
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App;
