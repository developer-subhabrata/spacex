const initialState = { spacexLists: [], isLoading: false };

const spacexReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_DATA_SUCCESS":
      console.log("list data success");
      return { ...state, spacexLists: action.data };
    case "LIST_DATA_ERROR":
      console.log("list data error");
      return state;
    case "LOADING":
      return { ...state, isLoading: action.data.status };
    default:
      return state;
  }
};

export default spacexReducer;
