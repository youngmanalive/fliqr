export const fetchAllPhotos = () => (
  $.ajax({
    method: 'GET',
    url: `api/photos`
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const create = formData => (
  $.ajax({
    method: 'POST',
    url: `api/photos`,
    processData: false,
    contentData: false,
    data: formData
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
