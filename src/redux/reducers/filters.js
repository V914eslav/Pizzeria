const initialsState = {
  category: null,
  sotrBy: "popular",
};
const filters = (state = initialsState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};
export default filters;
