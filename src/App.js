import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import First_page from "./components/First-page";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<First_page/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
    </Router>
  );
}

export default App;
