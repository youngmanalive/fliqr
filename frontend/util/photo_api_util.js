export const fetchAllPhotos = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos`,
    data: { user_id: id }
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const createPhoto = formData => (
  $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: formData,
    processData: false,
    contentType: false
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
  })
);

export const deletePhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
