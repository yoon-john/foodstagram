import React from 'react'
import { useState } from 'react';

function RecipeModal(props) {
    
    console.log(props)
    return (
        <div className="recipeModalBackground">
            <button onClick={props.closeModal}>X</button>
            <div className="recipeModalContainer">
                <div className='Title'>
                    <h1> Name: {props.name} </h1>
                </div>
                <div className='Body'>
                    <h1>Image:</h1>
                    <img src={props.image} alt={props.name}></img>

                </div>
                <div className='Footer'>
                    <button onClick={props.closeModal}>Exit</button>
                    
                </div>
            </div>

        </div>

  )
}

export default RecipeModal