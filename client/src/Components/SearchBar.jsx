import React, { useState } from "react";
import './../App.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RecipeGrid from './RecipeGrid'


function SearchBar() {
    let [recipes, setRecipes] = useState()
    const load_recipe = (e) => {
      e.preventDefault();
      let ingredients = e.target[0].value;
      ingredients = ingredients.replaceAll(" ", "");
      ingredients = ingredients.replaceAll(",", ",+");  
      axios.get(`http://localhost:4000/searched-recipes?ingredients=${ingredients}`, {timeout: 10 * 1000})
      .then((res) => {
        setRecipes(res.data)
        console.log(recipes)
      }, (err) => {
          console.log("Error: ", err);
    });
}
    return (
      <>
        <Form onSubmit={load_recipe}>
        <Form.Group className="mb-3">
          <Form.Label>Search Bar</Form.Label>
          <Form.Control
          type="text" 
          placeholder="Feed us your ingredients..." 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <RecipeGrid recipes={recipes}></RecipeGrid>
      </>
    );
  }

export default SearchBar;