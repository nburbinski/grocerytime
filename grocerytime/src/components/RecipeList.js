import React, { useState } from "react";
import Recipe from "./Recipe";

const RecipeList = ({ ingredients }) => {
  const [grocery, setGrocery] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipeIngredient, setRecipeIngredient] = useState(ingredients);

  const [recipes, setRecipes] = useState([
    { name: "Chicken Alfredo", ingredients: ["chicken, alfredo"] },
    { name: "Bulgogi", ingredients: ["chicken, miso"] },
    { name: "Tikka Masala", ingredients: ["chicken, sauce"] }
  ]);

  // Add Grocery
  const add = () => {
    if (grocery === "") return;

    const newRecipe = {
      name: grocery,
      ingredients: ingredients
    };

    setRecipes(recipes.concat({ ...newRecipe }));
    setGrocery("");
  };
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Recipe Name</th>
            <th>Ingredient</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => {
            return (
              <Recipe
                key={recipes.indexOf(recipe)}
                recipes={recipes}
                recipe={recipe}
                setRecipes={setRecipes}
              />
            );
          })}
          <tr>
            <td>
              <button onClick={add}>+</button>
            </td>
            <td>
              <input
                value={grocery}
                onChange={({ target }) => setGrocery(target.value)}
              ></input>
            </td>
            <td>
              <select
                multiple={true}
                value={recipeIngredient}
                onChange={({ target }) => setRecipeIngredient(target.value)}
              >
                {ingredients.map(i => (
                  <option key={ingredients.indexOf(i)} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
