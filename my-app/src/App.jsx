import React from "react";
import Bar from "./components/Bar/Bar";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Player from "./components/Player/Player";
import SideBar from "./components/Sidebar/SideBar";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/footer"
import Filter from "./components/filter/filter";

function App() {
  return (
    <div>
      <Menu />
    
      <Search />

      <Filter />
      <Player /> 
      <SideBar />
      <Bar />
      <Footer />
      
    </div>
  );
}

export default App;
