import { useState } from 'react';
import './App.css';
import {IconButton,Menu} from "@mui/material"

function App() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className="App">
      <div className="navbar-web">
        <div><p>Home</p></div>
        <div><p>Shop</p></div>
        <div><p>Potato Company</p></div>
        <div><p>Team</p></div>
        <div><p>Presse</p></div>
      </div>
      <div className='navbar-mobile'>
          <div id="mySidenav" className="sidenav-mobile">
            <p class="closebtn" onClick={() => closeNav()}>&times;</p>
            <p>Home</p>
            <p>Shop</p>
            <p>Potato Company</p>
            <p>Team</p>
            <p>Presse</p>
        </div>
        <span className='material-icons md-36 md-dark' onClick={() => openNav()} color='primary'>menu</span>
      </div>
    </div>
  );
}

export default App;