import React from 'react';
import RecipeCard from './RecipeCard';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './../App.css';
import randomRecipes from'../randomRecipes.json'


function RecipeGrid() {
    return (
        <Container fluid="md">
        <Row>
        <>
        {randomRecipes.recipes.map((r) => (
          <Col>
          <RecipeCard 
            sourceUrl={r.sourceUrl}
            image={r.image} 
            dishType={r.dishTypes[0] && r.dishTypes[0].toUpperCase()} 
            title={r.title}
            readyInMinutes={r.readyInMinutes}
            aggregateLikes={r.aggregateLikes}>
          </RecipeCard>
          </Col>
        ))}
      </>
      </Row>
      </Container>
    );
  }
  
export default RecipeGrid;