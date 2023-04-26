import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar'
import RecipeGrid from './RecipeGrid';
import axios from 'axios';
import './../App.css'

function SavedRecipes() {
    // const [recipes, setRecipes] = useState()
    // const load_recipe = () => {
    // let allIDs
    // console.log("working")
    // const token = localStorage.getItem("token");
    // axios
    // .get("http://localhost:4000/user/recipes", { headers: { token: token } })
    // .then((res) => {
    // allIDs = res.data;
    // console.log("recipes in SavedRecipes.jsx:");
    // console.log(allIDs);
    // })
    // .catch((error) => console.log(error))
    // .then(() => {
    //     allIDs = allIDs.map(String).join(',');
    //     console.log(allIDs)
    //     axios.get(`http://localhost:4000/saved-recipes?ids=${allIDs}`, {timeout: 10 * 1000})
    //     .then((res) => {
    //         setRecipes(res.data)
    //         console.log(recipes)
    //         }, (err) => {
    //             console.log("Error: ", err);
    //     }
    // )}
    // );
    // }
    const apiKey = "f25376cbe0d543038f73fcd43b5be7a0";
    let [recipes, setRecipes] = useState();
    const load_recipe = () => {
      let recipeIds;
      console.log("workinggg");
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:4000/user/recipes", { headers: { token: token } })
        .then((res) => {
          recipeIds = res.data;
          console.log("recipes in SavedRecipes.jsx:");
          console.log(recipeIds);
        })
        .catch((error) => console.log(error))
        .then(() => {
          console.log("ayyyy");
          console.log(recipeIds);
          let recipeIdString = recipeIds.map(String).join(",");
          console.log(recipeIdString);
          axios
            .get(
                `http://localhost:4000/saved-recipes?allIDs=${recipeIdString}`,
              {
                timeout: 10 * 1000,
              }
            )
            .then(
              (res) => {
                setRecipes(res.data);
              },
              (err) => {
                console.log("Error: ", err);
              }
            );
        });
    };
  
    if (recipes === undefined) {
        return <div onLoad={load_recipe()}>Loading...</div>;
      } else {
        return (
          <div>
            <NavBar searchbar={false} />
            <RecipeGrid recipes={recipes} />
          </div>
        );
      }

//     return (
//         <div style={{backgrondColor:"#FFFCF3"}}>
//         <NavBar searchbar={false}/>
//         <RecipeGrid recipes={recipes}/>
//         </div>
//     );
}

export default SavedRecipes;
