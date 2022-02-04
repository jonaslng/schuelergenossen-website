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
      
    </div>
  );
}

export default App;