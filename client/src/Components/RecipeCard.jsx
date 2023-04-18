import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './../App.css';
import TimerImg from './../timer.svg';
import HeartImg from './../heart.svg';
import SaveImg from './../save.svg';

function RecipeCard({sourceUrl, image, dishType="RECIPE", title, readyInMinutes, aggregateLikes, }) {
    return (
      <a id='RecipeCardLink' href={sourceUrl} style={{textDecoration: "none", color: "inherit"}}>
        <Card as='RecipeCard' style={{ width: "300px", height: "400px", borderRadius:0}}>
          <Card.Img variant="top" alt={title} src={image} style={{borderRadius:0}}/> {/* Replace with "image" from api */}
          <Card.Body>
            <Card.Subtitle as="subtext" margin= "10px">{dishType}</Card.Subtitle> {/* Replace with "dishType" from api */}
            <div></div>
            <Card.Title as="recipeTitle" margin= "10px">{title}</Card.Title> {/* Replace with "title" from api */}
            <Container fluid>
              <Row id="bottomBar">
                <Col id="bottomBarLeft">
                  <img alt="timer svg" src={TimerImg} width="20" verticalAlign="middle"/>
                  {readyInMinutes} mins 
                </Col>
                <Col id="bottomBarRight">
                  <img alt="heart svg" src={HeartImg} width="20"/>
                  {aggregateLikes}
                  <img alt="bookmark svg" src={SaveImg} height="20"/>
                </Col>
              </Row>
            </Container>
          </Card.Body>

        </Card>
      </a>
    );
  }
  
export default RecipeCard;