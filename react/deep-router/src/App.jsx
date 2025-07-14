import { useState, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
import Navigation from "./components/Navigation";
import ProtectRoute from "./pages/ProtectRoute";

// 函数 路由 -> Route
// 懒加载
const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const NoFound = lazy(()=>import('./pages/NotFound'))
const Pay = lazy(()=>import('./pages/Pay'))
const Login = lazy(()=>import('./pages/Login'))

function App() {
  return (
    <>
      <div>
        <Router>
          <Navigation></Navigation>
          <Suspense fallback={<div>加载中...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* 鉴权 */}
              <Route path="/pay" element={
                <ProtectRoute>
                  <Pay />
                </ProtectRoute>
                } />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
