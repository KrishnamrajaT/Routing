import "./styles.css";
import react from "react";
import nav from "./pages/nav";
import Nav from "./pages/nav";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import About from "./pages/about";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
