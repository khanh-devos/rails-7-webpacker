import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Greeting from "./Greeting";


function App() {
  return <div>
    <BrowserRouter>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/greeting">Greeting</NavLink>

      <Routes>
        <Route path="/"/>
        <Route path="/greeting" element={<Greeting />} />

      </Routes>
    
    </BrowserRouter>

  </div>
}

export default App;