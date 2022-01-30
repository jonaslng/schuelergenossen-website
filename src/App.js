import { useState } from "react";
import './App.css';
import { IconButton, Menu } from "@mui/material"
import React from "react";
import Start from "./Start"
import Shop from "./Shop"
import Potato from "./Potato"
import Team from "./Team"
import Press from "./Press"

function App() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  const [site, setSite] = useState(1);
  const content = [
    <Start setSite={setSite}/>,
    <Shop />,
    <Potato />,
    <Team />,
    <Press />
  ]

  return (
    <div className="App">
      <div className="navbar-web">
        <div onClick={() => setSite(1)}><p>Home</p></div>
        <div onClick={() => setSite(2)}><p>Shop</p></div>
        <div onClick={() => setSite(3)}><p>Potato Company</p></div>
        <div onClick={() => setSite(4)}><p>Team</p></div>
        <div onClick={() => setSite(5)}><p>Presse</p></div>
      </div>
      <div className='navbar-mobile'>
          <div id="mySidenav" className="sidenav-mobile">
            <p className="closebtn" onClick={() => closeNav()}>&times;</p>
            <p onClick={() => setSite(1)}>Home</p>
            <p onClick={() => setSite(2)}>Shop</p>
            <p onClick={() => setSite(3)}>Potato Company</p>
            <p onClick={() => setSite(4)}>Team</p>
            <p onClick={() => setSite(5)}>Presse</p>
        </div>
        <span className='material-icons md-36 md-dark' onClick={() => openNav()} color='primary'>menu</span>
      </div>
      {content[site-1]}
    </div>
  );
}

export default App;