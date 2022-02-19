import { useState } from "react";
import "./App.css";
import { IconButton } from "@mui/material";
import React from "react";
import Start from "./Start";
import Shop from "./Shop";
import Potato from "./Potato";
import Team from "./Team";
import Press from "./Press";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";

function App() {
  const [site, setSite] = useState(0);
  const [theme, setTheme] = useState(1); /* 1=DARK 0=WHITE */
  const content = [
    <Start setSite={setSite} />,
    <Shop />,
    <Potato />,
    <Team />,
    <Press />,
  ];

  return (
    <div className="App">
      <div className="navbar">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=380x10000:format=png/path/s5716ff8e3a6d452a/image/i047f7ead75260886/version/1455016429/image.png"
          className="nav-logo"
        />

        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="menu-items">
          <p className="nav-text-mobile" onClick={() => setSite(0)}>
            Start
          </p>
          <p className="nav-text-mobile" onClick={() => setSite(1)}>
            Shop
          </p>
          <p className="nav-text-mobile" onClick={() => setSite(2)}>
            Potato Company
          </p>
          <p className="nav-text-mobile" onClick={() => setSite(3)}>
            Team
          </p>
          <p className="nav-text-mobile" onClick={() => setSite(4)}>
            Presse
          </p>
        </div>

        <p className="nav-text" onClick={() => setSite(0)}>
          Start
        </p>
        <p className="nav-text" onClick={() => setSite(1)}>
          Shop
        </p>
        <p className="nav-text" onClick={() => setSite(2)}>
          Potato Company
        </p>
        <p className="nav-text" onClick={() => setSite(3)}>
          Team
        </p>
        <p className="nav-text" onClick={() => setSite(4)}>
          Presse
        </p>
      </div>
      <div className="content">{content[site]}</div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
