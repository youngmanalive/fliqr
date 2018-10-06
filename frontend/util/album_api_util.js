export const fetchAllAlbums = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums`,
    data: { user_id: id }
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

export const createAlbum = formData => (
  $.ajax({
    method: 'POST',
    url: `api/albums`,
    data: formData,
    processData: false,
    contentType: false
  })
);

export const updateAlbum = (album, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${id}`,
    data: album,
    processData: false,
    contentType: false
  })
);

export const deleteAlbum = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  })
);