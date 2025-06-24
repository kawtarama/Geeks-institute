import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary';
import PostList from './components/PostList';

// Composants
const HomeScreen = () => <h1> Home</h1>;

const ProfileScreen = () => <h1> Profile</h1>;

const ShopScreen = () => {
  throw new Error("Intentional error in Shop screen!");
  // return <h1>Sho                                                                                           p</h1>; // ne sera jamais affiché
};

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar container mx-auto flex justify-between items-center">
        <a className="navbar-brand " href="/">Mon App</a>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>} />

          <Route path="/profile" element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>} />

          <Route path="/shop" element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>} />
        </Routes>
      </div>


       <div>
      <PostList />
    </div>
    </BrowserRouter>

    
  );
};

export default App;
