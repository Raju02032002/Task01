import React from "react";
import Navbar from "./Component/Navbar"; 
import HeroSection from "./Component/HeroSection";
import Company from "./Component/Company";
import Features from "./Component/Features";


const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component */}
      <HeroSection/>
      {/* <Company/> */}
      <Features/>
     
    </div>
  );
};

export default App;
