import React, { useState } from "react";
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients, setIngredients }) => {
  const [grocery, setGrocery] = useState("");
  const [measurement, setMeasurement] = useState("oz");
  const [amount, setAmount] = useState(1);

  // Add Grocery
  const add = () => {
    if (grocery === "") return;

    const found = ingredients.find(g => g.name === grocery);

    // If ingredient exists, increase amount
    if (found) {
      const newIngredient = {
        name: found.name,
        amount: found.amount + parseInt(amount),
        measurement: found.measurement
      };

      setIngredients(
        ingredients.map(g =>
          g.name === newIngredient.name ? (g = newIngredient) : g
        )
      );
      setGrocery("");
      setAmount("1");
      setMeasurement("oz");
      return;
    }

    // Otherwise, create ingredient and add to list

    const newIngredient = {
      name: grocery,
      amount: amount,
      measurement: measurement
    };

    setIngredients(ingredients.concat({ ...newIngredient }));
    setGrocery("");
    setAmount("1");
    setMeasurement("oz");
  };
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Ingredient Name</th>
            <th>Amount</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(ingredient => {
            return (
              <Ingredient
                key={ingredients.indexOf(ingredient)}
                ingredients={ingredients}
                ingredient={ingredient}
                setIngredients={setIngredients}
                measurement={measurement}
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
                value={amount}
                onChange={({ target }) => setAmount(parseInt(target.value))}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </td>
            <td>
              <select
                value={measurement}
                onChange={({ target }) => setMeasurement(target.value)}
              >
                <option>oz</option>
                <option>cup</option>
                <option>lb</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;
