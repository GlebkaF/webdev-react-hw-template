import React from "react";
import Bar from "./components/Bar";
import "./App.css";
import Menu from "./components/Menu";
import Player from "./components/Player";
import SideBar from "./components/Sidebar/SideBar";
import Search from "./components/Search";
import Footer from "./components/footer";
import { Filter } from "./components/filter/filter";

function App() {
  return (
    <div>
      <Menu />
      <Search />
      <Player />
      <SideBar />
      <Bar />
      <Footer />
      <Filter />
    </div>
  );
}

export default App;
