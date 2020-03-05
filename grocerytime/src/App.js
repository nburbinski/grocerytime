import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";

// Import Reducers
import ingredientReducer from "./reducers/IngredientReducer";
import recipeReducer from "./reducers/RecipeReducer";
import notificationReducer from "./reducers/NotificationReducer";

const reducer = combineReducers({
  ingredients: ingredientReducer,
  recipes: recipeReducer,
  notification: notificationReducer
});

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const Menu = () => {
  return (
    <div>
      <Link to="/">Recipes</Link> | <Link to="/ingredients">Ingredients</Link>
    </div>
  );
};

const Body = ({ setNotification }) => {
  return (
    <div>
      <Provider store={store}>
        <Route exact path="/" render={() => <RecipeList store={store} />} />
        <Route exact path="/ingredients" render={() => <IngredientList />} />
      </Provider>
    </div>
  );
};

function App() {
  const [notification, setNotification] = useState("");
  console.log(notification);

  return (
    <div className="App">
      <Router>
        <header>
          <div>{notification}</div>
          <h1>Grocery List</h1>
          <Menu />
        </header>
        <div className="container">
          <Body setNotification={setNotification} />
        </div>
      </Router>
    </div>
  );
}

export default App;
