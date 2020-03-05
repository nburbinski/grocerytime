const initialState = [
  { name: "Butter", amount: 2, measurement: "oz(s)" },
  { name: "Wine", amount: 3, measurement: "oz(s)" },
  { name: "Milk", amount: 1, measurement: "oz(s)" }
];

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INGREDIENTS":
      return state;
    case "ADD_INGREDIENT":
      return state.concat(action.data);
    case "DEL_INGREDIENT":
      return state.filter(ingredient => ingredient.name !== action.data);
    case "UPDATE_INGREDIENT":
      console.log(action.data);
      return state.map(i =>
        i.name === action.data.name ? (i = action.data) : i
      );
    default:
      return state;
  }
};

export const addIngredient = content => {
  return {
    type: "ADD_INGREDIENT",
    data: content
  };
};

export const delIngredient = id => {
  return {
    type: "DEL_INGREDIENT",
    data: id
  };
};

export const updateIngredient = content => {
  return {
    type: "UPDATE_INGREDIENT",
    data: content
  };
};
export default ingredientReducer;
