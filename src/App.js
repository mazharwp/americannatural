import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import AboutLocations from "./pages/AboutLocations";
import CareerPage from "./pages/Career";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import OurStory from "./pages/OurStory";
import QualitySafety from "./pages/QualitySafety";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/about" element={<AboutLocations />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/quality" element={<QualitySafety />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
