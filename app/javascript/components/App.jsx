import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { fetchGreeting } from "../redux/greetingSlice";
import Greeting from "./Greeting";


function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.greeting.isLoading );


  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) return (<h3>Loading</h3>)

  return <div>
    <BrowserRouter>
      <div className="routes-container">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/greeting">Greeting</NavLink>

      </div>
      <Routes>
        <Route path="/"/>
        <Route path="/greeting" element={<Greeting />} />

      </Routes>
    
    </BrowserRouter>

  </div>
}

export default App;