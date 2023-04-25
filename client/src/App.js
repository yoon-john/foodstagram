import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import MainPage from "./Components/MainPage";
import LandingPage from "./Components/LandingPage";
import {Profile} from './Components/Profile';
import React, { useState } from "react";
import randomRecipes from'./randomRecipes.json';
import Instructions from './Components/Instructions';
import SearchBar from './Components/SearchBar';
import RecipeGrid from './Components/RecipeGrid';


function App() {
  
  return (
    <BrowserRouter>
    <SearchBar></SearchBar>
    <RecipeGrid />
      <div>
        {/* The React Router that makes the HTML above work */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipes" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
