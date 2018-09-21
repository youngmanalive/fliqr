import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

const receiveAllPhotos = photos => ({ type: RECEIVE_ALL_PHOTOS, photos });
const receivePhoto = photo => ({ type: RECEIVE_PHOTO, photo });
const removePhoto = photoId => ({ type: REMOVE_PHOTO, photoId });
const receiveErrors = errors => ({ type: RECEIVE_PHOTO_ERRORS, errors });

export const fetchAllPhotos = id => dispatch => (
  PhotoApiUtil.fetchAllPhotos(id).then(
    photos => dispatch(receiveAllPhotos(photos)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id).then(
    photo => dispatch(receivePhoto(photo)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const createPhoto = formPhoto => dispatch => (
  PhotoApiUtil.createPhoto(formPhoto).then(
    photo => dispatch(receivePhoto(photo)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const updatePhoto = formPhoto => dispatch => (
  PhotoApiUtil.updatePhoto(formPhoto).then(
    photo => dispatch(receivePhoto(photo)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const deletePhoto = photoId => dispatch => (
  PhotoApiUtil.deletePhoto(photoId).then(
    () => dispatch(removePhoto(photoId)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
