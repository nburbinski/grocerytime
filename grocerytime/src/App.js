import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import "./App.css";

import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";

const Menu = () => {
  return (
    <div>
      <Link to="/">Ingredients</Link> <Link to="/recipes">Recipes</Link>
    </div>
  );
};

const Body = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Butter", amount: 2, measurement: "oz" },
    { name: "Wine", amount: 3, measurement: "oz" },
    { name: "Milk", amount: 1, measurement: "oz" }
  ]);
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => (
          <IngredientList
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        )}
      />
      <Route
        exact
        path="/recipes"
        render={() => <RecipeList ingredients={ingredients} />}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Grocery List</h1>
          <Menu />
        </header>
        <div className="container">
          <Body />
        </div>
      </Router>
    </div>
  );
}

export default App;
