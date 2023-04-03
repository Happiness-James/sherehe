import '../App.css';
import Home from './Home';
import Create from './Create';
import Login from './Login';
import SignUp from './SignUp';
import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";



function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<Create/>} />
      <Route path="login" element={<Login/>} />
      <Route path="sign" element={<SignUp/>} />





      </Routes>

    </div>
  );
}

export default App;
