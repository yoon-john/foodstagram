import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './../App.css';
import RandomRecipes from './../randomRecipes.json'

function RecipeGrid(recipes, shouldSave) {
  if (recipes.recipes){
  return (
        <Container fluid="md" >
        <Row md="4">
        <>
        {recipes.recipes.map((r) => (
          <Col>
          <RecipeCard 
            sourceUrl={r.sourceUrl}
            image={r.image}
            dishType={r.dishTypes[0] && r.dishTypes[0].toUpperCase()} 
            title={r.title}
            readyInMinutes={r.readyInMinutes}
            aggregateLikes={r.aggregateLikes}
            analyzedInstructions={
              r.analyzedInstructions[0] === undefined
              ? ["No instructions given"]
              : r.analyzedInstructions[0].steps}
            extendedIngredients={r.extendedIngredients}
            id = {r.id}
            shouldSave={shouldSave}      
            >
          </RecipeCard>
          </Col>
        ))}
      </>
      </Row>
      </Container>
    );
  }
}
export default RecipeGrid;