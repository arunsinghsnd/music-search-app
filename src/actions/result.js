import {
  SET_ALBUMS,
  SET_ARTISTS,
  SET_PLAYLIST,
  ADD_ALBUMS,
  ADD_ARTISTS,
  ADD_PLAYLIST,
} from "../utils/constants";
import { get } from "../utils/api";

export const setAlbums = albums => ({
  type: SET_ALBUMS,
  albums,
});

export const addAlbums = albums => ({
  type: ADD_ALBUMS,
  albums,
});

export const setPlayList = playlists => ({
  type: SET_PLAYLIST,
  playlists,
});

export const addPlaylist = playlists => ({
  type: ADD_PLAYLIST,
  playlists,
});

export const setArtist = artists => ({
  type: SET_ARTISTS,
  artists,
});

export const addArtist = artists => ({
  type: ADD_ARTISTS,
  artists,
});

export const initiateGetResult = searchTerm => {
  return async dispatch => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;
      const result = await get(API_URL);
      console.log(result);
      const { albums, artists, playlists } = result;
      dispatch(setAlbums(albums));
      dispatch(setArtist(artists));
      return dispatch(setPlayList(playlists));
    } catch (error) {
      console.log("error", error);
    }
  };
};
