import React from "react";
import Navbar from './components/Nav Bar/navbar';
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import Contacts from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
