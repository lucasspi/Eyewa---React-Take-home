import {
  SET_SEARCH,
  GET_ARTISTS,
  GET_ALBUMS,
  SET_CURRENT_ARTIST,
  SET_CURRENT_ALBUM,
  GET_ALBUM_SONGS,
  SET_SONG
} from "./actions/types";
const initState = {
  search: "",
  artists: [],
  artist: {},
  albums: null,
  album: {},
  songs: null,
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
    case GET_ALBUMS: {
      return {
        ...state,
        albums: action.payload,
      };
    }
    case SET_CURRENT_ARTIST: {
      return {
        ...state,
        artist: action.payload,
      };
    }
    case SET_CURRENT_ALBUM: {
      return {
        ...state,
        album: action.payload,
      };
    }
    case SET_SONG: {
      return {
        ...state,
        songs: action.payload,
      };
    }
    case GET_ALBUM_SONGS: {
      return {
        ...state,
        songs: action.payload,
      };
    }

    default:
      return state;
  }
};
export default reducer;
