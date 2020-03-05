import React from "react";

const Recipe = ({ recipe, handleDelete }) => {
  return (
    <tr>
      <td></td>
      <td>{recipe.name}</td>
      <td className="recipe-ingredients">{recipe.ingredients.join(", ")}</td>
      <td>
        <button onClick={() => handleDelete(recipe.name)}>X</button>
      </td>
    </tr>
  );
};

export default Recipe;
