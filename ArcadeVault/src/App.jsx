import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import MainLayout from "./layouts/MainLayout";

import Discover from "./pages/Discover";
import Browse from "./pages/Browse";
import News from "./pages/News";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Library from "./pages/Library";
import Unity from "./pages/Unity";
import Settings from "./pages/Settings";
import GameDetails from "./pages/GameDetails";
import SearchResults from "./pages/SearchResults";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <Router>
      <div className="wrapper container-fluid px-2">
        <Sidebar />
        <div className="main h-auto">
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Discover />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/news" element={<News />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/library" element={<Library />} />
              <Route path="/library/:collectionId" element={<Library />} />
              <Route path="/unity" element={<Unity />} />
              <Route path="/game/:id" element={<GameDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
