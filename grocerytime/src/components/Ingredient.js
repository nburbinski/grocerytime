import React from "react";
import axios from "axios";

const Ingredient = ({ ingredient, handleDelete }) => {
  const handleSearch = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/search?query=${ingredient.name}`
    );
  };
  return (
    <tr className="test">
      <td className="btn-search">
        <button onClick={handleSearch}>Search</button>
      </td>
      <td>{ingredient.name}</td>
      <td>
        {ingredient.amount} {ingredient.measurement}
      </td>
      <td>
        <button
          className="btn-delete"
          onClick={() => handleDelete(ingredient.name)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default Ingredient;
