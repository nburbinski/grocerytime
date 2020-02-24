import React from "react";

const Recipe = ({ recipes, recipe, setRecipes }) => {
  const handleDelete = () => {
    setRecipes(recipes.filter(r => r.name !== recipe.name));
  };
  return (
    <tr>
      <td></td>
      <td>{recipe.name}</td>
      <td>{recipe.ingredients}</td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};

export default Recipe;
