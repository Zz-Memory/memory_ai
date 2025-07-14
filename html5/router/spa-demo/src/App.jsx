import { useState } from "react";
import "./App.css";
import {
  BrowserRouter, // 前端路由二选一
  Routes,
  Route,
  Link // SPA Link 代替 a 超链接
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
