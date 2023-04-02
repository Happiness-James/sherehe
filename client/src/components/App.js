import '../App.css';
import Home from './Home';
import Create from './Create';
import Login from './Login';
import SignUp from './SignUp';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home user={user} onLogout={handleLogout}/>} />
      <Route path="create" element={<Create/>} />
      <Route path="login" element={<Login onLogin={handleLogin}/>} />
      <Route path="sign" element={<SignUp/>} />





      </Routes>

    </div>
  );
}

export default App;
