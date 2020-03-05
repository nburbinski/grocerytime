import React, { useState } from "react";
import { connect } from "react-redux";

import Ingredient from "./Ingredient";
import {
  addIngredient,
  delIngredient,
  updateIngredient
} from "../reducers/IngredientReducer";

const IngredientList = props => {
  const [grocery, setGrocery] = useState("");
  const [measurement, setMeasurement] = useState("oz(s)");
  const [amount, setAmount] = useState(1);

  // Delete Ingredient
  const handleIngredientDelete = name => {
    props.delIngredient(name);
  };

  // Add Ingredient
  const handleIngredientAdd = () => {
    // Check if grocery is empty
    if (grocery === "") return;

    const found = props.ingredients.find(g => g.name === grocery);

    // If ingredient exists, update amount
    if (found) {
      const newIngredient = {
        name: found.name,
        amount: found.amount + parseInt(amount),
        measurement: found.measurement
      };

      props.updateIngredient(newIngredient);
      setGrocery("");
      setAmount("1");
      setMeasurement("oz(s)");
      return;
    }

    // Otherwise, add new ingredient
    const newIngredient = {
      name: grocery,
      amount,
      measurement
    };
    props.addIngredient(newIngredient);

    setGrocery("");
    setAmount("1");
    setMeasurement("oz(s)");
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
          {props.ingredients.map(ingredient => {
            return (
              <Ingredient
                key={props.ingredients.indexOf(ingredient)}
                ingredients={props.ingredients}
                ingredient={ingredient}
                measurement={measurement}
                handleDelete={handleIngredientDelete}
              />
            );
          })}
          <tr>
            <td>
              <button onClick={handleIngredientAdd} className="btn-add">
                +
              </button>
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
              <select
                value={measurement}
                onChange={({ target }) => setMeasurement(target.value)}
              >
                <option>oz(s)</option>
                <option>cup(s)</option>
                <option>lb(s)</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  };
};

const mapDispatchToProps = {
  addIngredient,
  delIngredient,
  updateIngredient
};

const connectedIngredients = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientList);

export default connectedIngredients;
