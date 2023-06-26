import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import Update from "./components/Update/Update";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route exact path="/" element={<Home/>} />
            <Route path = "/update" element={<Update/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
