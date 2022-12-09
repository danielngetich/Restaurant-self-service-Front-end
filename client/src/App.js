import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Food from "./components/Food";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import CustomerMenu from "./components/CustomerMenu";
import TableNum from "./components/TableNum";
function App() {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menus")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu menu={menu}/>} />
          <Route path="/addfood" element={<AddFood menu={menu}/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/food" element={<Food />} />
          <Route path="/customermenu" element={<CustomerMenu menu={menu} />} />
          <Route path="/table" element={<TableNum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
