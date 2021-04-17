import {
  GET_ARTISTS,
  SET_SEARCH,
  GET_ALBUMS,
  SET_CURRENT_ARTIST,
  SET_CURRENT_ALBUM,
  GET_ALBUM_SONGS,
  SET_SONG,
} from "./types";
const DZ = window.DZ;

export const getArtists = (search) => (dispatch) => {
  DZ.api(`/search/artist/autocomplete?limit=5&q=${search}`, (res) =>
    dispatch({ type: GET_ARTISTS, payload: res.data })
  );
};

export const getAlbums = (artistId) => (dispatch) => {
  DZ.api(`/artist/${artistId}/albums?limit=8`, (res) =>
    dispatch({ type: GET_ALBUMS, payload: res.data })
  );
};

export const getAlbumSongs = (albumId) => (dispatch) => {
  DZ.api(`/album/${albumId}/tracks`, (res) =>
    dispatch({ type: GET_ALBUM_SONGS, payload: res.data })
  );
};

export const setSearch = (search) => (dispatch) =>
  dispatch({ type: SET_SEARCH, payload: search });

export const setSongs = (data) => (dispatch) =>
  dispatch({ type: SET_SONG, payload: data });

export const setCurrentArtist = (artist) => (dispatch) =>
  dispatch({ type: SET_CURRENT_ARTIST, payload: artist });

export const setCurrentAlbum = (album) => (dispatch) =>
  dispatch({ type: SET_CURRENT_ALBUM, payload: album });
