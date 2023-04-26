import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar'
import RecipeGrid from './RecipeGrid';
import './../App.css'

function ResultPage() {
    return (
        <div style={{backgrondColor:"#FFFCF3"}}>
        <NavBar searchbar={true}/>
        </div>
    );
}

export default ResultPage;
