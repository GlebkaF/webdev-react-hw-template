import React from "react";
import Bar from "./components/Bar";
import "./App.css";
import Menu from "./components/Menu";
import Player from "./components/Player";
import SideBar from "./components/Sidebar/SideBar";
import Search from "./components/Search";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Menu />
      <Search />
      <Player />
      <SideBar />
      <Bar />
      <Footer />
    </div>
  );
}

export default App;
