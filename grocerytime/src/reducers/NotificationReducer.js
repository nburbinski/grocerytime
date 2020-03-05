const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "ON": {
      return action.data;
    }
    case "OFF": {
      return "";
    }
    default:
      return state;
  }
};
