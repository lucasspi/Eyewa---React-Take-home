import { GET_ARTISTS, SET_SEARCH } from "./types";
const DZ = window.DZ;

export const getArtists = (search) => (dispatch) => {
  console.log("search", search);
  DZ.api(`/search/artist/autocomplete?limit=5&q=${search}`, (res) => {
    console.log("res getArtists", res);
    dispatch({ type: GET_ARTISTS, payload: res.data });
  });
};

export const setSearch = (search) => (dispatch) => {
  dispatch({ type: SET_SEARCH, payload: search });
};
