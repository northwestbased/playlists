

export const ADD_VIDEO = 'ADD_VIDEO'
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST'
export const PLAY_VIDEO = 'PLAY_VIDEO'
export const OPEN_PLAYLIST = 'OPEN_PLAYLIST'
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'
export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST'
export const FETCH_VIDEOS_FAILURE = 'FETCH_VIDEOS_FAILURE'
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS'
export const TOGGLE_PLAYLIST_VISIBILITY = 'TOGGLE_PLAYLIST_VISIBILITY'


export function playVideo(videos) {
    return {
        type: PLAY_VIDEO,
        queue:videos
    }
}

export function openPlaylist(playlistId) {
    return {
        type: OPEN_PLAYLIST,
        playlistId
    }

}

export function createPlaylist(title) {
    return {
        type: CREATE_PLAYLIST,
        title
    }
}

export function deletePlaylist(playlistId) {
    return {
        type: DELETE_PLAYLIST,
        playlistId
    }
}

export function addVideo(video, playlistId) {
    return {
        type: ADD_VIDEO,
        video,
        playlistId
    }
}

export function removeVideo(videoIndex, playlistId) {
    return {
        type: REMOVE_VIDEO,
        videoIndex,
        playlistId
    }
}

export function playlistIsShown(bool) {
    return {
        type: TOGGLE_PLAYLIST_VISIBILITY,
        value: bool
    }
}

const youtube_url = 'https://www.googleapis.com/youtube/v3/search';
const key = 'AIzaSyCR7M6CQcjevymrItkF3cOdDgLSClKMeW0';


export function fetchResults(keyword) {
    return function(dispatch) {
      dispatch({
        type: 'FETCH_VIDEOS_REQUEST',
        keyword
      });
      const url = `${youtube_url}?key=${key}&part=snippet&q=${keyword}&maxResults=30&type=video&videoEmbeddable=true`
      return fetch(url)
        .then(response => response.json().then(body => ({ response, body })))
        .then(({ response, body }) => {
          if (!response.ok) {
            dispatch({
              type: 'FETCH_VIDEOS_FAILURE',
              error: body.error
            });
          } else {
            dispatch({
              type: 'FETCH_VIDEOS_SUCCESS',
              results: body
            });
          }
        });
    }
  }