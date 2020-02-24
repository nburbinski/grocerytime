import React from "react";

const Ingredient = ({ ingredients, ingredient, setIngredients }) => {
  const handleDelete = () => {
    setIngredients(ingredients.filter(g => g.name !== ingredient.name));
  };
  return (
    <tr>
      <td></td>
      <td>{ingredient.name}</td>
      <td>
        {ingredient.amount}
        {ingredient.measurement}
      </td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};

export default Ingredient;
