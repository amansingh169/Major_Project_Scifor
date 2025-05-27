import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Discover from "./pages/Discover";
import Browse from "./pages/Browse";
import News from "./pages/News";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Library from "./pages/Library";
import Unity from "./pages/Unity";

function App() {
  return (
    <Router>
      <div className="wrapper row container-fluid">
        <Sidebar />
        <div className="main col-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/news" element={<News />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/library" element={<Library />} />
            <Route path="/unity" element={<Unity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
