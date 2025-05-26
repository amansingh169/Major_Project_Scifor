import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Discover from "./pages/store/Discover";
import Browse from "./pages/store/Browse";
import News from "./pages/store/News";
import Wishlist from "./pages/store/Wishlist";
import Cart from "./pages/store/Cart";
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
            <Route path="/store/discover" element={<Discover />} />
            <Route path="/store/browse" element={<Browse />} />
            <Route path="/store/news" element={<News />} />
            <Route path="/store/wishlist" element={<Wishlist />} />
            <Route path="/store/cart" element={<Cart />} />
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
