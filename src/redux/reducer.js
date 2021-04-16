import { GET_ARTISTS, SET_SEARCH } from "./actions/types";
const initState = {
  artists: [],
  search: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTISTS: {
      return {
        ...state,
        artists: action.payload,
      };
    }
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    default:
      return state;
  }
};
export default reducer;
