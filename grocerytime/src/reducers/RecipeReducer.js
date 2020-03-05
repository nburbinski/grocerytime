const initialState = [
  { name: "Chicken Alfredo", ingredients: ["chicken", "alfredo"] },
  { name: "Bulgogi", ingredients: ["chicken", "miso"] },
  { name: "Tikka Masala", ingredients: ["chicken", "sauce"] }
];

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return state;
    case "ADD_RECIPE":
      return state.concat(action.data);
    case "DEL_RECIPE":
      return state.filter(recipe => recipe.name !== action.data);
    default:
      return state;
  }
};

export default recipeReducer;
