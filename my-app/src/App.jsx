import React from "react";
import Bar from "./components/Bar";
import './App.css';
import Menu from "./components/Menu";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";



function App() {
  return (
    <div> 
        <Bar />
        <Menu />
        <Player />
        <Sidebar />
        
    </div>
  );
}

export default App;
