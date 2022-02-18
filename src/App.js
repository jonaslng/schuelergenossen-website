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
      <div className="footer">
        <div className="footer-items">
          <div className="impressum">
            <a>Impressum</a>
            <br />
            <a>Datenschutzerklärung</a>
            <br />
            <a>Liefer- und Zahlungsbedingungen</a>
            <br />
            <a>Cookie-Richtlinie</a>
          </div>
          <img
            className="prize"
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/id8bc6088024ca222/version/1455017898/image.png"
          />
          <img
            className="prize"
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/i926460b117a009b4/version/1455017895/image.jpg"
          />
          <img
            className="prize"
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=192x10000:format=jpg/path/s5716ff8e3a6d452a/image/i2a947f03d33e9fc5/version/1572624098/image.jpg"
          />
          <img
            className="prize"
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/id39c7394a52c8d70/version/1455017893/image.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
