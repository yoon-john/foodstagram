import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar'
import RecipeGrid from './RecipeGrid';

function MainPage() {
    return (
        <div style={{backgrondColor:"#FFFCF3"}}>
        <NavBar />
        <SearchBar />
        </div>
    );
}

export default MainPage;
