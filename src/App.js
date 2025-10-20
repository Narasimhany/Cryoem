import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import HomeHero from "./components/HomeHero";
import HomeCTA from "./components/HomeCTA";
import HomeServices from "./components/HomeServices";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        
        <Route path="/"
          element={
            <>
              <HomeHero />
              <HomeServices />
              <HomeCTA />
            </>
          } />
        
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
