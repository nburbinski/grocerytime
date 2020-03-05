import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Recipe from "./Recipe";
import SearchResults from "./SearchResults";

const RecipeList = props => {
  const [grocery, setGrocery] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState(["test", "test"]);

  const [recipeSearch, setRecipeSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Delete Grocery
  const handleGroceryDelete = name => {
    props.store.dispatch({
      type: "DEL_RECIPE",
      data: name
    });
  };

  // Add Grocery
  const add = () => {
    if (grocery === "") return;

    const newRecipe = {
      name: grocery,
      ingredients: recipeIngredients
    };

    props.store.dispatch({
      type: "ON",
      data: {
        content: `${grocery} added`
      }
    });

    props.store.dispatch({
      type: "ADD_RECIPE",
      data: newRecipe
    });
    setGrocery("");
  };

  const handleSearch = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/search/?apiKey=b2956dde1fd04222977b0a3bdf9768ac&query=${recipeSearch}`
    );

    if (response.data.results.length === 0) {
      setSearchResults(["None Found"]);
      setRecipeSearch("");
    } else {
      setSearchResults(response.data.results);
      setRecipeSearch("");
    }
  };

  return (
    <div className="container">
      <div>
        <input onChange={({ target }) => setRecipeSearch(target.value)}></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      <h4>Search for a new Recipe!</h4>
      <SearchResults results={searchResults} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Recipe Name</th>
            <th>Ingredients</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map(recipe => (
            <Recipe recipe={recipe} handleDelete={handleGroceryDelete} />
          ))}
          <tr>
            <td>
              <button onClick={add}>+</button>
            </td>
            <input
              value={grocery}
              onChange={({ target }) => setGrocery(target.value)}
            ></input>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

const connectedRecipes = connect(mapStateToProps)(RecipeList);

export default connectedRecipes;
