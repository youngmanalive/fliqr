import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

const recieveAllAlbums = albums => ({ type: RECEIVE_ALL_ALBUMS, albums });
const recieveAlbum = album => ({ type: RECEIVE_ALBUM, album });
const removeAlbum = albumId => ({ type: REMOVE_ALBUM, albumId });
const recieveAlbumErrors = errors => ({ type: RECEIVE_ALBUM_ERRORS, errors });

export const fetchAllAlbums = id => dispatch => (
  AlbumApiUtil.fetchAllAlbums(id).then(
    albums => dispatch(recieveAllAlbums(albums)),
    err => dispatch(recieveAlbumErrors(err.responseJSON))
  )
);

export const fetchAlbum = id => dispatch => (
  AlbumApiUtil.fetchAlbum(id).then(
    album => dispatch(recieveAlbum(album)),
    err => dispatch(recieveAlbumErrors(err.responseJSON))
  )
);

export const createAlbum = formData => dispatch => (
  AlbumApiUtil.createAlbum(formData).then(
    album => dispatch(recieveAlbum(album)),
    err => dispatch(recieveAlbumErrors(err.responseJSON))
  )
);

export const updateAlbum = (album, id) => dispatch => (
  AlbumApiUtil.updateAlbum(album, id).then(
    () => dispatch(recieveAlbum(album)),
    err => dispatch(recieveAlbumErrors(err.responseJSON))
  )
);

export const deleteAlbum = albumId => dispatch => (
  AlbumApiUtil.deleteAlbum(albumId).then(
    () => dispatch(removeAlbum(albumId)),
    err => dispatch(recieveAlbumErrors(err.responseJSON))
  )
);