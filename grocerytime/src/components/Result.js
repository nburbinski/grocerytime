import React, { useState } from "react";
import axios from "axios";

const Result = ({ result }) => {
  const [ingredients, setIngredients] = useState({});
  const handleClick = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${result.id}/ingredientWidget.json?apiKey=b2956dde1fd04222977b0a3bdf9768ac
      `
    );

    setIngredients(response.data.ingredients);
  };
  return (
    <>
      <tr key={result.id} className="search-result">
        <td>{result.title}</td>
        <td>Ready in {result.readyInMinutes} minutes</td>
        <td>
          <td className="get-ingredients">
            Get Ingredients <button onClick={handleClick}>Get</button>
          </td>
          {/* <img
                  alt={result.title}
                  href="https://spoonacular.com/productImages/84768-312x231.jpg"
                ></img> */}
        </td>
      </tr>
    </>
  );
};

export default Result;
